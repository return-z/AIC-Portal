import { React, useState, useEffect }  from "react";
import { Container, Paper, Avatar, Select, Typography, Grid, Button, TextField, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import Input from "./Input";
import { fetchDoctors } from "../../../../../actions/appointments";

const Bookapp = () => {
  const dispatch = useDispatch();
  const newDate = new Date();
  const [value, setValue] = useState(new Date().toLocaleDateString());
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  let doctors = [];

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(value);
  }

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch])

  console.log(doctors);

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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Doctor"
            onChange={handleChange}
          >
            {doctors.length ? (
              doctors.map((doctor) => (
                <MenuItem value={doctor}>{doctor}</MenuItem>
              ))
            ): null }
          </Select>
        </FormControl>
        <Grid flex style={{display:'flex', justifyContent:'center', margin:'inherit'}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
            label="Appointment Date"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid style={{display:'flex', justifyContent:'center'}}>
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