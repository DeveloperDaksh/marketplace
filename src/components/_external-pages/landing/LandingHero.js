import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Rating, InputBase, InputLabel, FormControl, Card, CardContent, CardActions } from '@material-ui/core';
import background from './banner2.png';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------
import { Block } from 'src/pages/components-overview/Block';
import Searchbar from './SearchBar'


const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  },
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  paddingTop: '84px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh'
  }
}));



// ----------------------------------------------------------------------
const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' },


};

export default function LandingHero() {
  const theme = useTheme();

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>


        <HeroImgStyle alt="hero" src="/static/home/hero.png" variants={varFadeInUp} />
        <Container maxWidth="lg">
          <ContentStyle>

            <motion.div variants={varFadeInRight}>

              <Typography sx={{ display: 'flex', alignItems: 'center', color: 'common.black' }}>
                <Rating
                  name="readonly"
                  value={5}

                />
                &nbsp;&nbsp;TRUSED BY OVER 2M+ USERS </Typography>
              <Typography variant="h1" sx={{ color: 'common.black' }}>
                Get the perfect

              </Typography>
              <Typography component="span" variant="h2" sx={{ color: 'primary.main', display: 'inline' }}>
                Developers & Projects
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.black' }}>
                With the world's #1 Developers marketplace
              </Typography>
            </motion.div>

            <Stack
              component={motion.div}
              variants={varFadeInRight}
              direction="row"
              spacing={1}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Searchbar />
            </Stack>

            <motion.div variants={varFadeInRight}>


            </motion.div>

          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
