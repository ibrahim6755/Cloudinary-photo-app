"use client"

import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function EditPage({
    searchParams: { publicId },
}: {
    searchParams: {
        publicId: string
    }
}) {

    const [transformation, setTransformation] = useState<undefined | "generative-fill" | " blur" | "zoom" | "grayscale" | "removeBackground" | "pixelate"
    >()

    const [prompt, setPrompt] = useState('')
    const[pendingPrompt,setPendingPrompt] = useState('')
    return (

        <section>
            <div className="div flex justify-between items-center mb-6">
                <h1 className='text-4xl font-bold '>Edit {publicId}</h1>
            </div>
            <div className="flex gap-4">
                <Button
                    onClick={() => setTransformation(undefined)}
                    className="bg-black ">
                    Clear All
                </Button>
                <div className="flex flex-col gap-3">
                    <Button
                        onClick={() =>{
                             setTransformation("generative-fill")
                            setPrompt(pendingPrompt)
                         }}
                        className="bg-gray-600 hover:bg-gray-500 text-black ">
                        Apply Generative Fill
                    </Button>
                    <label htmlFor="input">Prompt</label>
                    <input
                    className="text-black text-sm p-2"
                        value={pendingPrompt}
                        onChange={(e) => setPendingPrompt(e.currentTarget.value)} />
                </div>
                <Button
                    onClick={() => setTransformation("blur")}
                    className="bg-gray-600 hover:bg-gray-500 text-black ">
                    Apply Blur
                </Button>
                <Button
                    onClick={() => setTransformation("zoom")}
                    className="bg-gray-600 hover:bg-gray-500 text-black ">
                    Zoom Pan
                </Button>
                <Button
                    onClick={() => setTransformation("grayscale")}
                    className="bg-gray-600 hover:bg-gray-500 text-black ">
                    Grayscale
                </Button>
                <Button
                    onClick={() => setTransformation("pixelate")}
                    className="bg-gray-600 hover:bg-gray-500 text-black ">
                    Pixelate
                </Button>
                <Button
                    onClick={() => setTransformation("removeBackground")}
                    className="bg-gray-600 hover:bg-gray-500 text-black ">
                    Remove Background <span className="text-yellow-500 ms-1 text-xs">Gold Member</span>
                </Button>

            </div>

            <div className="grid grid-cols-2 gap-12">
                <CldImage src={publicId} width="300" height="400" alt="an image of something" className="my-4" />
                {
                    transformation === "generative-fill" && (
                        <CldImage src={publicId} width="300" height="400" alt="an image of something" className="my-4" crop="pad" fillBackground={{prompt,}} />
                    )
                }
                {
                    transformation === "blur" && (
                        <CldImage src={publicId} width="300" height="400" alt="an image of something" className="my-4" blur="800" />
                    )
                }
                {
                    transformation === "zoom" && (
                        <CldImage src={publicId} width="300" height="400" alt="an image of something" className="my-4" zoompan="loop" />
                    )
                }
                {
                    transformation === "grayscale" && (
                        <CldImage src={publicId} width="300" height="400" alt="an image of something" className="my-4" grayscale />
                    )
                }
                {
                    transformation === "removeBackground" && (
                        <CldImage src={publicId} width="300" height="400" alt="an image of something" className="my-4" removeBackground />
                    )
                }
                {
                    transformation === "pixelate" && (
                        <CldImage src={publicId} width="300" height="400" alt="an image of something" className="my-4" pixelate />
                    )
                }
            </div>
        </section>
    )




}