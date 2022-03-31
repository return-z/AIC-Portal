import React from 'react'
import { services } from '../../../../constants/items'
import Service from './Service/Service';
import { Grid } from '@material-ui/core';
import AppNotification from './Notification/Notification';

const Services = () => {
  return (
    <Grid container alignItems="stretch" spacing={3} >
    <AppNotification />
    {services.map((service) => (
      <Grid item xs={12} sm={3} md={3}>
        <Service service={service}/>
      </Grid>
    ))}
  </Grid>
  )
}

export default Services;