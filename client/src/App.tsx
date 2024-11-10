import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import MarketingPage from './components/extended/marketing-page/MarketingPage';
import Dashboard from './components/extended/dashboard/Dashboard';
import axiosInstance, { setAccessToken } from './axiosInstance';
import SignIn from './components/extended/sign-in/SignIn';
import SignUp from './components/extended/sign-up/SignUp';
import Context from './Context';
import type { User } from './components/types/user';
import store from './store';

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  const logoutHandler = useCallback(async (): Promise<void> => {
    await axiosInstance.get('/auth/logout');
    setUser(null);
    setAccessToken('');
  }, []);

  type RefreshTokenResponse = {
    user: User;
    accessToken: string;
  };

  useEffect(() => {
    axiosInstance<RefreshTokenResponse>({ url: '/tokens/refresh', method: 'GET' })
      .then((res) => {
        setUser(res.data.user);
        console.log(`Из рефреша пришел User: ${JSON.stringify(res.data.user)}`);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => setUser(null));
  }, []);

  const routes = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MarketingPage />,
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  const contextValue = useMemo(
    () => ({ user, setUser, logoutHandler }),
    [user, setUser, logoutHandler],
  );

  return (
    <Context.Provider value={contextValue}>
      <Provider store={store}>
        <RouterProvider router={router} />;
      </Provider>
    </Context.Provider>
  );
}

export default App;
