import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FolderPlus from "./icons/folder-plus"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import { addImageToAlbum } from "./actions"

export function AddToAlbumDialog({ image, onClose }: { image: SearchResult, onClose: () => void }) {
    const [albumName, setalbumName] = useState('')
    const [open, setOpen] = useState(false)

    return (
        <Dialog
            open={open}
            onOpenChange={(newOpenState) => {
                setOpen(newOpenState)
                if (!newOpenState) {
                    onClose();
                }
            }}

        >
            <DialogTrigger asChild>
                <Button variant="secondary" className="p-0 flex items-center"> <FolderPlus /><span className="ps-2"> Add to Album</span></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-black outline-none">
                <DialogHeader>
                    <DialogTitle>Add To Album </DialogTitle>
                    <DialogDescription>
                        Type the album you want to move this image into
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input
                            onChange={(e) => setalbumName(e.currentTarget.value)} id="album-name" value={albumName} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={async () => {
                            onClose()
                            setOpen(false)
                            await addImageToAlbum(image, albumName)
                        }}
                        type="submit" className="bg-gray-600 hover:bg-gray-600">Add To  Album</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
