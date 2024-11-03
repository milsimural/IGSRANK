import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography, Button, IconButton,  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavigationComp({ user, logoutHandler }) {
  return (
    <AppBar position="static">
      <Toolbar>
        
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>IGS Analytics</Typography>
        
        <Typography variant="h6" sx={{ flexGrow: 1 }} style={{marginLeft: 16}}>
          Здравствуйте, {user ? user.name : "Гость"}
        </Typography>

        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit", marginLeft: 16 }}
        >
          <Button color="inherit">Главная</Button>
        </Link>

        <Link
          to="/registration"
          style={{ textDecoration: "none", color: "inherit", marginLeft: 16 }}
        >
          <Button color="inherit" variant="contained">Регистрация</Button>
        </Link>

        {!user && <Link
          to="/login"
          style={{ textDecoration: "none", color: "inherit", marginLeft: 16 }}
        >
          <Button color="inherit" variant="outlined">Войти</Button>
        </Link>}

        {user && (
          <Button
            onClick={logoutHandler}
            color="inherit"
            style={{ textTransform: "none", marginLeft: 16 }}
          >
            Выйти
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}