"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface BulkAssignModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BulkAssignModal({ open, onOpenChange }: BulkAssignModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Bulk Assign</DialogTitle>
        </DialogHeader>

        {/* Divider line */}
        <div className="border-t my-2" />

        {/* Selected Resident section */}
        <div>
          <p className="text-sm font-medium mb-2">Selected Resident:</p>

          {/* First box */}
          <div className="border rounded-md p-3 mb-2 text-sm text-gray-700">
            <div className="grid grid-cols-2 gap-y-1">
              <p className="font-medium">Name</p>
              <p>Assigned Room</p>
              <p>Alice Johnson</p>
              <p>Nurse Manager</p>
              <p className="font-medium">Gender</p>
              <p>Marital Status</p>
              <p>Female</p>
              <p>Married</p>
            </div>
          </div>

          {/* Second box */}
          <div className="border rounded-md p-3 mb-4 text-sm text-gray-700">
            <div className="grid grid-cols-2 gap-y-1">
              <p className="font-medium">Name</p>
              <p>Signed Room</p>
              <p>Alice Johnson</p>
              <p>Nurse Manager</p>
              <p className="font-medium">Gender</p>
              <p>Marital Status</p>
              <p>Female</p>
              <p>Married</p>
            </div>
          </div>
        </div>

        {/* Room Assigned input */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-1">Room Assigned</p>
          <Input placeholder="Search Room" />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Button className="bg-[#01889f] hover:bg-[#017A8F] text-white">
            Bulk Assign
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}