"use client"
import { useState } from 'react'


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
      <h1 className='text-4xl font-bold '>Photos Gallery
      <a href="/gallery">Gallery page</a></h1>

      </main>
    </>
  )
}
