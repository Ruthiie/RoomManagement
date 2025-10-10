"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import UnassignedResidents from "./UnassignedResidents"
import RoomsSummary from "./RoomsSummary"
import RoomsTable from "./RoomsTable"

export default function RoomManagement() {
  const [searchUnassigned, setSearchUnassigned] = useState("")
  const [searchRooms, setSearchRooms] = useState("")

  return (
    <div className="p-6 font-lexend">
      <h1 className="text-2xl font-bold">Room Management</h1>
      <Separator className="my-4 bg-gray-300" />

      {/* Unassigned Residents */}
      <UnassignedResidents
        searchUnassigned={searchUnassigned}
        setSearchUnassigned={setSearchUnassigned}
      />

      {/* Rooms Summary */}
      <RoomsSummary />

      {/* Rooms Table */}
      <RoomsTable
        searchRooms={searchRooms}
        setSearchRooms={setSearchRooms}
      />
    </div>
  )
}
