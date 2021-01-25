class RestaurantReview extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    const reviews = this._content;
    let element = '';
    reviews.forEach((review) => {
      element += `
        <div class="review">
          <h1 class="reviewer">${review.name}</h1>
          <p class="date">${review.date}</p>
          <p class="content">${review.review}</p>
        </div>
      `;
    });
    this.innerHTML = `
      <h1 class="section-title">Customer Reviews</h1>
      ${element}
    `;
  }
}

customElements.define('restaurant-review', RestaurantReview);
