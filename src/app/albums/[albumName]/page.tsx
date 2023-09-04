
import { SearchResult } from '@/app/gallery/page';
import cloudinary from 'cloudinary'
import AlbumGrid from './album-grid';


export default async function Gallery({
    params: { albumName },
}: {
    params: {
        albumName: string
    }
}) {

    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };


    return (
        <section>
            <div className="div flex justify-between items-center">
                <h1 className='text-4xl font-bold '>Album {albumName}</h1>

            </div>
            <AlbumGrid
                images={results.resources}
            />

        </section>
    )
}