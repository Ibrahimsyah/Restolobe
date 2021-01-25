import {favRestaurantModel} from './contracts/favRestaurantContract';
import Idb from '../src/scripts/data/idb';

describe('Restaurant DB Contract', () => {
  afterEach(async () => {
    const restaurants = await Idb.getAllRestaurants();
    restaurants.forEach(async (restaurant) => {
      await Idb.deleteRestaurant(restaurant.id);
    });
  });

  favRestaurantModel(Idb);
});
