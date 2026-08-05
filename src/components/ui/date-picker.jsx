import * as React from "react"
import { Calendar as CalendarIcon, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday, addMonths, subMonths, startOfWeek, endOfWeek } from "date-fns"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  className,
  showIcon = true,
  showChevron = false,
}) {
  const [open, setOpen] = React.useState(false)
  const [currentMonth, setCurrentMonth] = React.useState(value || new Date())

  // Generate weeks and days
  const startDate = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 0 })
  const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 0 })
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  const handleSelect = (day) => {
    if (onChange) {
      if (value && isSameDay(value, day)) {
        onChange(undefined)
      } else {
        onChange(day)
      }
    }
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-between text-left font-normal h-8 rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white px-3 cursor-pointer shadow-2xs hover:bg-gray-50 flex items-center gap-1.5",
            !value && "text-textPrimary",
            className
          )}
        >
          <div className="flex items-center gap-1.5 truncate">
            {showIcon && <CalendarIcon className="mr-1 h-4 w-4 opacity-50 shrink-0" />}
            <span>{value ? format(value, "MMM yyyy") : placeholder}</span>
          </div>
          {showChevron && <ChevronDown className="h-4 w-4 opacity-50 shrink-0 ml-1" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3 bg-white rounded-2xl border border-gray-100 shadow-xl font-urbanist" align="start">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground">
              {format(currentMonth, "MMMM yyyy")}
            </h4>
            <div className="flex gap-1">
              <Button
                variant="outline"
                className="h-7 w-7 p-0 flex items-center justify-center rounded-lg"
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-7 w-7 p-0 flex items-center justify-center rounded-lg"
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {weekDays.map((day) => (
              <div key={day} className="font-medium text-muted-foreground py-1">
                {day}
              </div>
            ))}
            {days.map((day, idx) => {
              const isSelected = value && isSameDay(day, value)
              const isCurrentMonth = day.getMonth() === currentMonth.getMonth()
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(day)}
                  className={cn(
                    "h-8 w-8 text-xs rounded-full flex items-center justify-center transition-colors cursor-pointer",
                    !isCurrentMonth && "text-muted-foreground/40",
                    isCurrentMonth && !isSelected && "hover:bg-accent text-foreground",
                    isToday(day) && !isSelected && "border border-primary text-primary font-bold",
                    isSelected && "bg-[#038AF9] text-white font-bold"
                  )}
                >
                  {format(day, "d")}
                </button>
              )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
