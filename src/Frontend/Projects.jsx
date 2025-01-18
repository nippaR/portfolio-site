import React from 'react'
import ProjectHshow from './ProjectHshow';
import { Box, Typography } from '@mui/material';
import Imagebutton from './Imagebutton';

const topicLine = {
    width: '160px',
    height: '1.5px',
    backgroundImage: 'linear-gradient(to right,rgb(1, 1, 55),rgb(170, 0, 255))',
    ml: 0,
    mt:1.5
}

export default function Projects() {
  return (
    
        <Box>

            <Typography sx={{fontSize:"1rem",fontWeight: "bold", mt:5}}>On Going Projects</Typography>

            <Box sx={topicLine}/>

            <Box sx={{mt:5}}> <ProjectHshow/> </Box>
            
            
            <Typography sx={{fontSize:"1rem",fontWeight: "bold", mt: 10}}>Completed Projects</Typography>

            <Box sx={topicLine} />  

            <Box sx={{mt:5}}>  <Imagebutton/> </Box>   
        </Box>


  )
}
