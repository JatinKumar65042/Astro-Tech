"use client"
import Image from 'next/image'
import { ref,uploadBytes,getDownloadURL,listAll,list, } from 'firebase/storage';
import { useState, useEffect } from "react";
import {storage} from "../config/firebase"
import { v4 } from "uuid";
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
    <div>
      <div className='flex items-center justify-center h-[150px] bg-black '>
        <h1 className='text-white text-[4.5vw] font-serif'><span className='text-pink-400'>Photo</span> Gallery</h1>
      </div>
      {/* <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }} 
      />*/}

      {/* <button onClick={uploadFile}> Upload Image</button> */}
      <div className='flex flex-wrap items-center justify-center '>
      {imageUrls.map((url) => {
        return( 
        <div className=' h-[300px] w-[500px] ml-1 mt-2'>
          <Image className='w-[500px] h-[300px]' width={500} height={500} alt="Picture of the author" src={url} />

        </div>
        
        );
      })}
      </div>
     
      

    </div>
  )
}
