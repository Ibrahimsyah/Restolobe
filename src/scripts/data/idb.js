import {openDB} from 'idb';
import CONFIG from '../globals/config';

const {DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

export default {
  getRestaurant: async (restaurantId) => {
    return (await dbPromise).get(OBJECT_STORE_NAME, restaurantId);
  },

  getAllRestaurants: async () => {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  insertRestaurant: async (restaurant) => {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  deleteRestaurant: async (restaurantId) => {
    return (await dbPromise).delete(OBJECT_STORE_NAME, restaurantId);
  },
};


