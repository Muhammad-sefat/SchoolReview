import React from "react"
import { Title48, Title24 } from "@/components/typho/Title"
import KeyMetricsCard from "@/components/leaderDashboard/overview/KeyMetricsCard"
import RadialProgressChart from "@/components/graphCharts/RadialProgressChart"
import BubbleTimelineChart from "@/components/graphCharts/BubbleTimelineChart"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const UpTrendArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
        <path d="M14.5846 12.4993V5.41602H7.5013M14.2274 5.77318L5.41797 14.5827" stroke="#66BB6A" strokeWidth="1.25" strokeLinecap="square" />
    </svg>
)

const DownTrendArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
        <path d="M7.4987 14.5846H14.582V7.5013M14.2249 14.2274L5.41536 5.41797" stroke="#E53935" strokeWidth="1.25" strokeLinecap="square" />
    </svg>
)

const UpTrendArrowSmallGreen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M17.5 15V7.5H10M17.07 7.93L6.5 18.5" stroke="#66BB6A" strokeWidth="2" strokeLinecap="square" />
    </svg>
)

const SAFEGUARDING_KEY_METRICS = [
    {
        id: "student-wellbeing",
        label: "Student Wellbeing",
        percentage: 80,
        trend: "9%",
        isUp: true,
        barColor: "bg-[#038AF9]",
    },
    {
        id: "bullying-fairness",
        label: "Bullying & Fairness",
        percentage: 80,
        trend: "9%",
        isUp: true,
        barColor: "bg-[#038AF9]",
    },
    {
        id: "sense-of-belonging",
        label: "Sense of Belonging",
        percentage: 80,
        trend: "9%",
        isUp: true,
        barColor: "bg-[#038AF9]",
    },
    {
        id: "student-respect",
        label: "Student Respect",
        percentage: 40,
        trend: "9%",
        isUp: false,
        barColor: "bg-[#E53935]",
    },
]

const ReportsOverTimeCard = () => (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-5 shadow-xs flex flex-col justify-between h-full font-urbanist">
        {/* Card Header */}
        <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="text-xl font-semibold text-[#080808]">Reports</h3>
            <div className="flex items-center gap-1 text-[16px] font-medium text-[#66BB6A]">
                <UpTrendArrowSmallGreen />
                <span>9%</span>
            </div>
        </div>

        {/* Smooth Line Chart Graphic with Y-Axis Numbers (5, 4, 3, 2, 1) */}
        <div className="w-full flex-1 min-h-[170px] relative flex items-stretch pt-2">
            {/* Y-Axis Number Scale */}
            <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-400 pr-3 py-1">
                <span>5</span>
                <span>4</span>
                <span>3</span>
                <span>2</span>
                <span>1</span>
            </div>

            {/* SVG Chart Area */}
            <div className="flex-1 flex flex-col justify-end">
                <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="sgBlueGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#038AF9" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#038AF9" stopOpacity="0.0" />
                        </linearGradient>
                    </defs>

                    <line x1="0" y1="10" x2="500" y2="10" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="0" y1="35" x2="500" y2="35" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="0" y1="60" x2="500" y2="60" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="0" y1="85" x2="500" y2="85" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="0" y1="110" x2="500" y2="110" stroke="#F1F5F9" strokeWidth="1" />

                    <path
                        d="M0,70 C50,20 80,60 120,45 C160,30 200,65 240,40 C280,15 320,50 360,30 C400,60 450,85 500,75 L500,120 L0,120 Z"
                        fill="url(#sgBlueGrad)"
                    />

                    <path
                        d="M0,70 C50,20 80,60 120,45 C160,30 200,65 240,40 C280,15 320,50 360,30 C400,60 450,85 500,75"
                        fill="none"
                        stroke="#038AF9"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="flex justify-between items-center text-xs font-normal text-gray-400 pt-3 border-t border-gray-100">
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                    <span>2025</span>
                    <span>2026</span>
                </div>
            </div>
        </div>
    </div>
)

const ANONYMOUS_SUMMARY_DATA = [
    {
        category: "Bullying & Harassment",
        volume: "40",
        insight: "Reports suggest most incidents are low-level but repeated, often during breaks, transitions, or online spaces, with students saying 'it's usually the same people' and 'it happens when no one is watching.' This points to patterns that are not being interrupted early.",
        trend: "9%",
        isUp: true,
        suggestedApproach: "Assign staff to specific high-risk times/locations, track repeat students or hotspots weekly, and follow up with early intervention (within 24–48h) to stop patterns developing.",
    },
    {
        category: "Safety & Environment",
        volume: "50",
        insight: "Overall safety is positive, but concerns cluster in specific locations, such as 'stairs get crowded' or 'changing rooms feel unsupervised.' This suggests inconsistency by time and place rather than a whole-school issue.",
        trend: "15%",
        isUp: false,
        suggestedApproach: "Run a 1-week hotspot audit to identify top 3 risk areas, then increase visible supervision and clear expectations in those locations.",
    },
    {
        category: "Teaching & Fairness",
        volume: "30",
        insight: "Teaching is generally strong, but fairness concerns are teacher-dependent, with comments like 'some teachers are stricter than others' and 'marking is different depending on the class.' This reflects inconsistency in expectations and grading. Fewer reports, but higher severity.",
        trend: "9%",
        isUp: true,
        suggestedApproach: "Agree on 3–5 shared staff expectations (behaviour, marking, deadlines) and run a short calibration session using real examples to align practice.",
    },
    {
        category: "Mental health & wellbeing",
        volume: "10",
        insight: "Students describe stress building over time, with comments like 'it builds up and no one notices' and 'I don't know who to talk to.' This suggests issues are less visible but more serious.",
        trend: "15%",
        isUp: false,
        suggestedApproach: "Introduce a weekly wellbeing check-in, flag repeated concerns, and ensure named adult follow-up within 48 hours.",
    },
    {
        category: "Others",
        volume: "48",
        insight: "A high number of 'other' reports suggests concerns that don't fit categories, often around communication and organisation, with comments like 'no one listens' or 'it depends who you ask.' This points to system-level friction.",
        trend: "9%",
        isUp: true,
        suggestedApproach: "Group 'other' feedback into top 3 themes monthly, share 'You said → We did', and assign clear ownership for each theme.",
    },
]

const SafeGuarding = () => {
    return (
        <div className="w-full space-y-6 font-urbanist">
            {/* Section Title */}
            <Title48 className="text-[#038AF9] font-bold">Safeguarding</Title48>

            {/* Row 1: Outer #F6F6F6 Container for 3 Overview Cards */}
            <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                    <div className="md:col-span-4 flex">
                        <RadialProgressChart
                            title="Annual Safety Reports Overview"
                            centerNumber={48}
                            avgResolutionTime="4.5 Day"
                            resolvedReportsCount={12}
                        />
                    </div>
                    <div className="md:col-span-4 flex">
                        <KeyMetricsCard
                            title="Key Metrics"
                            metrics={SAFEGUARDING_KEY_METRICS}
                        />
                    </div>
                    <div className="md:col-span-4 flex">
                        <ReportsOverTimeCard />
                    </div>
                </div>
            </div>

            {/* Row 2: Outer #F6F6F6 Container for Bubble Timeline Chart & Summary Table */}
            <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60 space-y-6">
                {/* Bubble Timeline Chart */}
                <div className="w-full">
                    <BubbleTimelineChart
                        title="Anonymous Reporting Trends"
                        subtitle=""
                        showRightBadge={false}
                    />
                </div>

                {/* Anonymous Reporting Summary Table */}
                <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6 font-urbanist">
                    <Title24 className="text-[#080808] font-semibold">
                        Anonymous Reporting Summary
                    </Title24>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto w-full">
                        <Table
                            containerClassName="border-0 border-none bg-transparent shadow-none rounded-none w-full"
                            className="w-full min-w-[850px] text-left border-collapse border-0 border-none"
                        >
                            <TableHeader className="bg-[#F9FAFB]">
                                <TableRow className="border-b border-gray-100 hover:bg-transparent">
                                    <TableHead className="w-[180px] text-[16px] font-normal text-secondary py-3.5 pl-4">Category</TableHead>
                                    <TableHead className="w-[100px] text-[16px] font-normal text-secondary py-3.5 text-center">Volume</TableHead>
                                    <TableHead className="text-[16px] font-normal text-secondary py-3.5">Insight</TableHead>
                                    <TableHead className="w-[100px] text-[16px] font-normal text-secondary py-3.5 text-center">Trend</TableHead>
                                    <TableHead className="text-[16px] font-normal text-secondary py-3.5 pr-4">Suggested Approach</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody className="bg-white border-0 border-none">
                                {ANONYMOUS_SUMMARY_DATA.map((row) => (
                                    <TableRow
                                        key={row.category}
                                        className="border-0 border-none hover:bg-gray-50/40 transition-colors"
                                    >
                                        {/* Category */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pl-4 pr-4 align-top bg-white border-0 border-none">
                                            {row.category}
                                        </TableCell>

                                        {/* Volume */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-center font-medium bg-white border-0 border-none">
                                            {row.volume}
                                        </TableCell>

                                        {/* Insight */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-md bg-white border-0 border-none">
                                            {row.insight}
                                        </TableCell>

                                        {/* Trend */}
                                        <TableCell className="text-[16px] font-normal py-4 align-top text-center bg-white border-0 border-none">
                                            <div
                                                className={`inline-flex items-center justify-center gap-1 text-[16px] font-medium ${row.isUp ? "text-[#66BB6A]" : "text-[#E53935]"
                                                    }`}
                                            >
                                                {row.isUp ? <UpTrendArrow /> : <DownTrendArrow />}
                                                <span>{row.trend}</span>
                                            </div>
                                        </TableCell>

                                        {/* Suggested Approach */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-md bg-white border-0 border-none">
                                            {row.suggestedApproach}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SafeGuarding