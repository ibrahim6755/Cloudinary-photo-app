"use client"
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';
// import { UploadResult } from '../page';
import {useRouter} from 'next/navigation'

function UploadButton() {
    const router = useRouter()
    // return (
    //     <CldUploadButton
    //         uploadPreset="mtqqcrcw"
    //         onUpload={(result: UploadResult) => {
    //             router.refresh()
    //         }}
    //     />
        
    // );
}

export default UploadButton;
