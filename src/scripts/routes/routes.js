import Home from '../views/pages/home';
import Restaurant from '../views/pages/restaurant/restaurant';
import Favorite from '../views/pages/favorite';

export default {
  '/': Home,
  '/restaurant/:id': Restaurant,
  '/favorite': Favorite,
};
