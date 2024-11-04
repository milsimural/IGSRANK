import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MarketingPage from './components/extended/marketing-page/MarketingPage';
import CityPage from './components/pages/CityPage';
import Dashboard from './components/extended/dashboard/Dashboard';
import axiosInstance, { setAccessToken } from './axiosInstance';
import SignIn from './components/extended/sign-in/SignIn';
import SignUp from './components/extended/sign-up/SignUp';
import Context from './Context';
import type { User } from './components/types/user';

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  const logoutHandler = async (): Promise<void> => {
    await axiosInstance.get('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        console.log(`Из рефреша пришел User: ${res.data.user}`);
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
          path: '/city',
          element: <CityPage />,
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

  return (
    <Context.Provider value={{ user, setUser, logoutHandler }}>
      <RouterProvider router={router} />;
    </Context.Provider>
  );
}

export default App;
