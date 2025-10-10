"use client"

import * as React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface AssignSingleResidentProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AssignSingleResident({ open, onOpenChange }: AssignSingleResidentProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-xl p-6 bg-white">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Assign Room</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4 text-sm">
          <div>
            <p className="font-semibold text-gray-900">Name</p>
            <p className="text-gray-600">Elene E. Doyle</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Room Type</p>
            <p className="text-gray-600">Single Room</p>
          </div>

          <div className="col-span-1 border-t pt-2">
            <p className="font-semibold text-gray-900">Gender</p>
            <p className="text-gray-600">Male</p>
          </div>
          <div className="col-span-1 border-t pt-2">
            <p className="font-semibold text-gray-900">Marital Status</p>
            <p className="text-gray-600">Married</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-900 mb-1">Room Assigned</p>
          <Input placeholder="Search Room" />
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="bg-[#0097A7] hover:bg-[#00838F] text-white">
            Assign Room
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Also export as default so either import style works:
export default AssignSingleResident
