import {shuffle} from 'radash';

import type {IRestaurant} from 'src/types/ordering';

const getCollectNowRestaurants = (restaurants: IRestaurant[]) => {
  return shuffle(restaurants).slice(0, 3);
};

const getNewRestaurants = (restaurants: IRestaurant[]) => {
  return shuffle(restaurants).slice(0, 3);
};

export {getCollectNowRestaurants, getNewRestaurants};
