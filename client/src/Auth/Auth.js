import React, { useState } from 'react';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Button, Typography, Container, Paper, Avatar } from '@material-ui/core';
import { signin, signup } from '../actions/auth.js';
import LockedOutlineIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles.js';
import { AUTH } from '../constants/items';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
//import { Link } from 'react-router-dom'

const Auth = () => {
  const initialFormState = { firstName : '', lastName : '', email : '', password : '', confirmPassword : '', phoneNo : '' };

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const dispatch = useDispatch();
  //const state = null;
  const classes = useStyles();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    isSignup ? dispatch(signup(formData, history)) : dispatch(signin(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value })
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} >
          <LockedOutlineIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup ? (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half /> 
                  <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                </>
              ) : null
            }
            <Input name="email" label="Email Address" handleChange={handleChange} autoFocus type="email"/>
            <Input name="password" label="Password" handleChange={handleChange} autoFocus type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            { isSignup ? <Input name="phoneNo" label="Phone Number" handleChange={handleChange} autoFocus type="phone-number"/> : null}
            { isSignup ? <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type='password' /> : null}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="#e1e1e1" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>{isSignup ? 'Already a member? Click here to Sign In': 'Not a memeber? Click here to Sign Up'}</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;

