import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';



export default function Crd(props) {


  return (
    <Card sx={{ Width:590, Height: 700 }}>

      <CardMedia
        component="img"
        height={props.height}
        image={props.image}
        alt="card"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
         {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>


      </CardActions>

    </Card>
  );
}
