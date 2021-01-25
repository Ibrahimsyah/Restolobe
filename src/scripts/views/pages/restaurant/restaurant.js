import UrlParser from '../../../routes/url-parser';
import Api from '../../../data/dicoding-api';
import './components/restaurant-detail';
import './components/restaurant-menu';
import './components/restaurant-review';
import LikeButtonPresenter from '../../../utils/like-button-presenter';
import Idb from '../../../data/idb';

export default {
  render: async () => {
    return `
      <div id="container" class="fadeIn">
        <div class="loading">
          <div class="lds-ripple"><div></div><div></div></div>
        </div>
      </div>
      <div id="likeContainer"></div>
    `;
  },

  afterRender: async () => {
    const loader = document.querySelector('.loading');
    const {id} = UrlParser.parseWithoutCombiner();
    const restaurantDetail = await Api.getRestaurantDetail(id);
    loader.remove();
    const container = document.querySelector('#container');
    const detailElement = document.createElement('restaurant-detail');
    detailElement.content = restaurantDetail;

    const menuElement = document.createElement('restaurant-menu');
    menuElement.classList.add('container');
    menuElement.content = restaurantDetail.menus;

    const reviewElement = document.createElement('restaurant-review');
    reviewElement.content = restaurantDetail.customerReviews;

    container.appendChild(detailElement);
    container.appendChild(menuElement);
    container.appendChild(reviewElement);

    const LikeButtonContainer = document.querySelector('#likeContainer');
    LikeButtonPresenter.init({
      container: LikeButtonContainer,
      favoriteRestaurant: Idb,
      restaurant: restaurantDetail,
    });
  },
};
