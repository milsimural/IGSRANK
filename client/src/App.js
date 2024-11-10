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
import store from './store';
function App() {
    const [user, setUser] = useState(null);
    const logoutHandler = useCallback(async () => {
        await axiosInstance.get('/auth/logout');
        setUser(null);
        setAccessToken('');
    }, []);
    useEffect(() => {
        axiosInstance({ url: '/tokens/refresh', method: 'GET' })
            .then((res) => {
            setUser(res.data.user);
            console.log(`Из рефреша пришел User: ${JSON.stringify(res.data.user)}`);
            setAccessToken(res.data.accessToken);
        })
            .catch(() => setUser(null));
    }, []);
    const routes = [
        {
            element: React.createElement(Layout, null),
            children: [
                {
                    path: '/',
                    element: React.createElement(MarketingPage, null),
                },
                {
                    path: '/signin',
                    element: React.createElement(SignIn, null),
                },
                {
                    path: '/signup',
                    element: React.createElement(SignUp, null),
                },
                {
                    path: '/dashboard',
                    element: React.createElement(Dashboard, null),
                },
            ],
        },
    ];
    const router = createBrowserRouter(routes);
    const contextValue = useMemo(() => ({ user, setUser, logoutHandler }), [user, setUser, logoutHandler]);
    return (React.createElement(Context.Provider, { value: contextValue },
        React.createElement(Provider, { store: store },
            React.createElement(RouterProvider, { router: router }),
            ";")));
}
export default App;
