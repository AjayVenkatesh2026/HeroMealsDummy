import {ApolloError, useLazyQuery} from '@apollo/client';

import {isEmpty} from 'radash';

import {useAppDispatch} from 'src/hooks/reduxHooks';
import type {ICategory} from 'src/types/ordering';
import {GET_CATEGORIES} from '../gql/categories';
import {addCategories} from 'src/redux/slices/categoriesSlice';

interface ICategoriesResponse {
  resposne: {
    __typename: string;
    message: string;
    statusCode: string;
    categories: ICategory[];
  };
}

const useGetCategories = ({onCompleted}: {onCompleted?: Function}) => {
  const dispatch = useAppDispatch();

  const onGetCategories = (data: ICategoriesResponse) => {
    const {resposne: {categories = []} = {}} = data;
    if (!isEmpty(categories)) {
      dispatch(addCategories(categories));
    }
    if (onCompleted) {
      onCompleted();
    }
  };

  const onError = (err: ApolloError) => {
    console.error(JSON.stringify(err));
  };

  const [getCategories, {loading}] = useLazyQuery(GET_CATEGORIES, {
    onCompleted: onGetCategories,
    onError,
  });

  return {getCategories, loading};
};

export default useGetCategories;
