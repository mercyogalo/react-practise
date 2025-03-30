import React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import { ImageListItem ,Typography} from '@mui/material';





function App() {





  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
 
  ];
 


  return (
    <div className="App container">
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


<ImageList sx={{ width: 550, height: 500 }} cols={4} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

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




</div>

    </div>




  );
}

export default App;
