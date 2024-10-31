import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to="/city">city</Link>
    </div>
  );
}
