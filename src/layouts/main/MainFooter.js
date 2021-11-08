import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack, Box } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../routes/paths';
//
import Logo from '../../components/Logo';
import bg from './footer-bg.png';
import Ios from './app-store.svg';
import GooglePlay from './google-play.svg';
// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Twitter', icon: twitterFill }
];

const SectionLine = styled('div')(() => ({
  width: '35px',
  height: '4px',
  background: '#ff5b37',
  borderRadius: '5px',
  position: 'relative',
  marginTop: '5px'
}))

const LINKS = [

  {
    headline: 'Useful Links',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Blog', href: '/blog' },
      { name: 'Login', href: '/login' },
      { name: 'Register', href: '/register' },
      { name: 'Forgot Password', href: '/forgetpassword' },

    ]
  },
  {
    headline: 'Help & Support',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Blog', href: '/blog' },
      { name: 'Login', href: '/login' },
      { name: 'Register', href: '/register' },
      { name: 'Forgot Password', href: '/forgetpassword' },

    ]
  },
  {
    headline: 'Useful Links',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Blog', href: '/blog' },
      { name: 'Login', href: '/login' },
      { name: 'Register', href: '/register' },
      { name: 'Forgot Password', href: '/forgetpassword' },

    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${bg})`,
  color: '#ffff',
  overflow: 'hidden'
}));


// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <div className="row p-5"
      >

        <div className="col-sm-12 col-md-3 col-lg-3 ">
          <Stack spacing={2}>
            <Typography component="h2" variant="underline" sx={{ pb: 2, fontSize: '19px' }}>
              Office Address
              <SectionLine />
            </Typography>

            <Typography
              variant="p"
              sx={{ display: 'block' }}
            >
              New York, USA (HQ) 750 Sing Sing Rd, Horseheads, NY, 14845 Call: 469-537-2410 (Toll-Free)
            </Typography>
            <Typography
              variant="p"
              sx={{ display: 'block' }}
            >
              Sydney, Australia 24 Farrar Parade COOROW WA 6515 Call: (08) 9064 9807 (Toll-Free)
            </Typography>

          </Stack>
        </div>
        {LINKS.map((list) => {
          const { headline, children } = list;
          return (
            <div className="col-sm-12 col-md-2 col-lg-2"
            >
              <Stack key={headline} spacing={1}>
                <Typography component="h2" sx={{ pb: 2, fontSize: '19px' }} variant="underline" >
                  {headline}              <SectionLine />

                </Typography>
                {
                  children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      variant="body2"
                      component={RouterLink}
                      sx={{ display: 'block' }}
                    >
                      {link.name}
                    </Link>
                  ))
                }
              </Stack>
            </div>

          );
        })}
        <div className="col-sm-12 col-md-3 col-lg-3"
        >
          <Stack spacing={1}>
            <Typography component="h2" sx={{ pb: 2, fontSize: '19px' }} variant="underline" >
              Mobile Application
              <SectionLine />

            </Typography>

            <Typography
              variant="p"
              sx={{ display: 'block', }}
            >
              Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.            </Typography>

            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={6}><img src={Ios} style={{ width: '150px', height: '100px' }} /></Grid>
              <Grid item xs={6}><img src={GooglePlay} style={{ width: '150px', height: '100px' }} /></Grid>
            </Grid>
          </Stack>
        </div>
      </div>
      <Divider className="mx-5" />
      <Grid container sx={{ display: 'flex', alignItems: 'center', height: '100px', p: 3 }} >
        <Grid item lg={6} md={6} xs={12} >
          <Typography
            component="p"
            variant="body2"
            sx={{
              p: 1,
              fontSize: 13,
              textAlign: { xs: 'left', md: 'left' }
            }}
          >
            © 2021. All rights reserved
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Stack
            spacing={1.5}
            direction="row"
            justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          >
            {SOCIALS.map((social) => (
              <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                <Icon icon={social.icon} width={16} height={16} />
              </IconButton>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </RootStyle >
  );
}
