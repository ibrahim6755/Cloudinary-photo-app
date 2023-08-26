"use client"
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';
import {useRouter} from 'next/navigation'

function UploadButton() {
    const router = useRouter()
    return (
        <CldUploadButton
            uploadPreset="mtqqcrcw"
            onUpload={(result) => {
                router.refresh()
                console.log(result)
                router.refresh();
            }}
        />
    );
}

export default UploadButton;
