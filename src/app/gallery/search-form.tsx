"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function SearchForm({initialSearch}:{initialSearch :string}) {
    const [tagName, setTagName] = useState(initialSearch ?? "")
    const router = useRouter();

    useEffect(() => {
      setTagName(initialSearch)
    }, [initialSearch])
    


    return (
        <form 
        className="mt-4"
        onSubmit={(e)=>{
            e.preventDefault()
            router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
            router.refresh();
        }}>
                <Label htmlFor="tagName" className="text-start my-2">
                    Search By Tag
                </Label>
                <div className="flex gap-1">
                <Input
                    onChange={(e) => setTagName(e.currentTarget.value)}
                     id="album-name"
                      value={tagName} className="col-span-3" />
                      <Button 
                      type="submit"
                      className="bg-gray-300 text-black hover:bg-gray-300 hover:text-black">
                        Search
                      </Button>
                </div>
        </form>
    )
}

export default SearchForm