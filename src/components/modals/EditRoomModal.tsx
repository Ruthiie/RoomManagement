"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { X, Plus } from "lucide-react"

type Resident = {
  name?: string
  status?: string
}

type Room = {
  id: string
  type: string
  name: string
  residents: Resident[]
  capacity: number
}

interface EditRoomModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  room?: Room | null
}

export default function EditRoomModal({ open, onOpenChange, room }: EditRoomModalProps) {
  const r: Room = room ?? {
    id: "R-1235",
    type: "Full Care",
    name: "Single Room",
    capacity: 4,
    residents: [
      { name: "Alex Johnson", status: "Active" },
      { name: "Jordan Smith", status: "Active" },
      { name: "Taylor Brown", status: "Active" },
      { name: undefined, status: undefined },
    ],
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-5 bg-white font-[Lexend]">
        {/* Header */}
        <DialogHeader className="pb-1">
          <DialogTitle className="text-base font-semibold text-gray-900">
            Edit
          </DialogTitle>
        </DialogHeader>

        {/* Faint line - closer to title */}
        <Separator className="mt-1 mb-3 bg-gray-200" />

        {/* Room info section */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div>
            <p className="font-semibold text-gray-800 text-xs">Room ID</p>
            <p className="text-gray-600">{r.id}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 text-xs">Room Type</p>
            <p className="text-gray-600">{r.type}</p>
          </div>

          {/* Room Name — moved below and next to Room Type */}
          <div className="col-span-2 flex items-start gap-10 mt-1">
            <div>
              <p className="font-semibold text-gray-800 text-xs">Room Name</p>
              <p className="text-gray-600">{r.name}</p>
            </div>
          </div>
        </div>

        {/* Residents table */}
        <Card className="mt-4 border border-gray-200 rounded-md p-0 overflow-hidden">
          <div
            className="px-4 py-2 text-sm font-semibold text-gray-800 bg-white"
            style={{ borderBottom: "1px solid rgba(229,231,235,1)" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 0.6fr 0.5fr",
                alignItems: "center",
              }}
            >
              <div>Residents</div>
              <div className="text-right">Status</div>
              <div className="text-right pr-1">Action</div>
            </div>
          </div>

          <div className="bg-white">
            {r.residents.map((res, idx) => {
              const hasName = Boolean(res.name)
              return (
                <div
                  key={idx}
                  className="px-4 py-[6px] text-sm" // reduced spacing between rows
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 0.6fr 0.5fr",
                    alignItems: "center",
                  }}
                >
                  <div className="text-gray-800">
                    {hasName ? (
                      <span>{res.name}</span>
                    ) : (
                      <span className="text-gray-400">Empty</span>
                    )}
                  </div>

                  <div className="text-right text-sm">
                    {hasName ? (
                      <span className="text-green-600">{res.status ?? "Active"}</span>
                    ) : (
                      <span />
                    )}
                  </div>

                  {/* Red circle with white X or teal plus */}
                  <div className="flex justify-end items-center pr-1">
                    {hasName ? (
                      <button
                        aria-label={`remove-${idx}`}
                        className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#e04141] hover:bg-[#cc3b3b] text-white"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    ) : (
                      <button
                        aria-label={`add-${idx}`}
                        className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#01889f] hover:bg-[#017A8F] text-white"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Footer */}
        <DialogFooter className="mt-5 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-md border-gray-300 text-gray-700"
          >
            Cancel
          </Button>
          <Button className="bg-[#01889f] hover:bg-[#017A8F] text-white rounded-md">
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
