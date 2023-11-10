import React from 'react';
import { CardContent, CardMedia, Typography, Card, Box, Button, CardActions, Chip } from '@material-ui/core';
import useStyles from './styles'

const PlaceDetails = ({place}) => {
    const classes = useStyles();

    return(
        <Card elevation={6}>
            <CardMedia
                stlye={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://ww.foodserivesandhospitality.come/wp-content/uploads/2016/09/restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
            </CardContent>
        </Card>
    )
};

export default PlaceDetails;