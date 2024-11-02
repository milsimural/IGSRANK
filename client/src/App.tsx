import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import MarketingPage from './components/extended/marketing-page/MarketingPage';
import CityPage from './components/pages/CityPage';
import SignUp from './components/extended/sign-up/SignUp';
import SignIn from './components/extended/sign-in/SignIn';
import Dashboard from './components/extended/dashboard/Dashboard';
import axiosInstance, { setAccessToken } from './axiosInstance';

function App(): JSX.Element {
  const [user, setUser] = useState(null);

  const logoutHandler = async () => {
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
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/city',
          element: <CityPage />,
        },
        {
          path: '/marketing',
          element: <MarketingPage />,
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
          element: <Dashboard />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
