import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color, height } from '@mui/system';
import { Height, PinDropSharp } from '@mui/icons-material';



export default function MediaCard(props) {
  
  return (
    <>
    <Card style={{backgroundColor:props.color}} sx={{ maxWidth:345 , height: props.h }}>
      <CardMedia
        component="img"
        height={props.h2}
        image={props.image}
        alt="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
         {props.title}
        
        </Typography>
        <Typography variant="body2" color="text.secondary " align="center">
        {props.desc}
        </Typography>
      </CardContent>
     
      
     
      <CardActions>
     
    
        <div className='buton'>
      <Button variant="outlined" align="center" >live</Button>
      </div>
     
      </CardActions>
    </Card>
    </>
  );
}
