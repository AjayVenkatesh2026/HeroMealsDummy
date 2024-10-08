import {ApolloError, useLazyQuery} from '@apollo/client';

import {USER_LOGIN} from '../gql/login';
import {useAppDispatch} from 'src/hooks/reduxHooks';
import {updateProfile} from 'src/redux/slices/profileSlice';
import {set} from 'src/storage';
import keys from 'src/storage/keys';
import type {IProfile} from 'src/types/ordering';
import {handleGqlError} from 'src/utils/services';

interface ILoginResposne {
  user_login: {
    __typename: string;
    message: string;
    statusCode: string;
    token: string;
    user: IProfile;
  };
}

const useLogin = ({onCompleted}: {onCompleted?: Function}) => {
  const dispatch = useAppDispatch();

  const onLoginCompleted = (data: ILoginResposne) => {
    if (data.user_login.token) {
      set(keys.TOKEN, data.user_login.token);
      dispatch(updateProfile(data.user_login.user));
      if (onCompleted) {
        onCompleted();
      }
    }
  };

  const onError = (err: ApolloError) => {
    handleGqlError({location: 'useLogin', error: err});
  };

  const [login, {loading}] = useLazyQuery(USER_LOGIN, {
    onCompleted: onLoginCompleted,
    onError,
  });

  const loginUser = ({
    mobileNumber,
    otp,
  }: {
    mobileNumber: string;
    otp: string;
  }) => {
    login({variables: {mobileNumber, otp}});
  };

  return {loginUser, loading};
};

export default useLogin;
