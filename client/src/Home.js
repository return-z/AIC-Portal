import React from 'react';
import { Container, Grid, Typography, Chip, CardContent, Card } from '@material-ui/core'

const App = () => {
  return (
    <Container>
        <Grid container justify="center" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={12}><Typography variant="h5" style={{marginTop:'10px'}}>Recommended services just for you:</Typography></Grid>
          <Grid item xs={12} sm={12} style={{display:'flex', flexDirection:'column'}}>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card><CardContent><Typography>A cool landing page!</Typography></CardContent></Card>
            <Card><CardContent><Typography>Services</Typography></CardContent></Card>
          </Grid>
          <Grid item xs={12} sm={3}>
          </Grid>
        </Grid>
      </Container>
  )
}

export default App;