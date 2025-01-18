import { Grid, Stack, Typography, IconButton, Box } from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return (
        <Grid
            sx={{
                color: 'white', // Ensure text is readable
                padding: '20px', // Add padding for spacing
            }}
        >
            <Stack spacing={12} direction={'row'} sx={{ ml: 7, fontFamily: 'Poppins', my: 2, gap: 20 }}>
           
                   
                
            </Stack>
            <hr />
            <Stack spacing={12} direction={'row'} sx={{ ml: 7, fontFamily: 'Poppins', my: 2, gap: 20 }}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
                        Thanuja Nipun Rajawardhana  <sup>©</sup>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ ml: 70 }}>
                    <IconButton aria-label="Linkedin" sx={{ color: 'white' }}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="FaceBook" sx={{ color: 'white' }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="Insta" sx={{ color: 'white' }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton aria-label="X" sx={{ color: 'white' }}>
                        <XIcon />
                    </IconButton>
                    </Box>
                </Grid>
            </Stack>
        </Grid>
    );
};

export default Footer;