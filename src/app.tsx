import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { QueryClientProvider } from 'react-query';
import { getClient } from './queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import Gnb from './components/gnb';
import { RecoilRoot } from 'recoil';

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Gnb />
        {elem}
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
