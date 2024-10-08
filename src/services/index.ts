import {ApolloClient, InMemoryCache} from '@apollo/client';
import {API_URL} from 'config';
import {getToken} from 'src/utils/helpers';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: getToken(),
  },
});

export default client;
