import CONFIG from './config';

export default {
  restaurantList: `${CONFIG.BASE_API_URL}list`,
  restauranDetail: (restaurantId) => {
    return `${CONFIG.BASE_API_URL}detail/${restaurantId}`;
  },
};
