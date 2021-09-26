import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MediaCard(props) {
  return (
    <Card style={{backgroundColor:props.color}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="430"
        image={props.image}
        alt="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
         {props.title}
        
        </Typography>
        <Typography variant="body2" color="text.secondary " align="center">
        {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        
      <Button variant="outlined" align="center" >live</Button>
      </CardActions>
    </Card>
  );
}
