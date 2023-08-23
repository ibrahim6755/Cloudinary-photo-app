"use client"
import React from 'react'
import { CldImage } from 'next-cloudinary';
function CloudinaryImage(props:any) {
  return (
    <CldImage {...props} />
  )
}

export default CloudinaryImage