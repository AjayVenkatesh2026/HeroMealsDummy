import {ApolloError, useLazyQuery} from '@apollo/client';

import {isEmpty} from 'radash';

import type {IProduct} from 'src/types/ordering';
import {handleGqlError} from 'src/utils/services';
import {GET_MENU_ITEMS} from '../gql/menuItems';
import {useCallback, useState} from 'react';

interface IMenuItemsResponse {
  response: {
    __typename: string;
    message: string;
    statusCode: string;
    menuItems: IProduct[];
  };
}

const useGetMenuItemsByRestaurantId = ({
  onCompleted,
}: {
  onCompleted?: Function;
}) => {
  const [menuItems, setMenuItems] = useState<IProduct[]>([]);

  const onGetMenuItems = (data: IMenuItemsResponse) => {
    const {response: {menuItems: menuItemsResponse = []} = {}} = data;
    if (!isEmpty(menuItemsResponse)) {
      setMenuItems(menuItemsResponse);
      if (onCompleted) {
        onCompleted(menuItemsResponse);
      }
    }
  };

  const onError = (err: ApolloError) => {
    if (onCompleted) {
      onCompleted([]);
    }
    handleGqlError({location: 'useGetMenuItemsByRestaurantId', error: err});
  };

  const [getMenuItemsGQL, {loading}] = useLazyQuery(GET_MENU_ITEMS, {
    onCompleted: onGetMenuItems,
    onError,
    fetchPolicy: 'no-cache',
  });

  const getMenuItems = useCallback(
    ({restaurantId = ''}) => {
      if (restaurantId) {
        getMenuItemsGQL({variables: {restaurantId}});
      }
    },
    [getMenuItemsGQL],
  );

  return {getMenuItems, loading, menuItems};
};

export default useGetMenuItemsByRestaurantId;