import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../../../../../actions/appointments';
import useStyles from './styles'
import { Container, Grid, Typography, Button, Divider, Card, CardContent, CardActions } from '@mui/material';
import clsx from 'clsx';
//import DownloadIcon from '@material-ui/icons/DownloadIcon';

const Appointments = () => {
  //const dispatch = useDispatch();
  const appointments = [{ doctor: "Dr. Chutiya" , date: "28-02-11", summary: "Lipid profile check up" }, {doctor: 'Dr. PP', date: '29-03-19', summary: 'Blood work'}]
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  const handleDownload = () => {

  }

  return (
    <main
    className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}
    >
    <div className={classes.drawerHeader} />
      <Container>
      <Grid container spacing={3}>
      <div id="cart-items" ><Typography variant="h5" style={{padding: '10px'}}>Your previous appointments:</Typography></div>
      <Grid container alignItems="stretch" spacing={3}>
        {appointments.length ? 
          appointments.map((appointment) => (
                <Grid item xs={12} sm={3} md={3}>
                  <Card className={classes.card} fullWidth>
                    <CardContent style={{padding: '10px'}}>
                      <Typography variant="h5">{appointment.doctor}</Typography>
                      <Typography variant="h6">{appointment.date}</Typography>
                      <Typography variant="p">{appointment.summary}</Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent :'center', padding: '5px', }}>
                      <Button onClick={handleDownload}>Download</Button>
                    </CardActions>
                  </Card>
                </Grid> 
        )) : null}
      </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default Appointments;


