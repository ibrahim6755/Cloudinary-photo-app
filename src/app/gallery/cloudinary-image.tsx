"use client"
import { Heart } from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import { setAsFavoriteAction } from "./actions"
import { useTransition } from "react"
import { SearchResult } from "./page"
import { FullHeart } from "@/components/icons/fullHeart"


export function CloudinaryImage(props :any & SearchResult) {

    const [transition,startTransition]= useTransition();
    // const isFavorited = props.tags.includes('favorite')


    return (
        <div className="relative">
            <CldImage {...props} src={props.public_id}/>
            {/* {isFavorited? */}
             <FullHeart
             onClick={()=>{
                //  startTransition(()=>{
                //      setAsFavoriteAction(props.public_id)
                //  })
                 
             }}
             className="absolute top-2 right-1 cursor-pointer hover:text-red-600"/>
             :
             <Heart 
            onClick={()=>{
                startTransition(()=>{
                    setAsFavoriteAction(props.public_id)
                })
                
            }}
            className="absolute top-2 right-1 cursor-pointer hover:text-red-600"/>
            {/* } */}
            
        </div>
    )

}