import { Pencil, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComponentProps, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import FolderPlus from "./icons/folder-plus"
import { AddToAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"
import Link from "next/link"

export function ImageMenu({image}:{image:SearchResult}) {
  const [open,setOpen] = useState(false)
  return (
    <div className="absolute right-2 top-2 rounded-lg">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <Button variant="secondary" className="w-8 h-8 p-0 bg-gray-800 hover:bg-gray-800" >
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 p-0 border-none">
          <DropdownMenuGroup className="bg-black outline-none p-0 ps-2 rounded-md ">
            <DropdownMenuItem asChild >
            <AddToAlbumDialog image={image} onClose={()=>setOpen(false)}/>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="py-2" >
            <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`} className="flex items-center text-sm hover:outline-none">
              <Pencil className="mr-2 w-4 h-4"/>
               Edit
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
