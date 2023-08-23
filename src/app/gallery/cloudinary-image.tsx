"use client"
import React from 'react'
import { CldImage } from 'next-cloudinary';
import cloudinary from 'cloudinary'
function CloudinaryImage(props: any & {publicId:string}) {
  return (
    <div className='relative'>
      <CldImage {...props} />
      <svg
      // onClick={()=>{
      //   cloudinary.v2.uploader.add_tag('favourite',[props.publicId])

      // }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-6 w-6 absolute top-2 right-2 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </div>


  )
}

export default CloudinaryImage