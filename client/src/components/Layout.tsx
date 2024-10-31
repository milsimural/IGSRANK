import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
// Где правильнее это сделать, может в App?
export default function Layout(): JSX.Element {
  return (
    <>
      <p>Шаблон</p>
      <NavBar />
      <Outlet />
    </>
  );
}
