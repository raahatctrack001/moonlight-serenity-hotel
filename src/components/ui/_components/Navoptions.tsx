"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Building, ChevronsUpDown, Hotel, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navoptions() {
    const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <ChevronsUpDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/add-hotel")}>
          <div className="flex justify-center items-center gap-1">
            <Plus className=""/>
            Add Hotel
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-hotel")}>
        <div className="flex justify-center items-center gap-1">
            <Building className=""/>
            My Hotels
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-bookings")}>
        <div className="flex justify-center items-center gap-1">
            <Hotel className=""/>
            My Bookings
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
