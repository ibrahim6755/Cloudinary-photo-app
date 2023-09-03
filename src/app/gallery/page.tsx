
import { ImageGrid } from '@/components/image-grid';
import { CloudinaryImage } from '../../components/cloudinary-image';
import UploadButton from './upload-button'
import cloudinary from 'cloudinary'


export type SearchResult = {
    public_id: string;
    tags: string[]
};

export default async function Gallery() {


    const results = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };


    return (
        <section>
            <div className="div flex justify-between items-center">
                <h1 className='text-4xl font-bold '>Gallery</h1>
                <div className='p-2 bg-gray-300 rounded text-black hover:bg-gray-300 hover:rounded hover:text-black'>
                    <div className="div flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <UploadButton />
                    </div>
                </div>
            </div>
            <ImageGrid
                images={results.resources}
            />

        </section>
    )
}