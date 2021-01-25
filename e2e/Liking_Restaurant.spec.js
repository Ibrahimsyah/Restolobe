/* eslint-disable new-cap */
const assert = require('assert');

Feature('Like Restaurant Function');

Scenario('Liking Restaurant', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('restaurant-card');

  const restaurant = locate('.resto-name').first();
  const restauranTitle = await I.grabTextFrom('.resto-name');
  I.click(restaurant);

  I.seeElement('like-button');
  I.click('like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-card');
  const firstLikedRestaurantTitle = await I.grabTextFrom('.resto-name');

  assert.strictEqual(restauranTitle, firstLikedRestaurantTitle);
});

Scenario('Disliking Restaurant', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('restaurant-card');
  const restaurant = locate('.resto-name').first();
  I.click(restaurant);
  I.seeElement('like-button');
  I.click('like-button');

  I.amOnPage('/');
  const favoriteMenu = locate('[aria-label="Favorite"]');
  I.seeElement(favoriteMenu);
  I.click(favoriteMenu);

  const likedRestaurant = locate('.resto-name').first();
  I.click(likedRestaurant);
  I.seeElement('like-button');
  I.click('like-button');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('restaurant-card');
});
