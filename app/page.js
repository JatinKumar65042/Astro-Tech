"use client"
import Image from 'next/image'
import firebase from "firebase/app"
import { ref,uploadBytes,getDownloadURL,listAll,list, } from 'firebase/storage';
import { useState, useEffect,Component } from "react";
import {storage} from "./config/firebase"
import { v4 } from "uuid";
import Link from 'next/link';
import Footer from './footer';

export default function Home() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

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
    
    <div className='bg-[#E9F0F5] bg-[url("https://www.transparenttextures.com/patterns/absurdity.png")]' >    
      <div className='flex items-center justify-center h-[150px] bg-[url("https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?auto=compress&cs=tinysrgb&w=600")] mb-[40px] '>
        <h1 className='text-white text-[4.5vw] font-serif hover:text-[4.7vw] hover:transition-all hover:duration-300 duration-300' id='heading'><span className='text-pink-400 '>Photo</span> Gallery</h1>
      </div>
      
      <div className='flex flex-wrap items-center justify-center gap-[50px] mb-[50px]'>
      {imageUrls.map((url) => {
        return( 
        <div className=' h-[330px] w-[450px]  bg-white flex items-center justify-center shadow-xl rounded-lg '>
          <Link href="/imageSlider" ><Image className='w-[430px] h-[300px] hover:h-[330px] hover:w-[450px] hover:rounded-lg hover:transition-all hover:duration-300 duration-300 shadow-xl' width={500} height={500} alt="Picture of the author" src={url} /></Link>

         
        </div>

        
        
        );
      })}
      </div>
      

      <Footer></Footer>
      

    </div>
  )
//   var crsr=document.querySelector("#cursor");
// var main=document.querySelector('#main');
// main.addEventListener('mousemove',function(dets){
//     crsr.style.left=dets.x+"px";
//     crsr.style.top=dets.y+"px";
// })
}

