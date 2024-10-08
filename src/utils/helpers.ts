import {random, shuffle} from 'radash';

import type {
  IProfile,
  IAddress,
  IRestaurantResponse,
  IRestaurant,
} from 'src/types/ordering';
import copies from 'src/constants/copies';
import {get} from 'src/storage';
import storageKeys from 'src/storage/keys';
import {dummyImageUrl, dummyTags} from 'src/constants/dummyData';

const {PESO} = copies;

const isValidProfile = (profile: any): profile is IProfile => {
  if (typeof profile === 'object') {
    const keys = Object.keys(profile);

    return (
      keys.length > 0 &&
      keys.includes('name') &&
      keys.includes('phone') &&
      !!profile.name &&
      !!profile.phone
    );
  }

  return false;
};

const getInitials = ({name}: {name: string}) => {
  return name
    .split(' ')
    .map(s => s[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getMergedAddress = ({address}: {address?: IAddress | {}}) => {
  const {line_1 = '', line_2 = ''} = address as IAddress;
  let mergedAddress = '';
  if (address && Object.keys(address).length > 0) {
    if (line_1 && typeof line_1 === 'string') {
      mergedAddress += line_1;
    }
    if (line_2) {
      mergedAddress += line_2;
    }
  }

  return mergedAddress;
};

const isValidHttpUrl = (string: string) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(string);
};

const getFormattedPrice = (price: number) => {
  return `${PESO}${price.toFixed(2)}`;
};

const getMobileNumberWithCountryCode = (phoneNumber: string) => {
  return `+63 ${phoneNumber}`;
};

const isValidToken = (token: string): boolean => {
  return !!token;
};

const getToken = (): string => {
  return `${get(storageKeys.TOKEN)}` || '';
};

const translateRestaurantResponseToRestaurant = (
  restaurant: IRestaurantResponse,
) => {
  const res: IRestaurant = {
    address: restaurant.address,
    description: restaurant.description,
    image: dummyImageUrl,
    distance: `${random(1, 4)} km`,
    id: restaurant.id,
    name: restaurant.name,
    openingHours: restaurant.operating_hours,
    rating: restaurant.rating,
    tags: shuffle(dummyTags).slice(1, random(0, 3)),
    duration: random(10, 30),
  };

  return res;
};

export {
  getInitials,
  isValidProfile,
  getMergedAddress,
  isValidHttpUrl,
  getFormattedPrice,
  getMobileNumberWithCountryCode,
  getToken,
  translateRestaurantResponseToRestaurant,
  isValidToken,
};
