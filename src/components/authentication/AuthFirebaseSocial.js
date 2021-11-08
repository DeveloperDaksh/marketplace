import { Icon } from '@iconify/react';

import { Link as RouterLink } from 'react-router-dom';
import { experimentalStyled as styled } from '@material-ui/core/styles';

// material
import { Stack, Button, Divider, Typography, FormControlLabel, Checkbox, Link } from '@material-ui/core';
// hooks
import useAuth from '../../hooks/useAuth';

//routes
import { PATH_AUTH } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function AuthFirebaseSocials() {
  const { loginWithGoogle, loginWithFaceBook, loginWithTwitter } = useAuth();



  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginFaceBook = async () => {
    try {
      await loginWithFaceBook();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginTwitter = async () => {
    try {
      await loginWithTwitter();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center my-3">


      <Typography variant="p" sx={{ color: 'black', marginTop: 3 }}>
        Or Login with
      </Typography>
      <div className="row my-3" >
        <div className="col-4">
          <Button fullWidth size="large" className="btn btn-block" style={{
            backgroundColor: 'rgb(221, 75, 57)',
            color: 'rgb(255, 255, 255)',
            fontSize: '14px',
            fontWeight: 700,
            borderRadius: '165px',
            padding: '10px 12px'
          }} variant="outlined" onClick={handleLoginGoogle}>
            Google
          </Button>
        </div>
        <div className="col-4">
          <Button fullWidth size="large" style={{
            backgroundColor: 'rgb(63, 118, 228)',
            color: 'rgb(255, 255, 255)',
            fontSize: '14px',
            fontWeight: 700,
            borderRadius: '165px',
            padding: '10px 12px'
          }} className="btn btn-facebook btn-block" variant="outlined" onClick={handleLoginFaceBook}>
            Facebook
          </Button>
        </div>
        <div className="col-4">
          <Button fullWidth className="btn btn-twitter btn-block" style={{
            backgroundColor: 'rgb(41, 178, 255)',
            color: 'rgb(255, 255, 255)',
            fontSize: '14px',
            fontWeight: 700,
            borderRadius: '165px',
            padding: '10px 12px'
          }} size="large" variant="outlined" onClick={handleLoginTwitter}>
            Twitter
          </Button>
        </div>
      </div >
      <Divider sx={{ my: 3 }} />

    </div >
  );
}
