import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, Stack, Divider } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../../routes/paths';
//
import { varFadeInUp, MotionInView } from '../../animate';
import bg8 from './bg-08.png';
import bg3 from './bg-03.png';
import subImg from './subscribe.png';
import project1 from './project-01.jpg';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: '#fff',
  backgroundImage: `url(${bg3})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
  backgroundSize: '320px'
}));

const Projects = styled('div')(() => ({
  padding: '80px 0',
}));

const ProjectItem = styled('div')(() => ({
  background: '#fff',
  border: '1px solid #ececec',
  boxShadow: '10px 14px 5px rgb(255 204 193 / 10%)',
  marginBottom: '30px'
}))

const ProjectContent = styled('div')(() => ({
  margin: '0 auto',
  textAlign: 'center',
  width: '42%'
}))

const ProIcon = styled('div')(() => ({
  position: 'relative',
  '&:before': {
    content: '""',
    width: '1px',
    height: '100%',
    background: '#ECECEC',
    margin: '0 auto',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute'
  }
}))
const ProjectImg = styled('div')(() => ({
  overflow: 'hidden',
  padding: '3px 3px 0 3px'
}))

const ImgStyle = styled('img')(() => ({
  display: 'inline-block',
  transform: "scale(1)", transition: '0.3s ease-in-out', "&:hover": { transform: "scale(1.1)" }, maxWidth: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const ContentHead = styled('h4')(() => ({
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '21px',
  textTransform: 'uppercase',
  color: '#ff5b37',
}))

const ContentSub = styled('h5')(() => ({
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '21px',
  textTransform: 'uppercase',
  color: '#6e727d',
}))

const Subscribe = styled('div')(({ theme }) => ({
  background: '#ff5b37',
  padding: '80px 0',
  position: 'relative',
  color: '#fff',
  backgroundImage: `url(${bg8})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top'
}));

const FormInner = styled('div')(() => ({
  padding: '3px',
  backgroundColor: '#fffbfb',
  borderRadius: '40px',
  width: '100%'
}));

const InputGroup = styled('div')(() => ({

}))
const Email = styled('input')(() => ({
  backgroundColor: '#fffbfb',
  height: '70px',
  fontSize: '18px',
  color: '#1a1b1e',
  minHeight: '46px',
  padding: '6px 15px',
  background: '#fffbfb',
  borderRadius: '50px',
  height: '70px',
  fontSize: '18px',
  color: '#1a1b1e'
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
const Submit = styled('button')(() => ({
  backgroundColor: '#131135',
  borderRadius: '50px!important',
  fontWeight: 700,
  border: '1px solid #131135',
  margin: '3px',
  fontSize: '15px',
  lineHeight: '18px',
  padding: '12px 40px',
  textTransform: 'uppercase',
  color: '#fff'
}))
const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12
    }
  }
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 }
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 }
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 }
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Projects>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div className="text-center " style={{ marginBottom: '50px' }}>
                <SectionLine />
                <Typography variant="h2" color="black">Get Inspired</Typography>

                <Typography variant="h2" color="black">By Development Projects</Typography>

                <Typography variant="p" sx={{ color: '#55545b', fontSize: '22px' }}>High Performing Developers To Your

                </Typography>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
            <div className="col-lg-3 col-md-6 col-sm-6"><ProjectItem><ProjectImg><a href="#"><ImgStyle src={project1} alt="" className="img-fluid" /></a></ProjectImg>
              <div className="d-flex justify-content-between align-items-center"><ProjectContent>
                <ContentHead>45</ContentHead>
                <ContentSub style={{}} className="text-uppercase">android apps</ContentSub>
              </ProjectContent>
                <ProIcon><div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 0,
                  margin: '15px 0',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}></div></ProIcon>
                <ProjectContent>
                  <ContentHead>20</ContentHead>
                  <ContentSub>developers</ContentSub>
                </ProjectContent></div>
            </ProjectItem></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div style={{ marginBottom: '20px' }}>
              <a href="project" class="btn" style={{
                background: '#131135',
                border: '3px solid #131135',
                borderRadius: '50px',
                color: '#FFF5F3',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>SEE ALL PROJECT</a>
            </div>
          </div>
        </div>
      </Projects>
      <Subscribe>
        <div className="container-fluid" >
          <div className="row align-items-center">
            <div className="col-md-4"><img src={subImg} class="img-fluid" alt="subscribe" /></div>
            <div className="col-md-6">
              <h3 className="mb-3" style={{
                fontWeight: 700,
                fontSize: '42px',
                color: '#fff',
                marginBottom: '15px'
              }}>Subscribe To Get Discounts, Updates &amp; More</h3>
              <p className="mb-3" style={{
                fontSize: '18px',
                color: '#fff',
                marginBottom: '30px'
              }}>Monthly product updates, industry news and more!</p>
              <form action="#">
                <FormInner>
                  <InputGroup className="input-group"><input type="email" style={{
                    backgroundColor: '#fffbfb',
                    height: '70px',
                    fontSize: '18px',
                    color: '#1a1b1e',
                    minHeight: '46px',
                    padding: '6px 15px',
                    background: '#fffbfb',
                    borderRadius: '50px',
                    border: '0px',
                    height: '70px',
                    fontSize: '18px',
                    color: '#1a1b1e'
                  }} className="form-control" placeholder="Enter Email Address" /><div class="input-group-append d-flex">
                      <Submit type="submit">Submit</Submit>
                    </div></InputGroup>
                </FormInner>
              </form>
            </div>
          </div>
        </div>
      </Subscribe>
    </RootStyle>
  );
}
