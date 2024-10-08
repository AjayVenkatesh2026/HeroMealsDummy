import {useCallback} from 'react';
import useGetCategories from 'src/services/hooks/useGetCategories';
import useGetRestaurants from 'src/services/hooks/useGetRestaurants';

const useGetAppInit = () => {
  const {getCategories, loading: isCategoriesLoading} = useGetCategories({});
  const {getRestaurants, loading: isRestaurantsLoading} = useGetRestaurants({});

  const getInitData = useCallback(() => {
    getCategories();
    getRestaurants();
  }, [getCategories, getRestaurants]);

  return {
    getInitData,
    loading: isCategoriesLoading || isRestaurantsLoading,
  };
};

export default useGetAppInit;
