"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image'
import { ref,uploadBytes,getDownloadURL,listAll,list, } from 'firebase/storage';
import { useEffect } from "react";
import {storage} from "../config/firebase"
import { v4 } from "uuid";
// import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [metaDataList,setMetaDataList]=useState([])

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
<div className='w-[100vw] h-[100vh] flex items-center justify-center'>
 
{imageUrls.map((url) => {
        return( 
        // <div className=' h-[300px] w-[500px] ml-1 mt-2'>
         <SwiperSlide className='h-[100vh] w-[100vw] '>
            <div className='w-[100vw] h-[100vh] flex items-center justify-center  '>
            <Image className='w-[90vw] h-[90vh] shadow-xl rounded-lg' width={500} height={500} alt="Picture of the author" src={url} />
            </div>
         
        </SwiperSlide>
          
        // </div>
        
        );
      })}
</div>



      </Swiper>
    </>
  );
}