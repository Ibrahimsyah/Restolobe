import ImageProvider from '../../utils/image-provider';

class RestaurantCard extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    const restaurant = this._content;
    this.innerHTML = `
        <a href="${`/#/restaurant/${restaurant.id}`}">
          <div class="resto">
            <div class="header">
              <img
                class="lazyload"
                data-src="${ImageProvider.small(restaurant.pictureId)}"
                alt="${restaurant.name}"
              />
              <p class="rating">${restaurant.rating}</p>
            </div>
            <div class="content">
              <p class="resto-name">${restaurant.name}</p>
              <p class="city">${restaurant.city}</p>
              <p class="description">
                ${restaurant.description}
              </p>
            </div>
          </div>
        </a>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
