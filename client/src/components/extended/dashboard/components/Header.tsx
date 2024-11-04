import * as React from 'react';
import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link, Link as RouterLink } from 'react-router-dom';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Context from '../../../../Context';

import Search from './Search';

export default function Header(): JSX.Element {
  const value = useContext(Context);
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        {/* <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown /> */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          {value.user ? (
            <p>
              Добро пожаловать, {value.user?.email}{' '}
              <Button
                variant="contained"
                size="small"
                onClick={value.logoutHandler}
                sx={{ marginLeft: 2 }}
              >
                Выйти
              </Button>
            </p>
          ) : (
            <>
              <Button color="primary" variant="text" size="small" component={Link} to="/signin">
                Войти
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component={Link}
                to="/signup"
              >
                Регистрация
              </Button>
            </>
          )}

          <ColorModeIconDropdown />
        </Box>
      </Stack>
    </Stack>
  );
}
