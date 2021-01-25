const favRestaurantModel = (favoriteRestaurant) => {
  it('should return inserted restaurant', async () => {
    await favoriteRestaurant.insertRestaurant({id: 1});
    expect(await favoriteRestaurant.getAllRestaurants())
        .toEqual([{id: 1}]);
  });

  it('should remove a restaurant based on its id', async () => {
    await favoriteRestaurant.insertRestaurant({id: 1});
    await favoriteRestaurant.deleteRestaurant(1);
    expect(await favoriteRestaurant.getAllRestaurants())
        .toEqual([]);
  });

  it('should show favorite restaurant list', async () => {
    await favoriteRestaurant.insertRestaurant({id: 1});
    await favoriteRestaurant.insertRestaurant({id: 2});
    expect(await favoriteRestaurant.getAllRestaurants())
        .toEqual([{id: 1}, {id: 2}]);
  });
};

export {favRestaurantModel};
