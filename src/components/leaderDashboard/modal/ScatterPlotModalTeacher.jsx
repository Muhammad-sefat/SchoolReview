import React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Star, ArrowUpRight, ArrowDownRight } from "lucide-react"
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
} from "recharts"

// Sample Teaching Quality trend chart data for Card 3
const TEACHING_QUALITY_TREND = [
    { year: "2022", score: 2.8 },
    { year: "", score: 4.2 },
    { year: "", score: 3.5 },
    { year: "", score: 3.9 },
    { year: "2023", score: 3.0 },
    { year: "", score: 3.7 },
    { year: "", score: 3.3 },
    { year: "2024", score: 4.0 },
    { year: "", score: 3.8 },
    { year: "", score: 4.8 },
    { year: "2025", score: 3.2 },
    { year: "", score: 4.1 },
    { year: "2026", score: 3.0 },
]

// 4-Segmented Semi-circle gauge with 100% clean angular gaps and zero color overlap
const SemiCircleGauge = ({ value = 72, label = "Good" }) => {
    const polarToCartesian = (cx, cy, r, angleInDegrees) => {
        const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180
        return {
            x: cx + r * Math.cos(angleInRadians),
            y: cy + r * Math.sin(angleInRadians),
        }
    }

    const describeArc = (cx, cy, r, startAngle, endAngle) => {
        const start = polarToCartesian(cx, cy, r, endAngle)
        const end = polarToCartesian(cx, cy, r, startAngle)
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
        return ["M", start.x, start.y, "A", r, r, 0, largeArcFlag, 0, end.x, end.y].join(" ")
    }

    // 4 distinct color segments with subtle hairline 2.5-degree gaps
    const segments = [
        { start: 2, end: 43.5, color: "#D8EDFF" },
        { start: 46, end: 88.5, color: "#46A9FF" },
        { start: 91, end: 133.5, color: "#038AF9" },
        { start: 136, end: 178, color: "#0062C4" },
    ]

    // Value 72 maps to angle inside Segment 3
    const clampedValue = Math.min(Math.max(value, 0), 100)
    const pointerAngle = (clampedValue / 100) * 176 + 2
    const pointerPos = polarToCartesian(70, 68, 44, pointerAngle)

    // Outer cap circles at 0° and 180° for smooth rounded ends
    const capStart = polarToCartesian(70, 68, 50, 2)
    const capEnd = polarToCartesian(70, 68, 50, 178)

    return (
        <div className="relative flex flex-col items-center justify-center py-2 font-urbanist">
            <svg className="w-44 h-24 overflow-visible" viewBox="0 0 140 75">
                {/* Rounded End Cap Circles for 0° and 180° */}
                <circle cx={capStart.x} cy={capStart.y} r="6" fill="#D8EDFF" />
                <circle cx={capEnd.x} cy={capEnd.y} r="6" fill="#0062C4" />

                {/* 4 Colored Arc Segments with subtle hairline gaps */}
                {segments.map((seg, idx) => (
                    <path
                        key={idx}
                        d={describeArc(70, 68, 50, seg.start, seg.end)}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="12"
                        strokeLinecap="butt"
                    />
                ))}

                {/* Dynamic Pointer Arrow: Solid blue triangle cleanly inside segment 3 */}
                {/* <g transform={`translate(${pointerPos.x}, ${pointerPos.y}) rotate(${180 - pointerAngle - 90})`}>
                    <polygon
                        points="0,-5.5 4.5,3.5 -4.5,3.5"
                        fill="#038AF9"
                        stroke="#ffffff"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                </g> */}
            </svg>

            {/* Gauge Center Text */}
            <div className="absolute bottom-2 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-2xl font-bold text-[#080808] leading-none">
                    {clampedValue}
                </span>
                <span className="text-xs font-medium text-gray-500 mt-1">
                    {label}
                </span>
            </div>
        </div>
    )
}

const ScatterPlotModalTeacher = ({ isOpen, onClose, metric }) => {
    const teacherName = metric?.name || "Albert Flores"
    const score = metric?.overall !== undefined ? (metric.overall % 1 === 0 ? metric.overall.toFixed(0) : metric.overall.toFixed(1)) : "1.5"

    const strengths = metric?.strengths || [
        "The teacher creates a supportive classroom climate where students feel comfortable participating.",
        "Lessons are generally engaging and students respond positively to the teaching approach.",
        "Students report clear explanations that help them understand lesson content.",
    ]

    const developmentAreas = metric?.developmentAreas || [
        "Provide more structured feedback to help students improve their work.",
        "Encourage more student participation through discussion or collaborative activities.",
        "Use regular formative checks (short quizzes or quick reviews) to monitor understanding.",
    ]

    const keyMetrics = metric?.keyMetrics || [
        { label: "Classroom Climate", percentage: 80, isUp: true, trend: "9%", color: "bg-[#038AF9]" },
        { label: "Teaching Quality", percentage: 80, isUp: true, trend: "9%", color: "bg-[#038AF9]" },
        { label: "Learning Environment", percentage: 80, isUp: true, trend: "9%", color: "bg-[#038AF9]" },
        { label: "Professional Practice", percentage: 40, isUp: false, trend: "9%", color: "bg-[#E53935]" },
        { label: "Learning Impact", percentage: 40, isUp: false, trend: "9%", color: "bg-[#E53935]" },
    ]

    const learningImpactMetrics = [
        { label: "Understanding", percentage: 80, isUp: true, trend: "9%" },
        { label: "Progress", percentage: 80, isUp: true, trend: "9%" },
        { label: "Confidence", percentage: 80, isUp: true, trend: "9%" },
    ]

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose && onClose()}>
            <DialogContent className="max-w-[1220px] w-[95%] sm:w-full rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-2xl space-y-5 font-urbanist max-h-[92vh] overflow-y-auto">
                {/* Modal Header */}
                <DialogHeader className="space-y-0 text-left">
                    <div className="flex items-start justify-between gap-4 pr-6">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2.5 flex-wrap">
                                <DialogTitle className="text-[24px] font-semibold text-[#080808] font-urbanist leading-tight">
                                    {teacherName}
                                </DialogTitle>
                                <span className="bg-[#038AF9] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold inline-flex items-center gap-1 shrink-0">
                                    {score}
                                    <Star className="w-3 h-3 fill-white text-white" />
                                </span>
                            </div>

                            <DialogDescription className="text-[14px] font-normal text-[#5A5A5A] font-urbanist">
                                Based on 30 student reviews
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                {/* Faint Dotted Divider Line */}
                <div className="border-b border-dashed border-gray-200 my-6" />

                {/* Top Grid: Strengths & Development Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Card 1: Strengths */}
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3.5 shadow-2xs">
                        <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
                            Strengths
                        </h4>
                        <ul className="space-y-3">
                            {strengths.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[14px] md:text-lg text-textPrimary leading-relaxed">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200 mt-1.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2: Development Areas */}
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3.5 shadow-2xs">
                        <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
                            Development Areas
                        </h4>
                        <ul className="space-y-3">
                            {developmentAreas.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[14px] md:text-lg text-textPrimary leading-relaxed">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200 mt-1.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Grid: 3 Side-by-Side Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch pt-1">
                    {/* Card 1: Key Metrics */}
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-2xs">
                        <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
                            Key Metrics
                        </h4>

                        <div className="space-y-3 flex-1 flex flex-col justify-around">
                            {keyMetrics.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs sm:text-base gap-2">
                                    <span className="text-textPrimary font-medium ">
                                        {item.label}
                                    </span>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="text-gray-500 font-medium text-sm">
                                            {item.percentage}%
                                        </span>
                                        <div className="w-14 sm:w-16 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                                        </div>
                                        <span className={`text-sm font-semibold flex items-center gap-0.5 min-w-[32px] justify-end ${item.isUp ? "text-[#2E7D32]" : "text-[#E53935]"}`}>
                                            {item.isUp ? <ArrowUpRight className="w-3 h-3 stroke-[2.5]" /> : <ArrowDownRight className="w-3 h-3 stroke-[2.5]" />}
                                            {item.trend}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Learning Impact */}
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-2xs">
                        <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
                            Learning Impact
                        </h4>

                        {/* Dynamic gauge matching image */}
                        <SemiCircleGauge value={72} label="Good" />

                        {/* Metrics List */}
                        <div className="space-y-2.5 pt-1">
                            {learningImpactMetrics.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs sm:text-base gap-2">
                                    <span className="text-textPrimary font-medium">
                                        {item.label}
                                    </span>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="text-gray-500 font-normal text-sm">
                                            {item.percentage}%
                                        </span>
                                        <div className="w-14 sm:w-16 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full bg-[#038AF9]" style={{ width: `${item.percentage}%` }} />
                                        </div>
                                        <span className="text-[#2E7D32] text-sm font-semibold flex items-center gap-0.5 min-w-[32px] justify-end">
                                            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                                            {item.trend}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 3: Teaching Quality Trend Chart */}
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-2 flex flex-col justify-between shadow-2xs">
                        <div className="flex items-center justify-between">
                            <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
                                Teaching Quality
                            </h4>
                            <span className="text-[#2E7D32] text-xs font-semibold flex items-center gap-0.5">
                                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                9%
                            </span>
                        </div>

                        {/* Area Chart */}
                        <div className="w-full h-48 pt-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={TEACHING_QUALITY_TREND} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="teacherQualityGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#038AF9" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#038AF9" stopOpacity={0.0} />
                                        </linearGradient>
                                    </defs>
                                    <YAxis
                                        domain={[1, 5]}
                                        ticks={[1, 2, 3, 4, 5]}
                                        stroke="#5A5A5A"
                                        tick={{ fill: "#5A5A5A", fontSize: 14 }}
                                        tickLine={false}
                                        axisLine={false}
                                        width={30}
                                    />
                                    <XAxis
                                        dataKey="year"
                                        stroke="#5A5A5A"
                                        tick={{ fill: "#5A5A5A", fontSize: 14 }}
                                        tickLine={false}
                                        axisLine={false}
                                        dy={4}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#038AF9"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#teacherQualityGrad)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ScatterPlotModalTeacher