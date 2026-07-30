import React, { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import CustomSlider from "@/components/ui/slider"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const FeesSection = ({ setValue }) => {
  const [selectedCurrency, setSelectedCurrency] = useState([])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center border-b border-gray-100 pb-8">
      <div className="lg:col-span-2">
        <Title18 className="text-[#080808]">Fees</Title18>
      </div>

      <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-center min-w-0">
        <CustomMultiSelect
          placeholder="Select currency"
          options={["CHF", "EUR", "USD", "GBP"]}
          value={selectedCurrency}
          onChange={(val) => {
            setSelectedCurrency(val)
            setValue("currency", val)
          }}
        />

        {/* Dual-thumb Day tuition slider */}
        <div className="space-y-1 min-w-0">
          <span className="text-[16px] font-normal text-[#080808] block truncate">Annual day tuition fee</span>
          <CustomSlider min={0} max={250} defaultLow={20} defaultHigh={200} rangeText="20-200K" />
        </div>

        {/* Dual-thumb Boarding tuition slider */}
        <div className="space-y-1 min-w-0">
          <span className="text-[16px] font-normal text-[#080808] block truncate">Annual boarding tuition fee</span>
          <CustomSlider min={0} max={100} defaultLow={20} defaultHigh={50} rangeText="20-50K" />
        </div>

        {/* Sibling discount radio */}
        <div className="space-y-1 min-w-0">
          <span className="text-[16px] font-normal text-[#080808] block truncate">Sibling discount available?</span>
          <RadioGroup defaultValue="yes" className="flex items-center gap-4 pt-0.5">
            <div className="flex items-center space-x-1.5">
              <RadioGroupItem value="yes" id="r-sibling-yes" />
              <label htmlFor="r-sibling-yes" className="text-[14px] font-normal text-[#080808] cursor-pointer">Yes</label>
            </div>
            <div className="flex items-center space-x-1.5">
              <RadioGroupItem value="no" id="r-sibling-no" />
              <label htmlFor="r-sibling-no" className="text-[14px] font-normal text-[#080808] cursor-pointer">No</label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export default FeesSection
