import { Grid, Typography, Box, Divider, Link } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Image1 from '../assets/Skills-chips/react.png';
import Image2 from '../assets/Skills-chips/doc.png';
import Image3 from '../assets/Skills-chips/github.png';
import Image4 from '../assets/Skills-chips/Azure.jpeg';
import Image5 from '../assets/Skills-chips/Csharp.png';
import Image6 from '../assets/Skills-chips/cplus.png';
import Image7 from '../assets/Skills-chips/angular.png';
import Image8 from '../assets/Skills-chips/flutter.png';
import Image9 from '../assets/Skills-chips/java.png';
import Image10 from '../assets/Skills-chips/spring.png';
import Image11 from '../assets/Skills-chips/JS.jpeg';
import Image12 from '../assets/Skills-chips/Git21.png';
import Image13 from '../assets/Skills-chips/html.png';
import Image14 from '../assets/Skills-chips/kotlin.jpeg';
import Image15 from '../assets/Skills-chips/node.png';
import Image16 from '../assets/Skills-chips/python.jpeg';
import Image17 from '../assets/Skills-chips/jenkins.png';
import Image18 from '../assets/Skills-chips/mongoDb.png';
import Image19 from '../assets/Skills-chips/mysql.png';
import Image20 from '../assets/Skills-chips/php.jpeg';
import Image21 from '../assets/Skills-chips/ruby.jpeg';
import Image22 from '../assets/Skills-chips/selenium.png';
import Image23 from '../assets/Skills-chips/TF.png';
import Image24 from '../assets/Skills-chips/TS.png';
import Image25 from '../assets/Skills-chips/wireshark.png';
import Licenese from "./Licenese";


function ResumeSec() {

    const Images = [Image1, Image2, Image3, Image4, Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13,Image14,Image15,Image16,Image17,Image18,Image19,Image20,Image21,Image22,Image23,Image24,Image25];
    const Skills = ["React", "Docker", "GitHub", "Azure", "C#", "C++", "Angular", "Flutter", "Java", "Spring Boot", "JavaScript", "Git", "HTML", "Kotlin", "Node.js", "Python", "Jenkins", "MongoDB", "MySQL", "PHP", "Ruby", "Selenium", "TensorFlow", "TypeScript", "Wireshark"];

    return (
        <Grid>
            <Typography sx={{fontSize:"1rem",fontWeight: "bold", ml: 1,mt:2}}>Skills</Typography>
            
            <Box sx={{
                width: '360px',
                height: '2.5px',
                backgroundImage: 'linear-gradient(to right,rgb(0, 0, 106),rgb(170, 0, 255))',
                ml: 1,
                mt:1.5
            }} />
        
            <Stack direction="row" spacing={1} sx={{mt: 8, ml: 5, gap: 2, flexWrap: 'wrap'}}> 
                {Images.map((image, index) => (
                    <>
                        <Chip
                            key={index}
                            avatar={<Avatar alt={Skills[index]} src={image} />}
                            label={Skills[index]}
                            variant="outlined"
                            sx={{borderColor: "white", color: "white", '&:hover': {transform: 'scale(1.1)'}}}
                        />
                        {(index === 9 || index === 19) && <Box sx={{ width: '100%' }} />}
                    </>
                ))}
            </Stack>
            
            {/* <Divider sx={{mt:7,ml:8,backgroundColor: 'white' ,width: '90%'}} /> */}
            
            
            <Typography sx={{fontSize:"1rem",fontWeight: "bold", ml: 1,mt:10}}>Education</Typography>

            <Box sx={{
                width: '360px',
                height: '2.5px',
                backgroundImage: 'linear-gradient(to right,rgb(0, 0, 106),rgb(170, 0, 255))',
                ml: 1,
                mt:1.5
            }} />

            <Box sx={{mt: 6, ml: 5}}>

                <Stack direction='row' sx={{gap:40}}>

                    <Typography sx={{fontSize:"1rem",fontWeight: "bold"}}>Bachelor Of Science (Hons.)</Typography>

                    <Typography> 

                        <Link href="https://www.sliit.lk" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline', color: 'white', fontStyle: 'italic', transform: 'scale(1.1)'}}>University Of SLIIT</Link> 

                    </Typography>

                    <Typography>Jan 2023 - Present</Typography>
                </Stack>

                <Typography sx={{mt: 2, ml:2 ,fontSize:"1rem"}}>Major in Information Technology</Typography>

                <Stack direction='row' sx={{gap:41, mt: 12}}>
                    <Typography sx={{fontSize:"1rem",fontWeight: "bold"}}>Higher Education</Typography>
                    <Typography><Link href = 'https://pinnawalacentral.lk/' target='_blank' rel='noopener noreferrer'  style={{textDecoration: 'underline', color: 'white', fontStyle: 'italic'}}>Pinnawala Central College</Link></Typography>
                    <Typography>Jan 2019 - Jan 2022</Typography>
                </Stack>

            </Box>

            
            <Box sx={{mt: 9, ml: 1}}>
                <Typography sx={{fontSize:"1rem",fontWeight: "bold"}}>License & Certificate</Typography>
                <Box sx={{
                    width: '360px',
                    height: '2.5px',
                    backgroundImage: 'linear-gradient(to right,rgb(0, 0, 106),rgb(170, 0, 255))',
                    ml: 0,
                    mt:1.5
                }} />

            < Licenese />

            </Box>



        </Grid>
    );
}

export default ResumeSec;