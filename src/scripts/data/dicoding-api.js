import API from '../globals/api-endpoints';
import Request from '../utils/request';

export default {
  getRestaurantsList: async () => {
    const {restaurants} = await Request.get(API.restaurantList);
    return restaurants;
  },

  getRestaurantDetail: async (restaurantId) => {
    const {restaurant} = await Request.get(API.restauranDetail(restaurantId));
    return restaurant;
  },
};
