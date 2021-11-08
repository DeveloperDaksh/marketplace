// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Box, Container, Typography, Divider, Stack, Card, CardMedia, CardActionArea, CardContent, Grid } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
//
import { varFadeInDown, varFadeInUp, MotionInView } from '../../animate';
import bg from './bg-06.png';
import blog1 from './blog-01.jpg';
import blog2 from './blog-02.jpg';
import blog3 from './blog-03.jpg';

import david from './david.jpg';
import darren from './darren.jpg';
import deborah from './deborah.jpg';
// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  margin: 'auto',
  overflow: 'hidden',
  padding: '80px 0 50px',
  borderRadius: theme.shape.borderRadiusMd,
  background: '#FFFBFB',
  backgroundImage: `url(${bg})`,

  backgroundSize: '170px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top,right top',
  textAlign: 'center',

}));

const ImgStyle = styled('img')(() => ({
  display: 'inline-block',
  transform: "scale(1)", transition: '0.3s ease-in-out', "&:hover": { transform: "scale(1.1)" }, maxWidth: '100%',
  height: '100%',
  objectFit: 'cover',
  marginBottom: '20px'
}));


const SectionLine = styled('div')(() => ({
  width: '35px',
  height: '8px',
  background: '#ff5b37',
  borderRadius: '5px',
  margin: 'auto',
  position: 'relative',
  marginBottom: '20px'
}))

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {

  return (
    <ContentStyle>

      <Container>
        <Stack direction="column" spacing={2}>
          <SectionLine />
          <Typography variant="h2" color="black">Feature Blog

          </Typography>
          <Typography variant="p" sx={{ color: '#55545b', fontSize: '22px' }}>High Performing Developers To Your

          </Typography>

        </Stack>
      </Container>
      <Grid container sx={{ p: 5 }}>
        <Grid item xs={12} md={4} sx={{ width: '100%', paddingLeft: '15px', padding: '15px' }}>
          <Card sx={{ backgroundColor: 'white', textAlign: 'left', border: '1px solid #f0f0f0', borderRadius: '4px', marginBottom: '30px' }}>

            <CardContent>
              <ImgStyle src={blog1} />
              <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 0, fontSize: '16px', listStyle: 'none' }}>
                <li>
                  <div style={{ width: '189px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginLeft: '-27px' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center' }}><img src={david} style={{ width: '28px', marginRight: '7px', borderRadius: '100%' }} /> <span> David Lee</span></a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 0, fontSize: '16px', listStyle: 'none' }}> <AccessTimeIcon /> 4 Oct 2021</li>
              </ul>
              <Typography gutterBottom variant="h3" sx={{ my: 2, fontSize: '18px', margin: '10px 0 10px', color: '#161c2d' }} component="div">
                Your next job starts right here
              </Typography>
              <Typography variant="p" color="text.secondary" sx={{ lineHeight: '32px' }}>
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ width: '100%', paddingLeft: '15px', padding: '15px' }}>
          <Card sx={{ backgroundColor: 'white', textAlign: 'left', border: '1px solid #f0f0f0', borderRadius: '4px', marginBottom: '30px' }}>

            <CardContent>
              <ImgStyle src={blog2} />
              <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 0, fontSize: '16px', listStyle: 'none' }}>
                <li>
                  <div style={{ width: '189px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginLeft: '-27px' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center' }}><img src={david} style={{ width: '28px', marginRight: '7px', borderRadius: '100%' }} /> <span> David Lee</span></a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 0, fontSize: '16px', listStyle: 'none' }}> <AccessTimeIcon /> 4 Oct 2021</li>
              </ul>
              <Typography gutterBottom variant="h3" sx={{ my: 2, fontSize: '18px', margin: '10px 0 10px', color: '#161c2d' }} component="div">
                Your next job starts right here
              </Typography>
              <Typography variant="p" color="text.secondary" sx={{ lineHeight: '32px' }}>
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ width: '100%', paddingLeft: '15px', padding: '15px' }}>
          <Card sx={{ backgroundColor: 'white', textAlign: 'left', border: '1px solid #f0f0f0', borderRadius: '4px', marginBottom: '30px' }}>

            <CardContent>
              <ImgStyle src={blog3} />
              <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 0, fontSize: '16px', listStyle: 'none' }}>
                <li>
                  <div style={{ width: '189px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginLeft: '-27px' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center' }}><img src={david} style={{ width: '28px', marginRight: '7px', borderRadius: '100%' }} /> <span> David Lee</span></a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 0, fontSize: '16px', listStyle: 'none' }}> <AccessTimeIcon /> 4 Oct 2021</li>
              </ul>
              <Typography gutterBottom variant="h3" sx={{ my: 2, fontSize: '18px', margin: '10px 0 10px', color: '#161c2d' }} component="div">
                Your next job starts right here
              </Typography>
              <Typography variant="p" color="text.secondary" sx={{ lineHeight: '32px' }}>
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.
              </Typography>
            </CardContent>

          </Card>
        </Grid>
      </Grid>

    </ContentStyle>
  );
}
/**
 * <Container>
 *   <Stack direction="column" spacing={2}>
          <Divider sx={{
            margin: 'auto',
            background: '#ff5b37',
            width: '35px',
            height: '8px',
            borderRadius: '5px',
            marginBottom: '20px'
          }} />
          <Typography variant="h2">Feature Blog

          </Typography>
          <Typography variant="p" sx={{ color: '#55545b', fontSize: '22px' }}>High Performing Developers To Your

          </Typography>

        </Stack>
        </Container>
 */