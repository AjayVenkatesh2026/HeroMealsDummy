import {ApolloError, useLazyQuery} from '@apollo/client';

import {isEmpty} from 'radash';

import {useAppDispatch} from 'src/hooks/reduxHooks';
import type {IRestaurantResponse} from 'src/types/ordering';
import {GET_RESTAURANTS} from '../gql/restaurants';
import {addRestaurants} from 'src/redux/slices/restaurantSlice';
import {translateRestaurantResponseToRestaurant} from 'src/utils/helpers';
import {handleGqlError} from 'src/utils/services';

interface IRestaurantsResponse {
  response: {
    __typename: string;
    message: string;
    statusCode: string;
    restaurants: IRestaurantResponse[];
  };
}

const useGetRestaurants = ({onCompleted}: {onCompleted?: Function}) => {
  const dispatch = useAppDispatch();

  const onGetRestaurants = (data: IRestaurantsResponse) => {
    const {response: {restaurants = []} = {}} = data;
    const newRestaurants = restaurants.map(
      translateRestaurantResponseToRestaurant,
    );
    if (!isEmpty(newRestaurants)) {
      dispatch(addRestaurants(newRestaurants));
    }
    if (onCompleted) {
      onCompleted();
    }
  };

  const onError = (err: ApolloError) => {
    handleGqlError({location: 'useGetRestaurants', error: err});
  };

  const [getRestaurants, {loading}] = useLazyQuery(GET_RESTAURANTS, {
    onCompleted: onGetRestaurants,
    onError,
  });

  return {getRestaurants, loading};
};

export default useGetRestaurants;
