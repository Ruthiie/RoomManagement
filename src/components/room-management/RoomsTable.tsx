"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import EditRoomModal from "@/components/modals/EditRoomModal"

interface Room {
  id: string
  type: string
  name: string
  capacity: number
  assignedResidents: string[]
}

interface Props {
  rooms: Room[]
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>
  residents: any[]
  setResidents: React.Dispatch<React.SetStateAction<any[]>>
  searchRooms: string
  setSearchRooms: (val: string) => void
}

export default function RoomsTable({
  rooms,
  setRooms,
  residents,
  setResidents,
  searchRooms,
  setSearchRooms,
}: Props) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  return (
    <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-200 rounded-md">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#c1dfe7]">
          <tr>
            <th className="text-left p-2 font-medium">Room ID</th>
            <th className="text-left p-2 font-medium">Room Type</th>
            <th className="text-left p-2 font-medium">Room Name</th>
            <th className="text-left p-2 font-medium">Occupants</th>
            <th className="text-left p-2 font-medium">Capacity</th>
            <th className="text-left p-2 font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => {
            const assignedCount = room.assignedResidents.length
            const emptySpots = room.capacity - assignedCount

            return (
              <tr key={room.id} className="border-t">
                <td className="text-gray-500 font-normal text-sm p-2">{room.id}</td>
                <td className="text-gray-500 font-normal text-sm p-2">{room.type}</td>
                <td className="text-gray-500 font-normal text-sm p-2">{room.name}</td>

                {/* Occupants */}
                <td className="text-gray-500 font-normal text-sm p-2">
                  {assignedCount > 0 ? (
                    <>
                      {room.assignedResidents.map((resident: string, index: number) => (
                        <span key={index}>
                          {resident}
                          <br />
                        </span>
                      ))}
                      {emptySpots > 0 && (
                        <span className="text-red-600">Empty ({emptySpots})</span>
                      )}
                    </>
                  ) : (
                    <span className="text-red-600">Empty</span>
                  )}
                </td>

                {/* Capacity */}
                <td className="font-normal text-sm p-2">
                  {assignedCount}/{room.capacity}
                </td>

                {/* Action */}
                <td className="p-2">
                  <Button
                    className="bg-[#1289a9] hover:bg-[#1289A9] text-white rounded-md px-3 py-3"
                    onClick={() => {
                      setSelectedRoom(room.id)
                      setIsEditOpen(true)
                    }}
                  >
                    <Pencil size={18} />
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* Edit Modal */}
      <EditRoomModal open={isEditOpen} onOpenChange={setIsEditOpen} />
    </div>
  )
}
