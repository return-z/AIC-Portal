import { React, useState }  from "react";
import { Container, Paper, Avatar, Typography, Grid, Button, TextField } from "@material-ui/core";
import useStyles from './styles';
import Input from "./Input";

const Bookapp = () => {
  const newDate = new Date();
  const [value, setValue] = useState(newDate.getDate());
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
    <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar} >
      </Avatar>
      <Typography variant="h5">Book your appointment</Typography>
      <form className={classes.form}>
        <Grid container spacing={3}>
          <Input name="firstName" label="First Name" autoFocus half /> 
          <Input name="lastName" label="Last Name" half />
          <Input name="email" label="Email Address" autoFocus />
          <Input name="password" label="Password" autoFocus />
        </Grid>
        <Grid flex style={{display:'flex', justifyContent:'center'}}>
          <Button type="submit" variant="contained" color="#e1e1e1" className={classes.submit}>
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  </Container>
  )
}

export default Bookapp