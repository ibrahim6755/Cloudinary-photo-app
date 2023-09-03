import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComponentProps } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import FolderPlus from "./icons/folder-plus"

export function ImageMenu(props :ComponentProps<"div">) {
  return (
   <div {...props}>
     <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-8 h-8 p-0 bg-gray-800 hover:bg-gray-800" >
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 p-0 border-none">
        <DropdownMenuGroup className="bg-black outline-none p-2 rounded-md">
          <DropdownMenuItem className="flex items-center hover:border-none cursor-pointer">
          <span className="text-sm text-center pe-2">Add To Album</span> <FolderPlus/>
          </DropdownMenuItem>
          
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
   </div>
  )
}
