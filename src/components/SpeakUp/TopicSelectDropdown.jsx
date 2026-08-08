import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const TOPIC_OPTIONS = [
  {
    id: "bullying",
    title: "Bullying & Harassment",
    subtitle: "If someone is being unkind, hurtful, or threatening",
  },
  {
    id: "mental_health",
    title: "Mental Health & Wellbeing",
    subtitle: "If you feel stressed, sad, or need to talk about feelings",
  },
  {
    id: "safety",
    title: "Safety & Environment",
    subtitle: "If something feels unsafe, damaged, or unhygienic",
  },
  {
    id: "teaching",
    title: "Teaching & Fairness",
    subtitle: "If something feels unfair in class or grading",
  },
  {
    id: "other",
    title: "Other",
    subtitle: "",
  },
]

const TopicSelectDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)

  const selectedTopic = TOPIC_OPTIONS.find((t) => t.id === value || t.title === value)

  const handleSelect = (topic) => {
    onChange(topic.id)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all cursor-pointer bg-background text-left ${
            open
              ? "border-primary ring-1 ring-primary shadow-sm"
              : "border-border/80 hover:border-primary/60"
          }`}
        >
          <span
            className={
              selectedTopic
                ? "text-[16px] font-medium text-[#080808]"
                : "text-[16px] text-muted-foreground/70"
            }
          >
            {selectedTopic ? selectedTopic.title : "Select a topic"}
          </span>
          {open ? (
            <ChevronUp className="w-5 h-5 text-foreground shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-2 rounded-2xl border border-primary/30 bg-white shadow-xl space-y-1 z-50 max-h-[380px] overflow-y-auto"
      >
        {TOPIC_OPTIONS.map((topic) => {
          const isSelected = value === topic.id || value === topic.title
          return (
            <div
              key={topic.id}
              onClick={() => handleSelect(topic)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                isSelected
                  ? "bg-[#F0F8FF] border border-primary/20"
                  : "hover:bg-muted/40 hover:pl-5"
              }`}
            >
              <h4 className="text-[18px] font-normal text-[#080808] leading-tight">
                {topic.title}
              </h4>
              {topic.subtitle && (
                <p className="text-[14px] font-normal text-muted-foreground mt-1">
                  {topic.subtitle}
                </p>
              )}
            </div>
          )
        })}
      </PopoverContent>
    </Popover>
  )
}

export default TopicSelectDropdown
