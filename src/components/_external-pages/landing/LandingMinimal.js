// material
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Divider, Button, CardMedia, CardContent } from '@material-ui/core';
//
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';
import orange from './project-bg.png';
import light from './work-bg.png'
// ----------------------------------------------------------------------
import icon1 from './icon-01.png';
import icon2 from './icon-02.png';
import icon3 from './icon-03.png';

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    title: 'UI & UX Design',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
  },
  {
    icon: '/static/icons/ic_code.svg',
    title: 'Development',
    description: 'Easy to customize and extend each component, saving you time and money.'
  },
  {
    icon: '/static/brand/logo_single.svg',
    title: 'Branding',
    description: 'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 40,
  height: 40,
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));


// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle sx={{
      backgroundColor: 'white',
      textTransform: 'uppercase'
    }}>
      <Grid container >
        <Grid item xs={12} md={4}>
          <Card sx={{
            margin: 5,
            backgroundColor: 'white',
            textAlign: 'center',
            color: 'black',
            borderRadius: '5px',
            border: '1px solid #ebebeb',
            boxShadow: '0 4px 4px rgba(198,198,198,.25)',
          }}>
            <div style={{
              content: "",
              position: 'absolute',
              margin: '-32px',
              width: '70px',
              top: 0,
              left: 0,
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#ff5b37'
            }}></div>
            <CardContent>
              <img src={icon1} style={{ margin: 'auto', height: '69px' }} />
              <Typography gutterBottom variant="h3" sx={{ my: 2 }} component="div">
                919,207
              </Typography>
              <Typography variant="p" color="text.secondary">
                Freelance Developers
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ margin: 5, backgroundColor: 'white', textAlign: 'center', color: 'black', borderRadius: '5px', border: '1px solid #ebebeb', boxShadow: '0 4px 4px rgba(198,198,198,.25)' }}>

            <CardContent>
              <img src={icon2} style={{ margin: 'auto', height: '69px' }} />

              <Typography gutterBottom variant="h3" sx={{ my: 2 }} component="div">
                25-100+
              </Typography>
              <Typography variant="p" color="text.secondary">
                Developers per project
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ margin: 5, backgroundColor: 'white', textAlign: 'center', color: 'black', borderRadius: '5px', border: '1px solid #ebebeb', boxShadow: '0 4px 4px rgba(198,198,198,.25)' }}>
            <div style={{
              content: "",
              position: 'absolute',
              margin: '-32px',
              width: '70px',
              top: 0,
              right: 0,
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#ff5b37'
            }}></div>
            <CardContent>
              <img src={icon3} style={{ margin: 'auto', height: '69px' }} />

              <Typography gutterBottom variant="h3" sx={{ my: 2 }} component="div">
                388,615
              </Typography>
              <Typography variant="p" color="text.secondary">
                Completed Projects
              </Typography>
            </CardContent>

          </Card>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={12} md={6} lg={6} sx={{
          [theme.breakpoints.down('md')]: {
            backgroundSize: '150px'
          },
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `url(${orange})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '270px'
        }}>
          <Container sx={{
            [theme.breakpoints.down('md')]: {
              p: '40px',
              width: '90%',
              fontSize: '25px',
            },
            p: 20,
            width: '84%'
          }}

          > <Typography variant="h2" sx={{ textTransform: 'uppercase', paddingBottom: '30px', mb: '25px', fontWeight: 700 }}>
              I need a developed project
              <Divider sx={{
                width: '4rem',
                my: 2,
                borderBottom: '12px solid #ffff',
                borderRadius: '5rem'
              }} />
            </Typography>
            <Typography variant="p" sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '22px',
              },
              fontWeight: 500,
              color: '#ffff',
              fontSize: '25px',
              mt: '25px',
            }}>
              Get the perfect Developed project for your budget from our creative community.
            </Typography>
            <Button variant="contained" sx={{ display: 'block', borderRadius: '50%', backgroundColor: '#ffff', mt: 5, textAlign: 'center', fontSize: '30px' }}>
              <ArrowRightAltIcon sx={{ color: 'black' }} />
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{
          [theme.breakpoints.down('md')]: {
            backgroundSize: '150px'
          },
          backgroundColor: '#fff5f3',
          backgroundImage: `url(${light})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '270px',
        }}>
          <Container sx={{
            [theme.breakpoints.down('md')]: {
              p: '40px',
              width: '90%',
              fontSize: '25px',
            },
            p: 20,
            width: '84%',
            color: 'black'
          }}

          > <Typography variant="h2" sx={{ textTransform: 'uppercase', paddingBottom: '30px', mb: '25px', fontWeight: 700 }}>
              I want to <br /><span sx={{ display: 'block' }}>work</span>
              <Divider sx={{
                width: '4rem',
                my: 2,
                borderBottom: '12px solid orange',
                borderRadius: '5rem'
              }} />
            </Typography>
            <Typography variant="p" sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '25px',
              },
              fontWeight: 500,
              color: 'black',
              fontSize: '25px',
              mt: '25px',
            }}>
              Do you want to earn money, find unlimited clients and build your freelance career?.
            </Typography>
            <Button variant="contained" sx={{ display: 'block', borderRadius: '50%', backgroundColor: 'black', mt: 5, textAlign: 'center', fontSize: '30px' }}

            >
              <ArrowRightAltIcon sx={{ color: '#ffff' }} />
            </Button>
          </Container>
        </Grid>
      </Grid>
    </RootStyle >
  );
}
