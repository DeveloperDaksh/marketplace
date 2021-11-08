// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack, Card, CardContent, Rating, Button } from '@material-ui/core';
//
import Carousel from 'react-multi-carousel';
import UAParser from "ua-parser-js";

import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';
import bg5 from './bg-05.png';
import bg4 from './bg-04.png';
import avatar1 from './avatar-1.jpg';
import ArrowBack from '@material-ui/icons/ArrowLeft';
import ArrowForward from '@material-ui/icons/ArrowRight';
import Star from '@material-ui/icons/Star';
import Location from '@material-ui/icons/LocationOn';
import Verified from '@material-ui/icons/Verified';



// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: '80px 0 50px',
  backgroundColor: '#fff',
  backgroundImage: `url(${bg4}),url(${bg5})`,
  backgroundRepeat: 'no-repeat,no-repeat',
  backgroundPosition: 'right top,left center'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));


const Rate = styled('span')(() => ({ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }))

const CarouselButtonGroup = styled('div')(({ theme }) => ({
  "@media(max-width:602px)": {
    position: 'absolute',
    top: '28.3rem',
    right: '9rem'
  },

  position: 'absolute',
  top: '-1.3rem',
  right: '5rem'

}))

const CarouselButton = styled('button')(() => ({
  display: 'block',
  float: 'left',
  width: '32px',
  height: '32px',
  fontSize: '13px',
  color: '#fff',
  border: 0,
  marginRight: '4px',
  marginLeft: '4px',
  backgroundColor: '#131135',
  textAlign: 'center',
  transition: 'color .7s ease,background-color .7s ease,border-color .7s ease',
  boxShadow: '0 1px 4px rgb(183 183 183 / 25%)',
  borderRadius: '10px!important',
}))

const FreelanceWidget = styled(Card)(() => ({
  backgroundColor: '#fff',
  boxShadow: '0 4px 34px rgb(215 215 215 / 25%)',
  border: '1px solid rgba(239,239,239,.42)',
  textAlign: 'center',
  position: 'relative',
  marginBottom: '30px',
  zIndex: 1,
  borderRadius: 0,
  margin: '25px',
}))
// ----------------------------------------------------------------------
const Favorite = styled('a')(() => ({
  color: 'rgb(196, 196, 196)',
  fontWeight: 'bold',
  fontSize: '12px',
  width: '32px',
  height: '32px',
  display: 'inline-flex',
  position: 'absolute',
  right: '15px',
  top: '15px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(250, 250, 250)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgb(196, 196, 196)',
  borderImage: 'initial',
  borderRadius: '50px',
  padding: '0px'
}))
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <CarouselButtonGroup>
      <CarouselButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}><ArrowBack /></CarouselButton>
      <CarouselButton onClick={() => next()}><ArrowForward /></CarouselButton >
    </CarouselButtonGroup>
  );
};

const CardImg = styled('img')(() => ({
  borderRadius: '50%',
  margin: 'auto',
  height: '120px',
  width: '120px',
}))

const Badge = {
  fontWeight: 500,
  fontSize: '12px',
  color: '#6e727d',
  background: '#E7E8EA',
  borderRadius: '20px',
  marginRight: '4px',
  display: 'inline-block',
  padding: '7px 10px',
}

const SectionLine = styled('div')(() => ({
  width: '35px',
  height: '8px',
  background: '#ff5b37',
  borderRadius: '5px',
  margin: 'auto',
  position: 'relative',
  marginBottom: '20px'
}))

export default function LandingDarkMode({ req }) {

  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <RootStyle>
      <Container>
        <div>
          <Stack direction="column" sx={{ textAlign: 'center' }} spacing={2}>
            <SectionLine />
            <Typography variant="h2" color="black">Top Reviews

            </Typography>
            <Typography variant="p" sx={{ color: '#55545b', fontSize: '22px' }}>High Performing Developers To Your

            </Typography>

          </Stack>
        </div>

      </Container>

      <Carousel
        style={{ marginTop: '3rem' }}
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={false}
        renderButtonGroupOutside={false}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 400ms"
        transitionDuration={500}
        deviceType={deviceType}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        <FreelanceWidget>

          <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
            <CardImg className="img-fluid mb-2" src={avatar1} /><Verified style={{ color: 'green', fontSize: '22px', position: 'absolute', right: 111, top: 110 }} />
            <Favorite data-toggle="modal" href="#" className="favourite"><Star /></Favorite>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}><h5>Timothy</h5></a>
            <Typography variant="p" sx={{ display: 'block' }}>PHP Developer</Typography>
            <Typography variant="p" sx={{ display: 'block' }}><Location style={{ fontSize: '20px', color: '#6e727d' }} /> Illinois,USA</Typography>

            <Rate><Rating
              name="readonly"
              value={4}

            />&nbsp;4.7 (32)</Rate>
            <div className="d-flex justify-content-center m-2"><a href="#"><span style={Badge} style={Badge} className="badge badge-pill ">Web design</span></a>
              <a href="#"><span style={Badge} style={Badge} className="badge badge-pill ">UI design</span></a>
              <a href="#"><span style={Badge} style={Badge} className="badge badge-pill ">Node JS</span></a></div>

            <a href="#" style={{ color: 'black', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>Free</a>
          </CardContent>
          <Button variant="contained" sx={{
            width: '100%', borderRadius: '0px'
          }}>View Profile</Button>
        </FreelanceWidget>


        <FreelanceWidget>

          <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
            <CardImg className="img-fluid mb-2" src={avatar1} /><Verified style={{ color: 'green', fontSize: '22px', position: 'absolute', right: 111, top: 110 }} />
            <Favorite data-toggle="modal" href="#" className="favourite"><Star /></Favorite>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}><h5>Timothy</h5></a>
            <Typography variant="p" sx={{ display: 'block' }}>PHP Developer</Typography>
            <Typography variant="p" sx={{ display: 'block' }}><Location style={{ fontSize: '20px', color: '#6e727d' }} />Illinois,USA</Typography>

            <Rate><Rating
              name="readonly"
              value={4}

            />&nbsp;4.7 (32)</Rate>
            <div className="d-flex justify-content-center m-2"><a href="#"><span style={Badge} className="badge badge-pill">Web design</span></a>
              <a href="#"><span style={Badge} className="badge badge-pill">UI design</span></a>
              <a href="#"><span style={Badge} className="badge badge-pill">Node JS</span></a></div>

            <a href="#" style={{ color: 'black', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>Free</a>
          </CardContent>
          <Button variant="contained" sx={{
            width: '100%', borderRadius: '0px'
          }}>View Profile</Button>
        </FreelanceWidget>


        <FreelanceWidget>

          <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
            <CardImg className="img-fluid mb-2" src={avatar1} /><Verified style={{ color: 'green', fontSize: '22px', position: 'absolute', right: 111, top: 110 }} />
            <Favorite data-toggle="modal" href="#" className="favourite"><Star /></Favorite>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}><h5>Timothy</h5></a>
            <Typography variant="p" sx={{ display: 'block' }}>PHP Developer</Typography>
            <Typography variant="p" sx={{ display: 'block' }}><Location style={{ fontSize: '20px', color: '#6e727d' }} />Illinois,USA</Typography>

            <Rate><Rating
              name="readonly"
              value={4}

            />&nbsp;4.7 (32)</Rate>
            <div className="d-flex justify-content-center m-2"><a href="#"><span style={Badge} className="badge badge-pill">Web design</span></a>
              <a href="#"><span style={Badge} className="badge badge-pill">UI design</span></a>
              <a href="#"><span style={Badge} className="badge badge-pill">Node JS</span></a></div>

            <a href="#" style={{ color: 'black', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>Free</a>
          </CardContent>
          <Button variant="contained" sx={{
            width: '100%', borderRadius: '0px'
          }}>View Profile</Button>
        </FreelanceWidget>


        <FreelanceWidget>

          <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
            <CardImg className="img-fluid mb-2" src={avatar1} /><Verified style={{ color: 'green', fontSize: '22px', position: 'absolute', right: 111, top: 110 }} />
            <Favorite data-toggle="modal" href="#" className="favourite"><Star /></Favorite>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}><h5>Timothy</h5></a>
            <Typography variant="p" sx={{ display: 'block' }}>PHP Developer</Typography>
            <Typography variant="p" sx={{ display: 'block' }}><Location style={{ fontSize: '20px', color: '#6e727d' }} />Illinois,USA</Typography>

            <Rate><Rating
              name="readonly"
              value={4}

            />&nbsp;4.7 (32)</Rate>
            <div className="d-flex justify-content-center m-2"><a href="#"><span style={Badge} className="badge badge-pill">Web design</span></a>
              <a href="#"><span style={Badge} className="badge badge-pill">UI design</span></a>
              <a href="#"><span style={Badge} className="badge badge-pill">Node JS</span></a></div>

            <a href="#" style={{ color: 'black', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>Free</a>
          </CardContent>
          <Button variant="contained" sx={{
            width: '100%', borderRadius: '0px'
          }}>View Profile</Button>
        </FreelanceWidget>
      </Carousel>
    </RootStyle>
  );
}
