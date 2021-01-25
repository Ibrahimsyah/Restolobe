import ImageProvider from '../../../../utils/image-provider';

class RestaurantDetail extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    const restaurant = this._content;
    let categories = '';
    restaurant.categories.forEach((category) => {
      categories += `<span class="category">${category.name}</span>`;
    });

    this.innerHTML = `
        <div class="left">
            <img src=${ImageProvider.medium(restaurant.pictureId)} 
              alt="${restaurant.name}" 
              class="image">
            <p class="rating"> ${restaurant.rating}</p>
        </div>
        <div class="right">
            <h1 class="title">${restaurant.name}</h1>
            <p class="address">${restaurant.address}</p>
            <p class="city">${restaurant.city}</p>
            <div class="categories">
              ${categories}
            </div>
            <restaurant-categories categories="${restaurant.categories}"/>
            <p class="description">${restaurant.description}</p>
        </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
