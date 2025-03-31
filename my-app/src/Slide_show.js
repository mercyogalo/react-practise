import React, { useRef, useState } from 'react';
import  './Slide_show.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper/modules';




export default function Slide_shadows(){
    return(
        
<Swiper
style={{
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#fff',
}}
speed={600}
parallax={true}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Parallax, Pagination, Navigation]}
className="mySwiper"
>
<div
  slot="container-start"
  className="parallax-bg"
  style={{
    'background-image':
      'url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/915/original/8_Chinese_Restaurants_in_Phoenix_for_an_Authentically_Delicious_Feast.jpeg?1743452294)',
  }}
  data-swiper-parallax="-23%"
></div>

<SwiperSlide>
  <div className="title" data-swiper-parallax="-300">
  Delicious Dining, Perfectly Crafted
  </div>
  
  <div className="text" data-swiper-parallax="-100">
    <p>
    Indulge in an unforgettable culinary experience with our expertly crafted dishes, made from the finest ingredients and served with passion. Every meal tells a story of flavor.
    </p>
  </div>
</SwiperSlide>


<SwiperSlide>
  <div className="title" data-swiper-parallax="-300">
  Fresh Flavors, Local Ingredients
  </div>

  <div className="text" data-swiper-parallax="-100">
    <p>
    Savor the taste of fresh, locally sourced ingredients, skillfully prepared to bring out the best of seasonal flavors. We believe in serving only the finest dishes that showcase the bounty of the region.
    </p>
  </div>
</SwiperSlide>




<SwiperSlide>
  <div className="title" data-swiper-parallax="-300">
  A Warm Welcome Awaits You
  </div>

  <div className="text" data-swiper-parallax="-100">
    <p>
    From the moment you step through our doors, you're treated like family. Enjoy a cozy atmosphere, exceptional service, and a welcoming ambiance designed for every occasion.
    </p>
  </div>
</SwiperSlide>




</Swiper>



    );

}