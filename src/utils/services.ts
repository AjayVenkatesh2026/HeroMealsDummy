import type {ApolloError} from '@apollo/client';

const handleGqlError = ({
  location = '',
  error,
}: {
  location: string;
  error: ApolloError;
}) => {
  console.error(location, JSON.stringify(error));
};

export {handleGqlError};
