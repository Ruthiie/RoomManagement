"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { FileIcon } from "lucide-react"
import { MdInsertDriveFile } from "react-icons/md"
import { BulkAssignModal } from "@/components/modals/BulkAssignModal"
import { FilterPopover } from "@/components/modals/FilterPopover"
import { AssignSingleResident } from "@/components/modals/AssignSingleResident"

interface Resident {
  id: string
  name: string
  previousRoom: string
  gender: string
  maritalStatus: string
  assigned: boolean
  roomId: string | null
}

interface Props {
  residents: Resident[]
  searchUnassigned: string
  setSearchUnassigned: (val: string) => void
  onAssign: (residentId: string, roomId: string) => void
}

export default function UnassignedResidents({
  residents,
  searchUnassigned,
  setSearchUnassigned,
  onAssign,
}: Props) {
  const [isBulkAssignOpen, setIsBulkAssignOpen] = useState(false)
  const [isAssignOpen, setIsAssignOpen] = useState(false)
  const [selectedResident, setSelectedResident] = useState<Resident | null>(null)

  // ✅ Filter only unassigned residents
  const unassignedResidents = residents.filter((res) => !res.assigned)

  return (
    <div className="mb-8">
      {/* Header and Filters */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Unassigned Residents</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Name"
            value={searchUnassigned}
            onChange={(e) => setSearchUnassigned(e.target.value)}
            className="w-48 bg-white"
          />
          <Button
            variant="outline"
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsBulkAssignOpen(true)}
          >
            Bulk Assign
          </Button>
          <FilterPopover />
        </div>
      </div>

      {/* Unassigned Residents List */}
      <div className="space-y-3">
        {unassignedResidents.map((resident) => (
          <Card key={resident.id} className="border border-gray-200 shadow-sm rounded-md">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-start gap-3">
                <Checkbox 
                  id={`resident-${resident.id}`}
                  className="scale-75 translate-y-2 ml-4 mr-2"
                />
                <div>
                  <p className="font-medium">{resident.name}</p>
                  <p className="text-sm text-gray-500">
                    Previous Room: {resident.previousRoom} | {resident.gender} |{" "}
                    {resident.maritalStatus}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md px-3 py-3"
                >
                  <MdInsertDriveFile size={18} color="#333333" />
                </Button>
                <Button
                  className="bg-[#1289a9] hover:bg-[#1289a9]/90 text-white font-light !rounded-md px-6 py-2"
                  onClick={() => {
                    setSelectedResident(resident)
                    setIsAssignOpen(true)
                  }}
                >
                  Assign
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bulk Assign Modal */}
      <BulkAssignModal open={isBulkAssignOpen} onOpenChange={setIsBulkAssignOpen} />

      {/* Assign Single Resident Modal */}
      <AssignSingleResident
        open={isAssignOpen}
        onOpenChange={setIsAssignOpen}
        resident={selectedResident}
        onAssign={(roomId) => {
          if (selectedResident && roomId) {
            onAssign(selectedResident.id, roomId) // ✅ now uses parent handler
            setIsAssignOpen(false)
          }
        }}
      />
    </div>
  )
}
