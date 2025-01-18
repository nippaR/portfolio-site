import React from "react";
import { Grid, Button, Box,Stack, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


    const handleRefresh = () => {
        window.location.reload();
    };


function Header() {

    return (
        <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
            <Grid>

               <Box sx={{width:'1400px',height:'50px',backgroundColor:'#10151b'}}>
                <Stack direction="row" spacing={2} sx={{ml:10,mt: 1.5,gap: 60}}>

                    <Box sx={{ml:10,mt: 1, boxShadow: 10, width:'300px'}}>
                    
                    <Stack direction="row" spacing={1}>
                        
                        <IconButton>
                            <SearchIcon sx={{color: 'white',mt:1}} />
                        </IconButton>
                        <div> 
                            <input type="text" placeholder="Search" style={{width: '200px', height: '30px',
                                                                            backgroundColor: 'transparent',
                                                                            borderRadius: '10px',
                                                                            border: 'none', 
                                                                            paddingLeft: '8px',
                                                                            marginTop:11,
                                                                            color:'white',
                                                                            outline:'none',
                                                                            boxShadow:10}} />
                        </div>
                        
                    </Stack>
                    </Box>
               
                <Grid sx={{ml: 10}}>
                <Button onClick={handleRefresh} sx={{":hover": {backgroundColor: "#00006b"}}}>
                    <RouterLink to="/" style={{ textDecoration: 'none', color:'white' }}>Home</RouterLink>
                </Button>
                
                <Button sx={{ml: 8,":hover": {backgroundColor: "#00006b"}}}>
                    <RouterLink to="/portfolio" style={{ textDecoration: 'none', color:'white' }}>Portfolio</RouterLink>
                </Button>
            
                <Button sx={{ml: 8,":hover": {backgroundColor: "#00006b"}}}>
                    <RouterLink to="/pro" style={{ textDecoration: 'none', color:'white' }}>Blogs</RouterLink>
                </Button>

                <Button sx={{ml: 8,":hover": {backgroundColor: "#00006b"}}}>
                    <RouterLink to="/pro" style={{ textDecoration: 'none', color:'white' }}>Contact</RouterLink>
                </Button>

                </Grid> 

                </Stack>
              </Box>            
            
            </Grid>
        </div>

    )
}

export default Header;