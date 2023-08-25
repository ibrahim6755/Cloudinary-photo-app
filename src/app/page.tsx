"use client"
import { useState } from 'react'
import { CldImage } from 'next-cloudinary';


export type UploadResult = {
  info: {
    public_id: string
  },
  event: 'success',

}
export default function Home() {

  const [imageId, setimageId] = useState("")
  return (
    <>
      <main className="p-2 py-4">
      <h1 className='text-4xl font-bold '> Photos Gallery</h1>
        {imageId && (
          <CldImage
            width="300"
            height="400"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
        <h4 className='mt-14 mb-4'>Want to upload go to gallery..!</h4>
        <a href="/gallery" className='font-bold text-blue-900 hover:underline'>Gallery</a>

      </main>
    </>
  )
}
