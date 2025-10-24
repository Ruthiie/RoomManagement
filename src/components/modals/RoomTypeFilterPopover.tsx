"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function RoomTypeFilterPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-[#01889f] hover:bg-[#017A8F] text-white">
          Filter
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={4}
        className="w-[180px] p-4 bg-white border border-gray-200 rounded-md shadow-md"
      >
        <div className="space-y-4 text-gray-700">
          {/* Room Type Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Room Type</h4>
            <div className="border-b border-gray-200 my-1" />
            <div className="space-y-1 mt-2">
              {["Full Care", "Dementia", "Assisted Living", "Independent Living"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <Checkbox id={type.toLowerCase().replace(" ", "-")} />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-end pt-1">
            <Button className="bg-[#01889f] hover:bg-[#017A8F] text-white h-7 px-4 text-xs rounded-sm">
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
