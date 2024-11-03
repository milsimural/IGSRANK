import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MarketingPage from './components/extended/marketing-page/MarketingPage';
import CityPage from './components/pages/CityPage';
import Dashboard from './components/extended/dashboard/Dashboard';
import axiosInstance, { setAccessToken } from './axiosInstance';
import SignIn from './components/extended/sign-in/SignIn';
import SignUp from './components/extended/sign-up/SignUp';

function App(): JSX.Element {
  const [user, setUser] = useState();

  const logoutHandler = async (): Promise<void> => {
    await axiosInstance.get('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => setUser(null));
  }, []);

  const routes = [
    {
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <MarketingPage user={user} logoutHandler={logoutHandler} />,
        },
        {
          path: '/city',
          element: <CityPage />,
        },
        {
          path: '/signin',
          element: <SignIn user={user} setUser={setUser} />,
        },
        {
          path: '/signup',
          element: <SignUp user={user} setUser={setUser} />,
        },
        {
          path: '/dashboard',
          element: <Dashboard user={user} logoutHandler={logoutHandler} />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
