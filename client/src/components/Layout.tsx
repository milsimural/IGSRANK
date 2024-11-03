import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NavigationComp from './ui/NavigationComp';
import AppAppBar from './extended/marketing-page/components/AppAppBar';
import AppTheme from '../shared-theme/AppTheme';

export default function Layout({ user, logoutHandler }): JSX.Element {
  return (
    <>
      <AppAppBar />
      <Outlet />
    </>
  );
}
