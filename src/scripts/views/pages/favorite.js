import RestaurantDB from '../../data/idb';
import '../components/restaurant-card';

export default {
  render: async () => {
    return `
    <div class="fadeIn">
      <section id="restaurants" class="container">
      <h1 class="title">Favorite Restaurant</h1>
      <p class="subtitle">List of all your favorite restaurants</p>
      <div id="resto-container"></div>
      </section>
    </div>
    `;
  },

  afterRender: async () => {
    const restaurants = await RestaurantDB.getAllRestaurants();
    const container = document.querySelector('#resto-container');
    restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.content = restaurant;
      container.appendChild(restaurantCard);
    });
  },
};
