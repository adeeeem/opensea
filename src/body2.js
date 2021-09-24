import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import image from './images/card.png';


export default function Crd() {


  return (
    <Card sx={{ maxWidth: 590, Height: 700 }}>

      <CardMedia
        component="img"
        height="394"
        image={image}
        alt="card"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Miss you Japan
        </Typography>
      </CardContent>
      <CardActions disableSpacing>


      </CardActions>

    </Card>
  );
}
