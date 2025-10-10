"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface RoomsSummaryProps {
  searchRooms: string
  setSearchRooms: (value: string) => void
}

export default function RoomsSummary({ searchRooms, setSearchRooms }: RoomsSummaryProps) {
  return (
    <div>
      {/* Rooms Filter Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Rooms</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Room ID"
            value={searchRooms}
            onChange={(e) => setSearchRooms(e.target.value)}
            className="w-48"
          />

          <Button className="bg-[#1289A9] hover:bg-[#1289A9] text-white">
            Filter
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-4 text-center">
          <p className="text-sm text-gray-500">Number of Rooms</p>
          <p className="text-xl font-bold">10</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-gray-500">Total Active Residents</p>
          <p className="text-xl font-bold">15</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-sm text-gray-500">Vacancies</p>
          <p className="text-xl font-bold text-red-600">2</p>
        </Card>
      </div>
    </div>
  )
}
