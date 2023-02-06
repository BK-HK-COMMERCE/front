import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

export const getClient = () => {
  let client: QueryClient | null = null;

  if (!client) {
    return (client = new QueryClient({}));
  }

  return client;
};
