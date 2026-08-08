import React from "react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"

const DEFAULT_CLASSES = ["1A", "1B", "2A", "2B", "3A", "4A", "4B", "5A", "5B"]

const AssignClassesSelect = ({ selectedClasses = [], onChange }) => {
  return (
    <CustomMultiSelect
      placeholder="Assign classes"
      options={DEFAULT_CLASSES}
      value={selectedClasses}
      onChange={onChange}
      allowAddCustom={true}
    />
  )
}

export default AssignClassesSelect
