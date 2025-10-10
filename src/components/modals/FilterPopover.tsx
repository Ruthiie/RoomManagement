"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function FilterPopover() {
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
          {/* Gender Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Gender</h4>
            <div className="border-b border-gray-200 my-1" />
            <div className="space-y-1 mt-2">
              <label className="flex items-center gap-2">
                <Checkbox id="male" />
                <span className="text-sm text-gray-700">Male</span>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="female" />
                <span className="text-sm text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* Marital Status Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Marital Status</h4>
            <div className="border-b border-gray-200 my-1" />
            <div className="space-y-1 mt-2">
              {["Married", "Single", "Divorced", "Widowed", "Separated", "Other/Prefer not to say"].map((status) => (
                <label key={status} className="flex items-center gap-2">
                  <Checkbox id={status.toLowerCase()} />
                  <span className="text-sm text-gray-700">{status}</span>
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
