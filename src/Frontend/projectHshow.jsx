import React from "react";
import { Box,IconButton,Grid, Typography, Button, Stack } from "@mui/material";
import Image from '../assets/Bitcoin.jpeg';
import javaImage from '../assets/JAVA.jpg';
import eCom from '../assets/ecom.jpg'
import docPY from '../assets/docPY.png'
import GitHubIcon from '@mui/icons-material/GitHub';

function projectHshow() {

    return (

        <Grid sx={{mt:4}} >
           <Stack direction= 'row' sx={{gap:10, ml:3.5}}> 
            {/* First Card */}
            <Box sx={{ width:"250px", height:"300px", borderRadius: '15px', boxShadow: 15, transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.1)'}}} >
                <Grid sx={{ paddingTop:2, ml:3}} >
                <img src={Image} alt="My Image" style={{width: "200px", height: '150px',
                                                        borderRadius: '15px',
                                                        boxShadow: "0px 2px 10px rgba(251, 205, 0, 0.3)"}} />

                                                        
                      <Typography sx={{mt:2, ml:2.5, fontSize: "0.9rem"}} >
                           Block Chain Application  
                      </Typography> 
                      <IconButton aria-label="GitHub" sx={{mt:2,ml:5,color: 'white', scale: 1.7, ":hover": {color: "#ffab10"}}}>
                        <GitHubIcon />
                    </IconButton>  
                    <Button variant="contained" sx={{borderRadius:'8px',backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#ffab10"}, mt:2.8, ml:2}}>  
                        <Typography sx={{fontSize:"0.7rem", fontWeight:"bold"}}>View</Typography>
                    </Button>
                </Grid>
            </Box>
            
            {/* Secound Card */}

            <Box sx={{ width:"250px", height:"300px", borderRadius: '15px', boxShadow: 15, transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.1)'}}} >
                <Grid sx={{ paddingTop:2, ml:3}} >
                <img src={javaImage} alt="java Image" style={{width: "200px", height: '150px',
                                                        borderRadius: '15px',
                                                        boxShadow: "0px 2px 10px rgba(0, 251, 251, 0.3)"}} />

                                                        
                      <Typography sx={{mt:2, ml:1, fontSize: "0.9rem"}} >
                           Student Management System  
                      </Typography> 
                      <IconButton aria-label="GitHub" sx={{mt:2,ml:5,color: 'white', scale: 1.7, ":hover": {color: "#04fde4"}}}>
                        <GitHubIcon />
                    </IconButton>  
                    <Button variant="contained" sx={{borderRadius:'8px',backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#04fde4"}, mt:2.8, ml:2}}>  
                        <Typography sx={{fontSize:"0.7rem", fontWeight:"bold"}}>View</Typography>
                    </Button>
                </Grid>
            </Box>

            {/* Third Card */}

            <Box sx={{ width:"250px", height:"300px", borderRadius: '15px', boxShadow: 15, transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.1)'}}} >
                <Grid sx={{ paddingTop:2, ml:3}} >
                <img src={docPY} alt="java Image" style={{width: "200px", height: '150px',
                                                        borderRadius: '15px',
                                                        boxShadow: "0px 2px 10px rgba(251, 0, 146, 0.3)"}} />

                                                        
                      <Typography sx={{mt:2, ml:2, fontSize: "0.9rem"}} >
                           Docker Base Application 
                      </Typography> 
                      <IconButton aria-label="GitHub" sx={{mt:2,ml:5,color: 'white', scale: 1.7, ":hover": {color: "#fb0092"}}}>
                        <GitHubIcon />
                    </IconButton>  
                    <Button variant="contained" sx={{borderRadius:'8px',backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#fb0092"}, mt:2.8, ml:2}}>  
                        <Typography sx={{fontSize:"0.7rem", fontWeight:"bold"}}>View</Typography>
                    </Button>
                </Grid>
            </Box>
            
            {/* Fourth Card */}

            <Box sx={{ width:"250px", height:"300px", borderRadius: '15px', boxShadow: 15, transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.1)'}}} >
                <Grid sx={{ paddingTop:2, ml:3}} >
                <img src={eCom} alt="java Image" style={{width: "200px", height: '150px',
                                                        borderRadius: '15px',
                                                        boxShadow: "0px 2px 10px rgba(251, 100, 0, 0.3)"}} />

                                                        
                      <Typography sx={{mt:2, ml:4, fontSize: "0.9rem"}} >
                        E-commerce System
                      </Typography> 
                      <IconButton aria-label="GitHub" sx={{mt:2,ml:5,color: 'white', scale: 1.7, ":hover": {color: "#fb6400"}}}>
                        <GitHubIcon />
                    </IconButton>  
                    <Button variant="contained" sx={{borderRadius:'8px',backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#fb6400"}, mt:2.8, ml:2}}>  
                        <Typography sx={{fontSize:"0.7rem", fontWeight:"bold"}}>View</Typography>
                    </Button>
                </Grid>
            </Box>


          </Stack>

        </Grid>

    )
}

export default projectHshow;