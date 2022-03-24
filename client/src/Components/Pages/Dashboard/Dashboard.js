import React from 'react';
import { Container, Grid, Typography, CardContent, Card } from '@material-ui/core'
//import useStyles from './styles';
import Services from './Services/Services';

const Dashboard = () => {
  //const classes = useStyles();
  return (
    <Container>
        <Grid container justify="center" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={12} style={{display:'flex', flexDirection:'column'}}>
            <Typography variant="h5" style={{fontFamily:'montserrat'}}>Services:</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid container alignItems="stretch" spacing={3} >
              <Services />
            </Grid>
          </Grid>
        </Grid>
      </Container>
  )
}

export default Dashboard;