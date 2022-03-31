import { Typography,Card, Grid, CardContent, Button, CardActions } from '@mui/material';
import React from 'react';
import useStyles from '../Service/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';

const AppNotification = () => {
  const classes = useStyles();
  const upcomingAppointments = [{date:'30-04-2022', doctor:'Dr. C', time: '5pm'}];
  return (
    <Grid container alignItems='stretch' justifyContent='center'>
    {upcomingAppointments.length ? 
        (
          <Card className={classes.card}>
            <CardContent style={{padding: '10px'}}>
              <Grid style={{display:'flex'}}><NotificationsIcon fontSize='medium'/><Typography variant="h6">Upcoming Appointments</Typography></Grid>
              <Typography variant="h5" style={{padding:'5px'}}>Your next appointment is due on : {upcomingAppointments[0].date}</Typography>
              <Typography variant="h6" style={{padding:'5px'}}>Perscribing doctor: {upcomingAppointments[0].doctor}</Typography>
            </CardContent>
            <CardActions style={{justifyContent:'right'}}>
              <Button>Appointment Details</Button>
            </CardActions>
          </Card>
        ) : null
    }
    </Grid>
  )
}

export default AppNotification