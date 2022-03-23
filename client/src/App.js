import React from 'react';
import { Container, Grid, Typography, Chip, CardContent, Card } from '@material-ui/core'

const App = () => {
  return (
    <Container>
        <Grid container justify="center" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={12}><Typography variant="h5" style={{fontFamily:'montserrat'}}>Recommended services just for you:</Typography></Grid>
          <Grid item xs={12} sm={12} style={{display:'flex', flexDirection:'column'}}>
            <Typography variant="h5" style={{fontFamily:'montserrat'}}>Sort By:</Typography>
            <Grid item style={{display:'flex', flexWrap:'wrap'}}>
              <Chip label="Price (low to high)" style={{margin:'8px'}} ></Chip>
              <Chip label="Price (high to low)" style={{margin:'8px'}} ></Chip>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card><CardContent><Typography>A cool landing page!</Typography></CardContent></Card>
          </Grid>
          <Grid item xs={12} sm={3}>
          </Grid>
        </Grid>
      </Container>
  )
}

export default App;