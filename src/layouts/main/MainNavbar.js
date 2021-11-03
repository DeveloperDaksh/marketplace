import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Grid } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LoginIcon from '@material-ui/icons/LockSharp';


// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const theme = useTheme();
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isLight = theme.palette.mode === 'light';
  return (
    <AppBar color={isHome ? 'transparent' : 'default'} sx={{ boxShadow: 0 }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 },
          })
        }}
      >
        <Grid container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Grid item sx={{
            display: 'flex',
            alignItems: 'center',
          }}>

            <RouterLink to="/" style={{ marginLeft: '2rem' }}>
              <Logo />
            </RouterLink>
          </Grid>
          <Grid item>

            <MHidden width="mdDown">
              <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            </MHidden>
          </Grid>

          <Grid item>

            <Grid container sx={{
              alignItems: 'center', width: 'auto'

            }} spacing={3}>
              <MHidden width="mdDown">
                <Grid item >
                  <RouterLink style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to="/">
                    <AccountCircle />
                    Register
                  </RouterLink>
                </Grid>
                <Grid item >
                  <RouterLink style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', }} to="/">
                    <LoginIcon />
                    Login
                  </RouterLink>
                </Grid>
                <Grid item sx={{ marginRight: '2rem' }}>
                  <Button variant="contained" size="large" color="primary" sx={{ borderRadius: '3rem' }}>POST A PROJECT</Button>
                </Grid>

              </MHidden>
            </Grid>

          </Grid>
          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

        </Grid>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar >
  );
}
