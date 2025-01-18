import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { styled } from '@mui/material/styles';
import { Typography, Box, ButtonBase, Grid } from '@mui/material';
import IMG1 from '../assets/ai.png';
import IMG2 from '../assets/web.png';
import IMG3 from '../assets/pandas.png';
import IMG4 from '../assets/py.png';
import IMG5 from '../assets/ml.png';

const images = [
    {
        url: IMG1,
        title: 'Supervised Learning',
        width: '30%',
    },

    {
        url: IMG2,
        title:'Frontend Web Devolpment',
        width: '30%',
    }, 

    {
        url: IMG3,
        title: 'Data Handilng Panadas',
        width: '30%',
    },

    {
        url: IMG4,
        title: 	'Python',
        width: '30%',
    },

    {
        url: IMG5,
        title: 'Machine Learning',
        width: '30%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.40,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function Licenese() {
    return (
        <Grid mt={5}>
            <Box>
                {images.map((image, index) => (
                    <React.Fragment key={image.title}>
                        {index === 3 && <Box sx={{ width: '100%', height: '1px' }} />} {/* New line before the fourth image */}
                        <Popup
                            trigger={
                                <ImageButton
                                    focusRipple
                                    style={{
                                        width: image.width,
                                        margin: '10px'
                                    }}
                                >
                                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                                    <ImageBackdrop />
                                    <Image>
                                        <Typography
                                            component="span"
                                            variant="subtitle1"
                                            color="inherit"
                                            sx={(theme) => ({
                                                position: 'relative',
                                                p: 4,
                                                pt: 2,
                                                pb: `calc(${theme.spacing(1)} + 6px)`,
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                            })}
                                        >
                                            {image.title}
                                            <ImageMarked />
                                        </Typography>
                                    </Image>
                                </ImageButton>
                            }
                            modal
                            nested
                        >
                            {close => (
                                <Box>
                                    <Box
                                        sx={{
                                            width: 735,
                                            height: 600,
                                            backgroundColor: '#10151B',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography variant="h6" gutterBottom sx={{ ml: 35 }}>
                                            {image.title}
                                        </Typography>
                                        <Box>
                                            <img src={image.url} alt={image.title} style={{ width: '450px', marginLeft: 35 }} />
                                        </Box>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {/* Additional content can go here */}
                                        </Typography>
                                    </Box>
                                    {/* 
                                    <Button
                                        variant="contained"
                                        onClick={() => close()}
                                        sx={{ backgroundColor: 'primary', color: 'white' }}
                                    >
                                        Close modal
                                    </Button> 
                                    */}
                                </Box>
                            )}
                        </Popup>
                    </React.Fragment>
                ))}
            </Box>
        </Grid>
    );
}
