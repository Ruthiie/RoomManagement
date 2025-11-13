"use client"

import * as React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface AssignSingleResidentProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  resident: {
    id: string
    name: string
    previousRoom: string
    gender: string
    maritalStatus: string
  } | null
  onAssign: (roomId: string) => void
}

export function AssignSingleResident({
  open,
  onOpenChange,
  resident,
  onAssign,
}: AssignSingleResidentProps) {
  const [roomId, setRoomId] = useState("")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-xl p-6 bg-white">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Assign Room</DialogTitle>
        </DialogHeader>

        {resident && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Name</p>
              <p className="text-gray-600">{resident.name}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Room Type</p>
              <p className="text-gray-600">Single Room</p>
            </div>

            <div className="col-span-1 border-t pt-2">
              <p className="font-semibold text-gray-900">Gender</p>
              <p className="text-gray-600">{resident.gender}</p>
            </div>
            <div className="col-span-1 border-t pt-2">
              <p className="font-semibold text-gray-900">Marital Status</p>
              <p className="text-gray-600">{resident.maritalStatus}</p>
            </div>
          </div>
        )}

        <div className="mt-4">
          <p className="font-semibold text-gray-900 mb-1">Room Assigned</p>
          <Input
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            className="bg-[#0097A7] hover:bg-[#00838F] text-white"
            onClick={() => {
              if (roomId) onAssign(roomId)
            }}
          >
            Assign Room
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AssignSingleResident
