import * as React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../ui/NavBar';

export default function MainPage(): JSX.Element {
  return (
    <div>
      <h1>Рейтинг строительных компаний в Екатеринбурге</h1>

      <NavBar />
    </div>
  );
}
