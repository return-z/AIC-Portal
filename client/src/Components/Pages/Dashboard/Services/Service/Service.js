import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core';
import useStyles from './styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//import { addToCart } from '../../../../actions/cart';
import { Link } from 'react-router-dom';

const Service = ( { service }) => {
  //const dispatch = useDispatch();
  const classes = useStyles();
  const user = useState(false);
  

  return (
    <Card className={classes.card}>
      <CardActionArea style={{ textAlign : 'center' }} >
        <CardMedia className={classes.media} />
        <CardContent style={{ padding : 5}}>
          <Typography variant="h5" className={classes.font}>{service.category}</Typography>
          <Typography variant="h6" component="h2" color="textPrimary" className={classes.font}>{service.link}</Typography>
          <Typography variant="body2" component="p" color="textSecondary" className={classes.font}>{service.category}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent :'center', padding: 5, }}>
        {<Button>

        </Button>}
      </CardActions>
    </Card>
  )
}

export default Service;