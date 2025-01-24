import { Grid, Stack, Typography, IconButton, Box } from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height: "100px", backgroundColor: "#10151B", color: "white"}}>
            <Stack direction="row" spacing={2}>
                <IconButton>
                    <LinkedInIcon sx={{color: "white"}}/>
                </IconButton>
                <IconButton>
                    <FacebookIcon sx={{color: "white"}}/>
                </IconButton>
                <IconButton>
                    <InstagramIcon sx={{color: "white"}}/>
                </IconButton>

                {/* <Typography variant="h6">© 2021 Portfolio</Typography> */}
                <Typography variant="h6">⚠️footer is not Loading please check your connection</Typography>
            </Stack>
        </Grid>
    )
}


export default Footer;