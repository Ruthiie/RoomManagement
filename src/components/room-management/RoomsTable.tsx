import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

interface Props {
  searchRooms: string
  setSearchRooms: (val: string) => void
}

export default function RoomsTable({ searchRooms, setSearchRooms }: Props) {
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
    
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#e6f4f7]">
          <tr>
            <th className="text-left p-2">Room ID</th>
            <th className="text-left p-2">Room Type</th>
            <th className="text-left p-2">Room Name</th>
            <th className="text-left p-2">Occupants</th>
            <th className="text-left p-2">Capacity</th>
            <th className="text-left p-2">Tariff</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{room.id}</td>
              <td className="p-2">{room.type}</td>
              <td className="p-2">{room.name}</td>
              <td className="p-2">{room.occupants}</td>
              <td className="p-2">{room.capacity}</td>
              <td className="p-2">{room.tariff}</td>
              <td className="p-2">
                <Button className="bg-[#1289A9] hover:bg-[#1289A9] text-white">
                  <Pencil size={18} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}
