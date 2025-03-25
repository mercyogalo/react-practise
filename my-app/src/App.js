import React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import { ImageListItem } from '@mui/material';



function App() {
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
<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
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




</div>

    </div>
  );
}

export default App;
