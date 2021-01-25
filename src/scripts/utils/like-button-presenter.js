import '../views/components/like-button';

export default {
  async _isLiked() {
    if (this._restaurant.id) {
      const restaurant =
        await this._favoriteRestaurant.getRestaurant(this._restaurant.id);
      return !!restaurant;
    }
  },

  async _insertFavoriteRestaurant(restaurant) {
    if (restaurant.id) {
      await this._favoriteRestaurant.insertRestaurant(restaurant);
    } else {
      return;
    }
  },

  async _renderButton() {
    const button = document.createElement('like-button');
    const liked = await this._isLiked();
    button.liked = liked;
    this._container.innerHTML = '';
    this._container.appendChild(button);
    button.addEventListener('click', async () => {
      if (liked) {
        await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      } else {
        await this._insertFavoriteRestaurant(this._restaurant);
      }
      this._renderButton();
    });
  },

  async init({container, restaurant, favoriteRestaurant}) {
    this._container = container;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;
    await this._renderButton();
  },
};
