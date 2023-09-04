"use client"
import { Heart } from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import { useState } from 'react'
import { setAsFavoriteAction } from "../app/gallery/actions"
import { useTransition } from "react"
import { SearchResult } from "../app/gallery/page"
import { FullHeart } from "@/components/icons/fullHeart"
import { ImageMenu } from "./image-menu"
import path from "path"


export function CloudinaryImage(props: any & { imageData: SearchResult; path:string }) {

    const [transition, startTransition] = useTransition();
    const { imageData } = props


    const [isFavorited, setIsFavorited] = useState(
        imageData.tags.includes('favorite')
    )


    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavorited ?
                <FullHeart
                    onClick={() => {
                        setIsFavorited(false)
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, false,props.path)
                        })

                    }}
                    className="absolute top-2 left-2 cursor-pointer hover:text-white text-red-500" />
                :
                <Heart
                    onClick={() => {
                        setIsFavorited(true)
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, true,props.path)
                        })
                    }}
                    className="absolute top-2 left-2 cursor-pointer hover:text-red-600" />
            }
            <ImageMenu 
            image={imageData}/>
        </div>
    )

}