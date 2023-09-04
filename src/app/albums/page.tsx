import cloudinary from 'cloudinary'
import { AlbumCard } from './album-card';

export type Folder = {name:string; path:string}

export default async function Albums() {


    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        folders:Folder[];
    };
    console.log(folders)


    return (
        <section>
            <div className="div flex justify-between items-center">
                <h1 className='text-4xl font-bold my-4'>Albums</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
            {
                folders.map((folder)=>(
                <AlbumCard
                key={folder.path}
                folder={folder}
                />
                ))
            }
            </div>
           
        </section>
    )
}