"use client"
import { useState } from 'react'
import { CldUploadButton } from 'next-cloudinary';
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
        <CldUploadButton
          uploadPreset="mtqqcrcw"
          onUpload={(result: UploadResult) => {
            setimageId(result.info.public_id)
          }}
        />
        {imageId && (
          <CldImage
            width="300"
            height="400"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}

      </main>
    </>
  )
}
