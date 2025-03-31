import React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import { Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Slide_show from './Slide_show';





function App() {








  const images = [
    {
      url: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/159/904/original/Vegetarian_Vegan_Waakye_Stew_-_The_Canadian_African.jpeg?1741710202',
      title: 'Vegetarian',
      width: '25%',
    },
    {
      url: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/746/original/%F0%9F%8D%97Butterflied_Chicken_with_Smokey_Barbecue_Glaze_%F0%9F%8D%97_%281%29.jpeg?1743352387',
      title: 'Starters',
      width: '25%',
    },
    {
      url: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/747/original/Oreo_Milkshake_Recipe_-_Golightly_Food.jpeg?1743352488',
      title: 'Milkshakes',
      width: '25%',
    },

    {
      url: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/750/original/Oven_Grilled_Tilapia_w__Fried_Plantains_-_Foodie_Not_a_Chef___Afrocaribbean_Food_Blog.jpeg?1743352705',
      title: 'Main',
      width: '25%',
    },



  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
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
    opacity: 0.4,
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
 


  return (
    <div className="row">





    <div className="col-sm-12"> 
  
  <AvatarGroup total={10}>
  <Avatar alt="Remy Sharp" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/159/904/original/Vegetarian_Vegan_Waakye_Stew_-_The_Canadian_African.jpeg?1741710202" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/722/original/Screenshot_2024-10-08_001547.png?1728335801" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
</div>   


<div className="col-sm-12">
  <Slide_show />
</div>





<div className='col-sm-12'>
<Typography
				variant="h1"
				mb={2}
				sx={{
					textAlign: 'center',
					fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' },
				}}
			>
				ABOUT PAGE
			</Typography>



      <Typography
				variant="p"
				mb={2}
				sx={{
					textAlign: 'center',
					fontSize: { xs: '1.0rem', sm: '1.3rem', md: '1.6rem' },
				}}
			>
				Welcome to Skillydon Solutions! We are a dynamic and innovative company committed to providing high-quality digital solutions for small and medium-sized businesses. Our expertise spans across web development, project management, and a variety of technology services, with a special focus on delivering tailored solutions to meet your business needs.
			</Typography>



</div>

<div className='col-sm-12 mb-2 '>

<Typography
				variant="h1"
				mb={2}
        mt={2}
				sx={{
					textAlign: 'center',
					fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' },
				}}
			>
				OUR FOODS
			</Typography>

<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
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
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>


</div>




    </div>




  );
}

export default App;
