"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import UnassignedResidents from "./UnassignedResidents"
import RoomsSummary from "./RoomsSummary"
import RoomsTable from "./RoomsTable"
import { roomsData } from "@/data/roomsData"
import { roomData as residentsData } from "@/data/residents"

interface Room {
  id: string
  type: string
  name: string
  capacity: number
  assignedResidents: string[]
}

interface Resident {
  id: string
  name: string
  previousRoom: string
  gender: string
  maritalStatus: string
  assigned: boolean
  roomId: string | null
}

export default function RoomManagement() {
  const [searchUnassigned, setSearchUnassigned] = useState("")
  const [searchRooms, setSearchRooms] = useState("")

  // ✅ shared dynamic state
  const [rooms, setRooms] = useState<Room[]>(roomsData)
  const [residents, setResidents] = useState<Resident[]>(residentsData)

  // ✅ called when assigning a resident to a room
  const handleAssignResident = (residentId: string, roomId: string) => {
    // Find the resident BEFORE updating state
    const residentToAssign = residents.find((r) => r.id === residentId)
    if (!residentToAssign) return

    // ✅ 1. Update residents list (mark as assigned)
    setResidents((prevResidents) =>
      prevResidents.map((resident) =>
        resident.id === residentId
          ? { ...resident, assigned: true, roomId }
          : resident
      )
    )

    // ✅ 2. Update rooms list (add resident name to assignedResidents)
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? {
              ...room,
              assignedResidents: [
                ...room.assignedResidents,
                residentToAssign.name, // safely add name here
              ],
            }
          : room
      )
    )
  }

  return (
    <div className="p-6 font-lexend">
      <h1 className="text-2xl font-bold">Room Management</h1>
      <Separator className="my-4 bg-gray-300" />

      {/* Unassigned Residents */}
      <UnassignedResidents
        residents={residents}
        searchUnassigned={searchUnassigned}
        setSearchUnassigned={setSearchUnassigned}
        onAssign={handleAssignResident} // ✅ connected dynamically
      />

      {/* Rooms Summary */}
      <RoomsSummary
        searchRooms={searchRooms}
        setSearchRooms={setSearchRooms}
      />

      {/* Rooms Table */}
      <RoomsTable
        rooms={rooms}
        setRooms={setRooms}
        residents={residents}
        setResidents={setResidents}
        searchRooms={searchRooms}
        setSearchRooms={setSearchRooms}
      />
    </div>
  )
}
