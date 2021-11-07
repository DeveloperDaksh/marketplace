// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Container, Typography, useTheme, Stack, Divider, Card, Rating, CardContent } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import review1 from './review-01.jpg';
import UAParser from "ua-parser-js";
import ArrowBack from '@material-ui/icons/ArrowLeft';
import ArrowForward from '@material-ui/icons/ArrowRight';

// ----------------------------------------------------------------------

const IMG = [...Array(10)].map((_, index) => `/static/home/clean-${index + 1}.png`);

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  backgroundColor: '#FFF8F8',
  overflow: 'visible'
}));



const Review = styled(Card)(() => ({
  backgroundColor: '#fff',
  padding: '30px',
  position: 'relative',
  border: '1px solid #FFEEEA',
  boxShadow: '0px 4px 4px #F6FFFD',
  borderRadius: '5px'
}))

const ReviewImg = styled('img')(() => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  marginRight: '20px'
}))

const Rate = styled('span')(() => ({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }))

const CarouselButtonGroup = styled('div')(({ theme }) => ({
  "@media(max-width:600px)": {
    position: 'absolute',
    top: '20rem',
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

const SectionLine = styled('div')(() => ({
  width: '35px',
  height: '8px',
  background: '#ff5b37',
  borderRadius: '5px',
  margin: 'auto',
  position: 'relative',
  marginBottom: '20px'
}))

const SubHeading = styled('h5')(() => ({
  fontSize: '13px',
  color: '#6e727d',
  marginBottom: '10px',
  fontWeight: 500
}))
// ----------------------------------------------------------------------
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <CarouselButtonGroup>
      <CarouselButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}><ArrowBack /></CarouselButton>
      <CarouselButton onClick={() => next()}><ArrowForward /></CarouselButton >
    </CarouselButtonGroup>
  );
};

export default function LandingCleanInterfaces({ req }) {

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


  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
    <RootStyle  >
      <Container
        style={{ textAlign: 'center' }}>
        <Stack direction="column" spacing={2}>
          <SectionLine />
          <Typography variant="h2" color="black">Top Reviews

          </Typography>
          <Typography variant="p" sx={{ color: '#55545b', fontSize: '22px' }}>High Performing Developers To Your

          </Typography>

        </Stack>
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
        <div className="m-4"
        >    <Review >
            <div class="review-top d-flex align-items-center">
              <div class="review-img">
                <a href="review"><ReviewImg className="img-fluid" src={review1} alt="Post Image" /></a>
              </div>
              <div class="review-info">
                <h3>Davis Payerf</h3>
                <SubHeading>TEAM LEAD</SubHeading>
                <Rate><Rating
                  name="readonly"
                  value={4}

                /> 4.0</Rate>
              </div>
            </div>
            <CardContent>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</Typography>
            </CardContent>

          </Review></div>

        <div
          className="m-4"
        >    <Review >
            <div class="review-top d-flex align-items-center">
              <div class="review-img">
                <a href="review"><ReviewImg className="img-fluid" src={review1} alt="Post Image" /></a>
              </div>
              <div class="review-info">
                <h3>Davis Payerf</h3>
                <SubHeading>TEAM LEAD</SubHeading>
                <Rate><Rating
                  name="readonly"
                  value={4}

                /> 4.0</Rate>
              </div>
            </div>
            <CardContent>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</Typography>
            </CardContent>

          </Review></div>
        <div
          className="m-4"

        >    <Review >
            <div class="review-top d-flex align-items-center">
              <div class="review-img">
                <a href="review"><ReviewImg className="img-fluid" src={review1} alt="Post Image" /></a>
              </div>
              <div class="review-info">
                <h3>Davis Payerf</h3>
                <SubHeading>TEAM LEAD</SubHeading>
                <Rate><Rating
                  name="readonly"
                  value={4}

                /> 4.0</Rate>
              </div>
            </div>
            <CardContent>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</Typography>
            </CardContent>

          </Review></div>
        <div
          className="m-4"
        >    <Review >
            <div class="review-top d-flex align-items-center">
              <div class="review-img">
                <a href="review"><ReviewImg className="img-fluid" src={review1} alt="Post Image" /></a>
              </div>
              <div class="review-info">
                <h3>Davis Payerf</h3>
                <SubHeading>TEAM LEAD</SubHeading>
                <Rate><Rating
                  name="readonly"
                  value={4}

                /> 4.0</Rate>
              </div>
            </div>
            <CardContent>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</Typography>
            </CardContent>

          </Review></div>
        <div
          className="m-4"
        >    <Review >
            <div class="review-top d-flex align-items-center">
              <div class="review-img">
                <a href="review"><ReviewImg className="img-fluid" src={review1} alt="Post Image" /></a>
              </div>
              <div class="review-info">
                <h3>Stacy Petrov</h3>
                <SubHeading>TEAM LEAD</SubHeading>
                <Rate><Rating
                  name="readonly"
                  value={5}

                /> 5.0</Rate>
              </div>
            </div>
            <CardContent>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</Typography>
            </CardContent>

          </Review></div>
        <div
          className="m-4"
        >    <Review >
            <div class="review-top d-flex align-items-center">
              <div class="review-img">
                <a href="review"><ReviewImg className="img-fluid" src={review1} alt="Post Image" /></a>
              </div>
              <div class="review-info">
                <h3>James Maxwell</h3>
                <SubHeading>TEAM LEAD</SubHeading>
                <Rate><Rating
                  name="readonly"
                  value={3}

                /> 3.0</Rate>
              </div>
            </div>
            <CardContent>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</Typography>
            </CardContent>

          </Review></div>
      </Carousel>
    </RootStyle>
  );
}
