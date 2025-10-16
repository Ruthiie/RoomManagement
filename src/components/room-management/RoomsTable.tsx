"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import EditRoomModal  from "@/components/modals/EditRoomModal" // ✅ Import modal

interface Props {
  searchRooms: string
  setSearchRooms: (val: string) => void
}

export default function RoomsTable({ searchRooms, setSearchRooms }: Props) {
  // ✅ State for modal open/close
  const [isEditOpen, setIsEditOpen] = useState(false)

  // ✅ Optional: track which room is being edited
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const rooms = [
    {
      id: "R-1235",
      type: "Full Care",
      name: "Single Bedroom",
      occupants: "Alex Johnson",
      capacity: "1/1",
      tariff: "R9,250",
    },
    {
      id: "R-1231",
      type: "Full Care",
      name: "Four Bedroom",
      occupants: (
        <>
          Alex Johnson<br />
          Jordan Smith<br />
          Taylor Brown<br />
          <span className="text-red-600">Empty</span>
        </>
      ),
      capacity: "3/4",
      tariff: "R9,250",
    },
    {
      id: "R-1312",
      type: "Dementia",
      name: "Single Bedroom",
      occupants: "Robert Lewandowski",
      capacity: "1/1",
      tariff: "R9,250",
    },
    {
      id: "R-1313",
      type: "Dementia",
      name: "Single Bedroom",
      occupants: <span className="text-red-600">Empty</span>,
      capacity: "0/1",
      tariff: "R9,250",
    },
  ]

  return (
    <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#c1dfe7]">
          <tr>
            <th className="text-left p-2 font-medium">Room ID</th>
            <th className="text-left p-2 font-medium">Room Type</th>
            <th className="text-left p-2 font-medium">Room Name</th>
            <th className="text-left p-2 font-medium">Occupants</th>
            <th className="text-left p-2 font-medium">Capacity</th>
            <th className="text-left p-2 font-medium">Tariff</th>
            <th className="text-left p-2 font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room, i) => (
            <tr key={i} className="border-t">
              <td className="text-gray-500 font-normal text-sm p-2">{room.id}</td>
              <td className="text-gray-500 font-normal text-sm p-2">{room.type}</td>
              <td className="text-gray-500 font-normal text-sm p-2">{room.name}</td>
              <td className="text-gray-500 font-normal text-sm p-2">{room.occupants}</td>
              <td className="font-normal text-sm p-2">{room.capacity}</td>
              <td className="font-normal text-sm p-2">{room.tariff}</td>
              <td className="p-2">
                {/* ✅ Only open modal for R-1231 */}
                <Button
                  className="bg-[#1289a9] hover:bg-[#1289A9] text-white"
                  onClick={() => {
                    if (room.id === "R-1231") {
                      setSelectedRoom(room.id)
                      setIsEditOpen(true)
                    }
                  }}
                >
                  <Pencil size={18} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Modal always mounted once, controlled by state */}
      <EditRoomModal open={isEditOpen} onOpenChange={setIsEditOpen} />
    </div>
  )
}
