import React from 'react';
import { Outlet } from 'react-router-dom';
import AppTheme from './extended/shared-theme/AppTheme';

export default function Layout(): JSX.Element {
  return <Outlet />;
}
