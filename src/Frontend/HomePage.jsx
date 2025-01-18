import React, {useEffect} from "react";
import { Box, Button, Grid, IconButton, Stack, Typography, Divider, Link } from "@mui/material";
import MyImage from '../assets/myImage.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectHshow from "./ProjectHshow";
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";

const MotionGrid = motion(Grid);
const MotionBox = motion(Box)


const variantContainer = {
    hidden: {
      opacity: 0,
      y:20
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        delay: 0.3,
        duration: 1.5,
      },
    },
  };


function HomePage() {

    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', stiffness: 120
                }
            });
        } if (!inView) {
            animation.start({ 
                y:50,
                opacity: 0,
                
            });
        }
        console.log("use effect view", inView);
    }, [inView, animation]);

    return (
        
        <Grid
            sx={{ 
                fontFamily: "poppins"
            }}>
            <Stack direction = "row" spacing={2} sx={{mt: 10, ml: 10, gap: 12}}>
                <MotionGrid 
                   variants={variantContainer}
                   initial="hidden"
                   animate="visible">
                    <Typography sx={{fontSize:"6rem",fontWeight: "0.5rem"}}>Hello World..!</Typography>
                    <Typography sx={{fontSize:"1.3rem",fontWeight: "bold", ml: 1}}>I'm Thanuja</Typography>
                    <Typography sx={{fontSize:"1.3rem",fontWeight: "bold", ml: 1}}>A creator with a passion Design and stories</Typography>
                        <Box sx={{
                            width: '1px',
                            height: '110px',
                            backgroundColor: 'white',
                            alignSelf: 'stretch',
                            ml: 1.8
                        }} />
                    <Typography sx={{fontSize:"1rem",fontWeight: "bold", ml: 1}}>Explore my journey creative and insightful blogs that bring ideas to life </Typography>
                    
                    <Stack direction="row" spacing={2} sx={{mt: 4, ml: 1, gap: 2}}>
                        <Button variant="contained" sx={{backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#00006b"}}}>
                            <Typography sx={{fontSize:"0.7rem"}}>Read My Blogs</Typography>
                        </Button>

                        <Link href="/portfolio" style={{textDecoration: 'none', color: 'white'}} >
                        <Button variant="contained" sx={{backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#00006b"}}}>
                            <Typography sx={{fontSize:"0.7rem"}}>Explore Portfolio</Typography>
                        </Button>
                        </Link>
                    </Stack>
                </MotionGrid>
                    <MotionBox sx={{ml: 15,}}
                    variants={variantContainer}
                    initial="hidden"
                    animate="visible">
                        <Box   sx={{transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.1)'}}}>
                             <img src={MyImage} alt="My Image" style={{ width: '500px', height: '500px', borderRadius:'50%'}} />
                        </Box>
                    </MotionBox>
            </Stack>

            {/*SOCIAL MEDIA ICONS*/}

            <MotionGrid sx={{mt: 2, ml: 10}}
            variants={variantContainer}
            initial="hidden"
            animate="visible">
                    <IconButton aria-label="Linkedin" sx={{ color: 'white', scale: 1.8, ":hover": {color: "#1e1eff"}}}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="X" sx={{ ml:3,color: 'white', scale: 1.5, ":hover": {color: "#1e1eff"}}}>
                        <XIcon />
                    </IconButton>
                    <IconButton aria-label="GitHub" sx={{ ml:3,color: 'white', scale: 1.7, ":hover": {color: "#1e1eff"}}}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="Fiverr" sx={{ ml:3,color: 'white', fontFamily: 'poppins', scale: 1.7, ":hover": {color: "#1e1eff"}}}>
                        Fi
                    </IconButton>
            </MotionGrid>

            {/* <Divider sx={{mt:7,ml:8,backgroundColor: 'white' ,width: '90%'}} /> */}

            <Grid sx={{mt: 12, ml: 10}}>
                    
                <Typography sx={{fontSize:"1rem",fontWeight: "bold"}}>On Going Projects</Typography>

                <Box sx={{
                            width: '160px',
                            height: '1.5px',
                            backgroundImage: 'linear-gradient(to right,rgb(1, 1, 55),rgb(170, 0, 255))',
                            ml: 1.2,
                            mt:1.5
                        }} />

                <MotionBox ref={ref} animate={animation}>
                    <ProjectHshow />
                </MotionBox>        
                

            </Grid>

            <Divider sx={{mt:7,ml:8,backgroundColor: 'white' ,width: '90%'}} />

        </Grid>
    );
}

export default HomePage;