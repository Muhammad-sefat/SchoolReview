import React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Icon1, Icon2 } from "@/components/icons/CustomIcons"
import { Star, ArrowUpRight } from "lucide-react"

const ScatterPlotModal = ({ isOpen, onClose, metric, hideBottomBars = false }) => {
    const shouldHide = hideBottomBars || metric?.hideBottomBars

    const name = metric?.name || "Learning Support"
    const score = metric?.overall !== undefined ? (metric.overall % 1 === 0 ? metric.overall.toFixed(0) : metric.overall.toFixed(1)) : "1.5"

    // Sample insights based on metric or defaults matching screenshot
    const insights = metric?.insights || [
        "A small number of students reported needing additional academic support in the last 12 months.",
        "Some parents noted delays in receiving updates about learning progress.",
        "Students indicated that additional help during challenging subjects could improve learning outcomes.",
    ]

    const approaches = metric?.approaches || [
        "Provide additional learning support sessions for students who need extra help.",
        "Improve communication with parents regarding student progress and available support resources.",
        "Encourage teachers to regularly check in with students about academic challenges.",
    ]

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose && onClose()}>
            <DialogContent className="max-w-[1000px] w-[95%] sm:w-full rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-2xl  font-urbanist">
                {/* Modal Header */}
                <DialogHeader className="space-y-0 text-left">
                    <div className="flex items-start justify-between gap-4 pr-6">
                        {/* Title (24px font-semibold) + Score Badge */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2.5 flex-wrap">
                                <DialogTitle className="text-[24px] font-semibold text-[#080808] font-urbanist leading-tight">
                                    {name}
                                </DialogTitle>
                                <span className="bg-[#038AF9] text-white px-2.5 py-1.5 rounded-full text-sm font-normal inline-flex items-center gap-1 shrink-0">
                                    {score}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.22576 1.72336C6.60779 0.981049 7.67867 0.981049 8.06069 1.72336L9.34782 4.22465C9.36917 4.26615 9.4093 4.29504 9.45574 4.30237L12.2536 4.74365C13.0834 4.87454 13.4141 5.88159 12.8207 6.47087L10.8178 8.45975C10.7846 8.49271 10.7693 8.53932 10.7766 8.58528L11.2181 11.3611C11.3489 12.1837 10.4828 12.8064 9.73352 12.4284L7.21002 11.1553C7.16808 11.1341 7.11838 11.1341 7.07644 11.1553L4.55295 12.4284C3.80367 12.8064 2.93754 12.1837 3.06837 11.3611L3.50984 8.58528C3.51715 8.53932 3.50186 8.49271 3.46869 8.45975L1.46575 6.47087C0.872354 5.88159 1.20303 4.87454 2.03288 4.74365L4.8307 4.30237C4.87715 4.29504 4.91727 4.26615 4.93863 4.22465L6.22576 1.72336Z" fill="white" />
                                    </svg>
                                </span>
                            </div>

                            {/* Subtitle (14px font-normal) */}
                            <DialogDescription className="text-[14px] font-normal text-textPrimary font-urbanist">
                                Based on 30 reviews
                            </DialogDescription>
                        </div>

                        {/* Top Right Badges */}
                        <div className="flex flex-col mr-3 items-center gap-2 shrink-0">
                            <span className="text-[#66BB6A] text-base font-bold flex items-center gap-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.5807 12.5V5.41663H7.4974M14.2235 5.77379L5.41406 14.5833" stroke="#66BB6A" strokeWidth="1.25" strokeLinecap="square" />
                                </svg>
                                9%
                            </span>
                            <div className="w-7 h-7 rounded-full bg-[#FB8C00] text-white flex items-center justify-center text-[10px] font-bold shadow-2xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_10807_175495_modal)">
                                        <path d="M1.81576 10.8549C1.45117 10.8549 1.16254 10.7501 0.94987 10.5404C0.737196 10.3308 0.630859 10.0467 0.630859 9.68823V6.40698C0.630859 6.04848 0.737196 5.7644 0.94987 5.55477C1.16254 5.34513 1.45117 5.24032 1.81576 5.24032H5.0651C5.42969 5.24032 5.7168 5.34513 5.92643 5.55477C6.13911 5.7644 6.24544 6.04848 6.24544 6.40698V9.68823C6.24544 10.0467 6.13911 10.3308 5.92643 10.5404C5.7168 10.7501 5.42969 10.8549 5.0651 10.8549H1.81576ZM1.9388 9.90243H4.9375C5.04991 9.90243 5.1365 9.87052 5.19727 9.80672C5.26107 9.73988 5.29297 9.65177 5.29297 9.5424V6.55737C5.29297 6.44496 5.26107 6.35685 5.19727 6.29305C5.1365 6.22621 5.04991 6.19279 4.9375 6.19279H1.9388C1.82943 6.19279 1.74284 6.22621 1.67904 6.29305C1.61827 6.35685 1.58789 6.44496 1.58789 6.55737V9.5424C1.58789 9.65177 1.61827 9.73988 1.67904 9.80672C1.74284 9.87052 1.82943 9.90243 1.9388 9.90243ZM8 12.9604C7.86632 12.9604 7.75391 12.9163 7.66276 12.8282C7.57465 12.7401 7.5306 12.6307 7.5306 12.5001V3.59513C7.5306 3.46449 7.57465 3.35664 7.66276 3.27157C7.75391 3.18346 7.86632 3.1394 8 3.1394C8.13672 3.1394 8.24913 3.18346 8.33724 3.27157C8.42839 3.35664 8.47396 3.46449 8.47396 3.59513V12.5001C8.47396 12.6307 8.42839 12.7401 8.33724 12.8282C8.24913 12.9163 8.13672 12.9604 8 12.9604ZM10.9395 10.8549C10.5749 10.8549 10.2862 10.7501 10.0736 10.5404C9.86089 10.3308 9.75456 10.0467 9.75456 9.68823V6.40698C9.75456 6.04848 9.86089 5.7644 10.0736 5.55477C10.2862 5.34513 10.5749 5.24032 10.9395 5.24032H14.1842C14.5488 5.24032 14.8375 5.34513 15.0501 5.55477C15.2628 5.7644 15.3691 6.04848 15.3691 6.40698V9.68823C15.3691 10.0467 15.2628 10.3308 15.0501 10.5404C14.8375 10.7501 14.5488 10.8549 14.1842 10.8549H10.9395ZM11.0625 9.90243H14.0612C14.1706 9.90243 14.2572 9.87052 14.321 9.80672C14.3848 9.73988 14.4167 9.65177 14.4167 9.5424V6.55737C14.4167 6.44496 14.3848 6.35685 14.321 6.29305C14.2572 6.22621 14.1706 6.19279 14.0612 6.19279H11.0625C10.9531 6.19279 10.8665 6.22621 10.8027 6.29305C10.7389 6.35685 10.707 6.44496 10.707 6.55737V9.5424C10.707 9.65177 10.7389 9.73988 10.8027 9.80672C10.8665 9.87052 10.9531 9.90243 11.0625 9.90243Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_10807_175495_modal">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </DialogHeader>

                {/* Faint Dotted Divider Line */}
                <div className="border-b border-dashed border-gray-200 my-2" />

                {/* Section 1: Key Insights */}
                <div className="space-y-3 mt-3">
                    <h4 className="text-[18px] font-medium text-[#080808] font-urbanist leading-snug">
                        Key Insights
                    </h4>

                    <ul className="space-y-2.5">
                        {insights.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3 text-[16px] sm:text-[18px] font-normal text-textPrimary leading-relaxed font-urbanist"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Section 2: Suggested Approaches */}
                <div className="space-y-3 mt-6">
                    <h4 className="text-[18px] font-medium text-[#080808] font-urbanist leading-snug">
                        Suggested Approaches
                    </h4>

                    <ul className="space-y-2.5">
                        {approaches.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3 text-[16px] sm:text-[18px] font-normal text-[#1F1F21] leading-relaxed font-urbanist"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Section 3: Bottom Rating Distribution Progress Bars (KEPT for Leader Dashboard, HIDDEN when hideBottomBars === true) */}
                {!shouldHide && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {/* Card 1: Icon1 (Community/Parents) */}
                        <div className="bg-white border border-gray-200/90 rounded-2xl p-3 flex items-center gap-3 shadow-2xs">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                <Icon1 className="w-4 h-4 text-[#080808]" />
                            </div>

                            <div className="flex-1 flex items-center gap-0.5 h-6 rounded-full overflow-hidden p-0.5 bg-gray-50 border border-gray-100">
                                <div style={{ width: "8%" }} className="h-full bg-[#E53935] text-white text-[9px] font-bold flex items-center justify-center rounded-l-full">8%</div>
                                <div style={{ width: "10%" }} className="h-full bg-[#FB8C00] text-white text-[9px] font-bold flex items-center justify-center">10%</div>
                                <div style={{ width: "20%" }} className="h-full bg-[#90A4AE] text-white text-[9px] font-bold flex items-center justify-center">20%</div>
                                <div style={{ width: "25%" }} className="h-full bg-[#66BB6A] text-white text-[9px] font-bold flex items-center justify-center">25%</div>
                                <div style={{ width: "37%" }} className="h-full bg-[#2E7D32] text-white text-[9px] font-bold flex items-center justify-center rounded-r-full">37%</div>
                            </div>
                        </div>

                        {/* Card 2: Icon2 (Student) */}
                        <div className="bg-white border border-gray-200/90 rounded-2xl p-3 flex items-center gap-3 shadow-2xs">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                <Icon2 className="w-4 h-4 text-[#1F1F21]" />
                            </div>

                            <div className="flex-1 flex items-center gap-0.5 h-6 rounded-full overflow-hidden p-0.5 bg-gray-50 border border-gray-100">
                                <div style={{ width: "8%" }} className="h-full bg-[#E53935] text-white text-[9px] font-bold flex items-center justify-center rounded-l-full">8%</div>
                                <div style={{ width: "10%" }} className="h-full bg-[#FB8C00] text-white text-[9px] font-bold flex items-center justify-center">10%</div>
                                <div style={{ width: "20%" }} className="h-full bg-[#90A4AE] text-white text-[9px] font-bold flex items-center justify-center">20%</div>
                                <div style={{ width: "25%" }} className="h-full bg-[#66BB6A] text-white text-[9px] font-bold flex items-center justify-center">25%</div>
                                <div style={{ width: "37%" }} className="h-full bg-[#2E7D32] text-white text-[9px] font-bold flex items-center justify-center rounded-r-full">37%</div>
                            </div>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default ScatterPlotModal