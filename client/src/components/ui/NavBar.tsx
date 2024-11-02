import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Создаем стилизованный контейнер для центрирования содержимого на экране
const NavBarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
});

// Стилизуем заголовок
const Title = styled('h1')({
  marginBottom: '1rem',
  color: '#333',
});

// Стилизуем ссылки для стилизованного внешнего вида
const StyledLink = styled(Link)({
  textDecoration: 'none',
  margin: '0.5rem 0',
  padding: '0.5rem 1rem',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: '4px',
  transition: 'background-color 0.3s, color 0.3s',

  '&:hover': {
    backgroundColor: '#333',
    color: '#fff',
  },
});

export default function NavBar(): JSX.Element {
  return (
    <NavBarContainer>
      <Title>NavBar</Title>
      <StyledLink to="/city">City</StyledLink>
      <StyledLink to="/marketing">Marketing</StyledLink>
      <StyledLink to="/signin">Sign In</StyledLink>
      <StyledLink to="/signup">Sign Up</StyledLink>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
    </NavBarContainer>
  );
}
