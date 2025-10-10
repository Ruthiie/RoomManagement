"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"
import { BulkAssignModal } from "@/components/modals/BulkAssignModal"
import { FilterPopover } from "@/components/modals/FilterPopover"
import { AssignSingleResident } from "@/components/modals/AssignSingleResident"


// 🆕 Import dialog components for testing
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle
// } from "@/components/ui/dialog"

interface Props {
  searchUnassigned: string
  setSearchUnassigned: (val: string) => void
}

export default function UnassignedResidents({ searchUnassigned, setSearchUnassigned }: Props) {
  const [isBulkAssignOpen, setIsBulkAssignOpen] = useState(false)
  const [isAssignOpen, setIsAssignOpen] = useState(false)


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
            className="w-48"
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
        {[1, 2].map((i) => (
          <Card key={i} className="border border-gray-200 shadow-sm">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-start gap-3">
                <Checkbox id={`resident-${i}`} />
                <div>
                  <p className="font-medium">Elene E. Doyle</p>
                  <p className="text-sm text-gray-500">
                    Previous Room : Full Care - {i === 1 ? "Single" : "Shared"} Bedroom |{" "}
                    {i === 1 ? "Male" : "Female"} | &lt;Marital Status&gt;
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
                  <FileText size={18} />
                </Button>
                <Button 
                  className="bg-[#01889f] hover:bg-[#017A8F] text-white"
                  onClick={() => setIsAssignOpen(true)}
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
      <AssignSingleResident open={isAssignOpen} onOpenChange={setIsAssignOpen} />


      {/* 🧪 Test Dialog (to confirm popups work) */}
      {/* <Dialog open={true}>
        <DialogContent>
          <DialogTitle>It works!</DialogTitle>
          <p className="text-sm text-gray-500">
            If you can see this popup in the middle of the screen, ShadCN Dialogs are working correctly 🎉
          </p>
        </DialogContent>
      </Dialog> */}
    </div>
  )
}
