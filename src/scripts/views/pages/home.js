import DicodingApi from '../../data/dicoding-api';
import '../components/restaurant-card';
export default {
  render: async () => {
    return `
    <div>
      <section id="hero">
      <img src="/images/hero.jpg"
        class="hero-background"
        srcset="/images/hero-small.jpg 480w, /images/hero-large.jpg 800w"
        sizes="(max-width: 600px) 480px, 800px"
        alt="Restolobe Hero Image"/>
      <h1 class="title">Restolobe</h1>
      <h2 class="subtitle">Find your favorite restaurant around the globe!</h2>
      <a href="#restaurants"><button>Browse</button></a>
      </section>
      <section id="restaurants" class="container">
      <h1 class="title">Restaurant List</h1>
      <p class="subtitle">Browse hundred of restaurants</p>
      <div class="loading">
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
      <div id="resto-container">
      </div>
      </section>
    </div>
    `;
  },

  afterRender: async () => {
    const loader = document.querySelector('.loading');
    const container = document.querySelector('#resto-container');
    const restaurants = await DicodingApi.getRestaurantsList();
    loader.remove();
    restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.content = restaurant;
      container.appendChild(restaurantCard);
    });
  },
};
