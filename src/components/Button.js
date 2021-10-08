
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const buttons = [
  <Button key="one">Create</Button>,
 
];
const button = [
  <Button key="one">Explore</Button>,
 
];

export default function Buton() {
  return (
    <Box 
      sx={{
        display: 'flex',
        '& > *': {
          m: 2,
         tabSize:3,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        variant="contained"
      >
        {button}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
      
      >
        {buttons}
      </ButtonGroup>
    
    </Box>
  );
}
