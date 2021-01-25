import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import Idb from '../../src/scripts/data/idb';

export default {
  createLikeButtonWithRestaurant: async (restaurant) => {
    await LikeButtonPresenter.init({
      container: document.querySelector('#likeContainer'),
      restaurant: restaurant,
      favoriteRestaurant: Idb,
    });
  },
};
