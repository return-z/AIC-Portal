import React, { useState } from 'react';
import Input from './Input';
import { Grid, Button, Typography, Container, Paper, Avatar } from '@material-ui/core';
import LockedOutlineIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles.js';

const Auth = () => {
  const initialFormState = { firstName : '', lastName : '', email : '', password : '', confirmPassword : '' };

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  //const dispatch = useDispatch();
  //const state = null;
  const classes = useStyles();
  //const history = useHistory();

  /*const handleSubmit = (e) => {
    e.preventDefault();
    isSignup ? dispatch(signup(formData, history)) : dispatch(signin(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value })
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  */

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockedOutlineIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            {
              isSignup ? (
                <>
                  <Input name="firstName" label="First Name" autoFocus half /> 
                  <Input name="lastName" label="Last Name" half />
                </>
              ) : null
            }
            <Input name="email" label="Email Address" autoFocus type="email"/>
            <Input name="password" label="Password" autoFocus type={showPassword ? "text" : "password"} />
            { isSignup ? <Input name="confirmPassword" label="Repeat Password" type='password' /> : null}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button>{isSignup ? 'Already a member? Click here to Sign In': 'Not a memeber? Click here to Sign Up'}</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;

