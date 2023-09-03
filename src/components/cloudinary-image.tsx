"use client"
import { Heart } from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import { useState } from 'react'
import { setAsFavoriteAction } from "../app/gallery/actions"
import { useTransition } from "react"
import { SearchResult } from "../app/gallery/page"
import { FullHeart } from "@/components/icons/fullHeart"
import { ImageMenu } from "./image-menu"


export function CloudinaryImage(props: any & { imageData: SearchResult }) {

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
                            setAsFavoriteAction(imageData.public_id, false)
                        })

                    }}
                    className="absolute top-2 left-2 cursor-pointer hover:text-white text-red-500" />
                :
                <Heart
                    onClick={() => {
                        setIsFavorited(true)
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, true)
                        })
                    }}
                    className="absolute top-2 left-2 cursor-pointer hover:text-red-600" />
            }
            <ImageMenu
            className="absolute right-2 top-2 rounded-lg" />
        </div>
    )

}