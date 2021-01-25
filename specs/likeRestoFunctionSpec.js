/* eslint-disable max-len */
import Idb from '../src/scripts/data/idb';
import PresenterFactory from './helpers/presenterFactories';

const initLikeButtonElement = () => {
  document.body.innerHTML = '<div id="likeContainer"></div>';
};

describe('Like Restaurant Functionality', () => {
  beforeEach(() => {
    initLikeButtonElement();
  });

  it('should display like button when a restaurant hasnt been liked before', async () => {
    await PresenterFactory.createLikeButtonWithRestaurant({id: 1});
    expect(
        document.querySelector('[aria-label="add restaurant to favorite"'),
    ).toBeTruthy();
  });

  it(`should display unlike button when a restaurant has been liked before`, async () => {
    await PresenterFactory.createLikeButtonWithRestaurant({id: 1});
    expect(
        document.querySelector('[aria-label="remove restaurant from favorite"'),
    ).toBeFalsy();
  });

  it('should be able to like unliked restaurant', async () => {
    await PresenterFactory.createLikeButtonWithRestaurant({id: 1});
    document.querySelector('like-button').dispatchEvent(new Event('click'));
    const movie = await Idb.getRestaurant(1);
    expect(movie).toEqual({id: 1});
    Idb.deleteRestaurant(1);
  });

  it('should not insert a restaurant with no id', async () => {
    await PresenterFactory.createLikeButtonWithRestaurant({});
    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await Idb.getAllRestaurants()).toEqual([]);
  });
});

describe('disliking a liked restaurant', () => {
  const initLikeButtonElement = () => {
    document.body.innerHTML = '<div id="likeContainer"></div>';
  };

  beforeEach(() => {
    initLikeButtonElement();
    Idb.insertRestaurant({id: 1});
  });

  afterEach(() => {
    Idb.deleteRestaurant(1);
  });

  it('should display dislike button when a restaurant has been liked before', async () => {
    await PresenterFactory.createLikeButtonWithRestaurant({id: 1});
    expect(
        document.querySelector('[aria-label="remove restaurant from favorite"'),
    ).toBeTruthy();
  });

  it('should not display like button when a restaurant has been liked before', async () => {
    await PresenterFactory.createLikeButtonWithRestaurant({id: 1});
    expect(
        document.querySelector('[aria-label="add restaurant to favorite"'),
    ).toBeFalsy();
  });

  it('should not error when the unliked restaurant is not in the list', async () => {
    await PresenterFactory.createLikeButtonWithRestaurant({id: 1});
    await Idb.deleteRestaurant(1);
    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await Idb.getAllRestaurants()).toEqual([]);
  });
});
