import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Card, Stack, Link, Container, Typography, Tooltip, FormControlLabel, Checkbox } from '@material-ui/core';
import { Nav, NavItem, NavLink } from 'reactstrap';
// hooks
import useAuth from '../../hooks/useAuth';
// routes
import { PATH_AUTH } from '../../routes/paths';
// layouts
import AuthLayout from '../../layouts/AuthLayout';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { RegisterForm } from '../../components/authentication/register';
import AuthFirebaseSocials from '../../components/authentication/AuthFirebaseSocial';
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 720,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  const { method } = useAuth();
  const [activeTab, setActive] = useState('freelancer');
  const navLink = {
    background: '#fff',
    borderRadius: '3px',
    color: '#FF5B37',
    border: '1px solid #FF5B37',
    padding: '0.75rem 1rem'
  }

  return (
    <RootStyle title="Register | Minimal-UI">

      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
          Login
        </Link>
      </AuthLayout>

      <Container>
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5, textAlign: 'center' }}>

            <Box sx={{ flexGrow: 1 }}>
              <Logo />

              <Typography variant="h4" gutterBottom>
                Join Kofejob
              </Typography>
              <p>
                Make the most of your professional life
              </p>
              <div>
                <Nav pills className="justify-content-between">
                  <NavItem className="flex-grow-1 mx-2" >
                    <NavLink
                      href="#"
                      style={activeTab === 'freelancer' ? {
                        color: '#fff',
                        backgroundColor: '#FF5B37',
                        border: '1px solid #FF5B37',
                        padding: '0.75rem 1rem'
                      } : navLink}
                      onClick={function noRefCheck() {
                        setActive('freelancer')
                      }}
                    >
                      Freelance
                    </NavLink>

                  </NavItem>
                  <NavItem className="flex-grow-1 mx-2" >
                    <NavLink
                      href="#"
                      style={activeTab === 'company' ? {
                        color: '#fff',
                        backgroundColor: '#FF5B37',
                        border: '1px solid #FF5B37',
                        padding: '0.75rem 1rem'
                      } : navLink}
                      onClick={function noRefCheck() {
                        setActive('company')
                      }}
                    >
                      Company
                    </NavLink>

                  </NavItem>
                </Nav>
              </div>
            </Box>


          </Stack>


          <RegisterForm />

          <Typography variant="body2" align="left" sx={{ color: 'text.secondary', mt: 3 }}>
            <Checkbox checked={true} />
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <AuthFirebaseSocials />
          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to={PATH_AUTH.login} component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
