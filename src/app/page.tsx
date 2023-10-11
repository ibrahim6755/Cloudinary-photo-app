
import { ImageGrid } from '@/components/image-grid';
import UploadButton from './gallery/upload-button'
import cloudinary from 'cloudinary'
import { ForceRefresh } from '@/components/force-refresh';


export type SearchResult = {
  public_id: string;
  tags: string[]
};

export type UploadResult = {
  info: {
    public_id: string
  },
  event: 'success',

}
export default async function Home({
  searchParams: { search },
}: {
  searchParams: {
    search?: string
  }
}) {

  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };


  return (
    <section>
      <ForceRefresh />
      <div className="div flex justify-between items-center">
        <h1 className='text-4xl font-bold '>All Photos</h1>
        <div className='p-2 bg-gray-300 rounded text-black hover:bg-gray-300 hover:rounded hover:text-black'>
          <div className="div flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <UploadButton />
          </div>
        </div>
      </div>
      {/* <SearchForm
            initialSearch={search}
            /> */}
      <ImageGrid
        images={results.resources}
      />

    </section>
  )
}