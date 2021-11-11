import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import { useFormik, Form, FormikProvider, Field, ErrorMessage } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from "react-router-dom";

// material
import { Stack, TextField, IconButton, InputAdornment, Alert, Typography, Checkbox, Link } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// hooks
//import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
//
import { MIconButton } from '../../@material-extend';
import { firebaseConfig } from '../../../config';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { setSession, sign } from '../../../utils/jwt';

// ----------------------------------------------------------------------

export default function RegisterForm(props) {
  let history = useNavigate();

  // const { register } = useAuth();
  const [terms, setTerms] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getFirestore(app);

  const register = async (auth, email, password, firstname, lastname, category) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email,
        firstname,
        lastname,
        category,
      });

      updateProfile(res.user, {
        displayName: firstname + ' ' + lastname
      }).then(() => {

        const accessToken = sign({ userId: user.uid }, 'gahaoaapkekdmvb', {
          expiresIn: '5 days'
        });

        setSession(accessToken);

        sessionStorage.setItem("userId", user.uid);
        sessionStorage.setItem("userEmail", user.email);
        sessionStorage.setItem("userName", user.displayName);
      });


      enqueueSnackbar('Register success', {
        variant: 'success',
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Icon icon={closeFill} />
          </MIconButton>
        )
      });

      history('/dashboard', { replace: true });

    } catch (err) {
      console.error(err);
      enqueueSnackbar('Registration failed : ' + err, {
        variant: 'error',
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Icon icon={closeFill} />
          </MIconButton>
        )
      });
    }
  };



  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);


  const RegisterSchema = Yup.object().shape({
    firstname: Yup.string().min(4, 'Too Short!').max(64, 'Too Long!').required('First name is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().min(6, 'Too Short!').max(256, 'Too Long!').required('Password is required').oneOf([Yup.ref('repassword')]),
    repassword: Yup.string().required('Password is required').oneOf([Yup.ref('password')]),
    category: Yup.string().required('Please choose a category').oneOf(['freelancer', 'company']),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions.')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      repassword: '',
      category: props.category,
      terms: false
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await register(auth, values.email, values.password, values.firstname, values.lastname, props.category);

        if (isMountedRef.current) {
          setSubmitting(false);
        }

      } catch (error) {
        console.error(error);
        enqueueSnackbar('Registration failed : ' + error, {
          variant: 'error',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="First name"
              fullWidth
              {...getFieldProps('firstname')}
              error={Boolean(touched.firstname && errors.firstname)}
              helperText={touched.firstname && errors.firstname}
            />
            <TextField
              label="Last name"
              fullWidth
              {...getFieldProps('lastname')}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            fullWidth
            autoComplete="confirm-password"
            type={showPassword ? 'text' : 'password'}
            label="Confirm password"
            {...getFieldProps('repassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <LoadingButton fullWidth size="large" className="text-uppercase" type="submit" variant="contained" loading={isSubmitting}>
            Agree to join
          </LoadingButton>
        </Stack>
        <div style={{ color: 'text.secondary', marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
          <Field type="checkbox" name="terms" />
          &nbsp;By registering, I agree to Minimal&nbsp;
          <Link underline="always" sx={{ color: 'text.primary' }}>
            Terms of Service
          </Link>
          &nbsp;and&nbsp;
          <Link underline="always" sx={{ color: 'text.primary' }}>
            Privacy Policy
          </Link>
          .
        </div>
        {Boolean(touched.terms && errors.terms) ? <div className="error mt-1" style={{ color: '#ff5b37' }}>{errors.terms}</div> : null}

      </Form>

    </FormikProvider>
  );
}
