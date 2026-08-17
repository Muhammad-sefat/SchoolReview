import React, { useState } from "react"
import { Title48, Title24 } from "@/components/typho/Title"
import KeyMetricsCard from "@/components/leaderDashboard/overview/KeyMetricsCard"
import PieChartComponent from "@/components/graphCharts/PieChart"
import StudentSafetySignals from "@/components/leaderDashboard/overview/teacherOverview/StudentSafetySignals"
import ScatterPlot from "@/components/graphCharts/ScatterPlot"
import PrioprityArea from "@/components/leaderDashboard/overview/PrioprityArea"
import SubjectYearComparisonBarChart from "@/components/graphCharts/SubjectYearComparisonBarChart"
import ScatterPlotModalTeacher from "@/components/leaderDashboard/modal/ScatterPlotModalTeacher"
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

const TEACHER_KEY_METRICS = [
    {
        id: "teaching-clarity",
        label: "Teaching Clarity",
        percentage: 80,
        trend: "9%",
        isUp: true,
        barColor: "bg-[#038AF9]",
    },
    {
        id: "learning-support-1",
        label: "Learning Support",
        percentage: 80,
        trend: "9%",
        isUp: true,
        barColor: "bg-[#038AF9]",
    },
    {
        id: "learning-support-2",
        label: "Learning Support",
        percentage: 80,
        trend: "9%",
        isUp: true,
        barColor: "bg-[#038AF9]",
    },
    {
        id: "respect-fairness",
        label: "Respect & Fairness",
        percentage: 40,
        trend: "9%",
        isUp: false,
        barColor: "bg-[#E53935]",
    },
]

const TEACHER_DISTRIBUTION_DATA = [
    { name: "Effective (44%)", value: 44, color: "#B1DBFD" },
    { name: "Developing (24%)", value: 24, color: "#038AF9" },
    { name: "Needs support (30%)", value: 30, color: "#0066CC" },
]

const TEACHER_SCATTER_DATA = [
    { id: 1, name: "Kathryn Murphy", x: 0.5, y: 0.3, category: "low", overallScore: "2.5", lowestMetric: "Pace (1.8)", highestMetric: "Clarity (3.0)", overall: 2.5 },
    { id: 2, name: "Robert Fox", x: 0.8, y: 0.7, category: "low", overallScore: "2.8", lowestMetric: "Feedback (2.0)", highestMetric: "Pace (3.2)", overall: 2.8 },
    { id: 3, name: "Floyd Miles", x: 1.1, y: 0.4, category: "low", overallScore: "2.0", lowestMetric: "Homework (1.5)", highestMetric: "Clarity (2.5)", overall: 2.0 },
    { id: 4, name: "Savannah Nguyen", x: 1.7, y: 1.7, category: "medium", overallScore: "1.8", lowestMetric: "Structure (1.2)", highestMetric: "Support (2.4)", overall: 1.8 },
    { id: 5, name: "Ronald Richards", x: 2.4, y: 2.3, category: "neutral", overallScore: "3.0", lowestMetric: "Pace (2.5)", highestMetric: "Clarity (3.5)", overall: 3.0 },
    { id: 6, name: "Esther Howard", x: 2.6, y: 2.7, category: "neutral", overallScore: "3.8", lowestMetric: "Support (3.2)", highestMetric: "Feedback (4.2)", overall: 3.8 },
    { id: 7, name: "Wade Warren", x: 3.5, y: 3.5, category: "good", overallScore: "3.5", lowestMetric: "Pace (3.0)", highestMetric: "Clarity (4.0)", overall: 3.5 },
    { id: 8, name: "Mr. Lukas Meier", x: 3.6, y: 3.8, category: "good", overallScore: "3.7", lowestMetric: "Pace (3.0)", highestMetric: "Clarity (5.0)", overall: 3.7 },
    { id: 9, name: "Annette Black", x: 3.7, y: 3.4, category: "good", overallScore: "4.2", lowestMetric: "Feedback (3.8)", highestMetric: "Clarity (4.6)", overall: 4.2 },
    { id: 10, name: "Bessie Cooper", x: 4.2, y: 3.7, category: "good", overallScore: "4.5", lowestMetric: "Support (4.0)", highestMetric: "Clarity (5.0)", overall: 4.5 },
    { id: 11, name: "Jacob Jones", x: 4.5, y: 4.4, category: "best", overallScore: "4.5", lowestMetric: "Pace (4.2)", highestMetric: "Clarity (4.9)", overall: 4.5 },
    { id: 12, name: "Albert Flores", x: 4.8, y: 4.5, category: "best", overallScore: "5.0", lowestMetric: "Support (4.8)", highestMetric: "Clarity (5.0)", overall: 1.5 },
]

const TEACHER_PRIORITY_GROUPS = [
    {
        id: "needs-support",
        title: "Needs Support",
        borderColor: "border-[#E53935]",
        textColor: "text-[#080808]",
        bgColor: "bg-[#FAFAFA]",
        items: [
            { label: "Kathryn Murphy", score: "2.5" },
            { label: "Robert Fox", score: "2.8" },
            { label: "Floyd Miles", score: "2.0" },
            { label: "Savannah Nguyen", score: "1.8" },
        ],
    },
    {
        id: "developing",
        title: "Developing",
        borderColor: "border-[#FB8C00]",
        textColor: "text-[#080808]",
        bgColor: "bg-[#FAFAFA]",
        items: [
            { label: "Ronald Richards", score: "3.0" },
            { label: "Esther Howard", score: "3.8" },
            { label: "Wade Warren", score: "3.5" },
        ],
    },
    {
        id: "effective",
        title: "Effective",
        borderColor: "border-[#66BB6A]",
        textColor: "text-[#080808]",
        bgColor: "bg-[#FAFAFA]",
        items: [
            { label: "Bessie Cooper", score: "4.5" },
            { label: "Annette Black", score: "4.2" },
            { label: "Jacob Jones", score: "4.5" },
            { label: "Albert Flores", score: "5.0" },
        ],
    },
]

const TEACHER_INSIGHTS_TABLE_DATA = [
    {
        category: "Highly effective",
        name: "Marvin McKinney",
        score: "4.5",
        trend: "9%",
        isUp: true,
        insight: "Teaching is consistently clear and well-paced, with strong student engagement and structured delivery.",
        developmentFocus: "Add stretch tasks such as challenge questions or extension problems for early finishers.",
    },
    {
        category: "Effective",
        name: "Jerome Bell",
        score: "3.0",
        trend: "15%",
        isUp: false,
        insight: "Explanations are clear and students understand tasks, with opportunities to increase participation during independent work.",
        developmentFocus: "Use think–pair–share, cold calling, or mini whiteboards to keep all students engaged.",
    },
    {
        category: "Developing",
        name: "Courtney Henry",
        score: "2.5",
        trend: "9%",
        isUp: true,
        insight: "Lessons are progressing well, with an opportunity to strengthen transitions between activities to maintain focus.",
        developmentFocus: "Introduce routines like countdowns or clear transition signals to improve lesson flow.",
    },
    {
        category: "Needs attention",
        name: "Cody Fisher",
        score: "1.5",
        trend: "9%",
        isUp: true,
        insight: "Students are engaging with lessons, with an opportunity to make instructions and feedback more consistently clear.",
        developmentFocus: "Use step-by-step instructions and quick checks like 'show me boards' to confirm understanding.",
    },
]

const TeacherEffectiveness = () => {
    const [selectedTeacherMetric, setSelectedTeacherMetric] = useState(null)

    return (
        <div className="w-full space-y-6 font-urbanist">
            {/* Section Header */}
            <div>
                <Title48 className="text-[#038AF9] font-bold">Teaching Effectiveness</Title48>
                <p className="text-[16px] text-secondary font-normal mt-1">
                    A clear overview of teaching effectiveness, highlighting strengths, development areas, and where targeted support can improve student experience.
                </p>
            </div>

            {/* Row 1: Outer #F6F6F6 Container for 3 Overview Cards */}
            <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                    {/* Card 1: Key Metrics */}
                    <div className="md:col-span-4 flex">
                        <KeyMetricsCard title="Key Metrics" metrics={TEACHER_KEY_METRICS} />
                    </div>

                    {/* Card 2: Teacher Effectiveness Distribution Pie Chart */}
                    <div className="md:col-span-4 flex">
                        <PieChartComponent
                            title="Teacher Effectiveness Distribution"
                            data={TEACHER_DISTRIBUTION_DATA}
                        />
                    </div>

                    {/* Card 3: Student Safety Signals */}
                    <div className="md:col-span-4 flex">
                        <StudentSafetySignals enabled={true} />
                    </div>
                </div>
            </div>

            {/* Row 2: Outer #F6F6F6 Container for ScatterPlot & Priority Areas */}
            <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
                <div className="grid grid-cols-12 gap-4 items-stretch">
                    {/* Left Scatter Plot Chart */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col">
                        <ScatterPlot
                            title="Performance"
                            subtitle="Select a metric to view details."
                            hideTabs={true}
                            xAxisLabel="Opportunity for Improvement"
                            yAxisLabel="Overall Satisfaction"
                            showReferenceLine={true}
                            showBottomCaption={true}
                            data={TEACHER_SCATTER_DATA}
                            onMetricClick={(metric) => setSelectedTeacherMetric(metric)}
                            className="h-full"
                        />
                    </div>

                    {/* Right Priority Areas */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col">
                        <PrioprityArea
                            title="Priority Areas by Performance"
                            groups={TEACHER_PRIORITY_GROUPS}
                            type="teacher"
                        />
                    </div>
                </div>
            </div>

            {/* Row 3: Outer #F6F6F6 Container for Subject Year Comparison Bar Chart */}
            <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
                <SubjectYearComparisonBarChart />
            </div>

            {/* Row 4: Outer #F6F6F6 Container for Teacher Insights & Development Table */}
            <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
                <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6 font-urbanist">
                    <Title24 className="text-[#080808] font-semibold">
                        Teacher Insights & Development
                    </Title24>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto w-full">
                        <Table
                            containerClassName="border-0 border-none bg-transparent shadow-none rounded-none w-full"
                            className="w-full min-w-[850px] text-left border-collapse border-0 border-none"
                        >
                            <TableHeader className="bg-[#F9FAFB]">
                                <TableRow className="border-b border-gray-100 hover:bg-transparent">
                                    <TableHead className="w-[170px] text-[16px] font-normal text-secondary py-3.5 pl-4">Category</TableHead>
                                    <TableHead className="w-[180px] text-[16px] font-normal text-secondary py-3.5">Name</TableHead>
                                    <TableHead className="w-[110px] text-[16px] font-normal text-secondary py-3.5 text-center">Score</TableHead>
                                    <TableHead className="w-[100px] text-[16px] font-normal text-secondary py-3.5 text-center">Trend</TableHead>
                                    <TableHead className="text-[16px] font-normal text-secondary py-3.5">Insight</TableHead>
                                    <TableHead className="text-[16px] font-normal text-secondary py-3.5 pr-4">Development Focus (Next Step)</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody className="bg-white border-0 border-none">
                                {TEACHER_INSIGHTS_TABLE_DATA.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        className="border-0 border-none hover:bg-gray-50/40 transition-colors"
                                    >
                                        {/* Category */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pl-4 pr-4 align-top bg-white border-0 border-none">
                                            {row.category}
                                        </TableCell>

                                        {/* Name */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top bg-white border-0 border-none">
                                            {row.name}
                                        </TableCell>

                                        {/* Score with Blue Star */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-center bg-white border-0 border-none">
                                            <div className="inline-flex items-center justify-center gap-2 font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.89897 2.46232C9.44472 1.40188 10.9746 1.40188 11.5203 2.46232L13.3591 6.0356C13.3896 6.09489 13.4469 6.13616 13.5132 6.14662L17.5101 6.77703C18.6956 6.96401 19.168 8.40266 18.3203 9.24449L15.459 12.0857C15.4116 12.1328 15.3897 12.1994 15.4002 12.2651L16.0309 16.2305C16.2178 17.4057 14.9804 18.2952 13.9101 17.7552L10.3051 15.9365C10.2451 15.9062 10.1741 15.9062 10.1142 15.9365L6.50924 17.7552C5.43884 18.2952 4.2015 17.4057 4.38841 16.2305L5.01908 12.2651C5.02953 12.1994 5.00768 12.1328 4.96029 12.0857L2.09895 9.24449C1.25124 8.40266 1.72364 6.96401 2.90914 6.77703L6.90603 6.14662C6.97238 6.13616 7.02969 6.09489 7.06021 6.0356L8.89897 2.46232Z" fill="#038AF9" />
                                                </svg>
                                                <span className="mt-1">{row.score}</span>
                                            </div>
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

                                        {/* Insight */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-sm bg-white border-0 border-none">
                                            {row.insight}
                                        </TableCell>

                                        {/* Development Focus */}
                                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-sm bg-white border-0 border-none">
                                            {row.developmentFocus}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Scatter Plot Teacher Modal */}
            <ScatterPlotModalTeacher
                isOpen={!!selectedTeacherMetric}
                onClose={() => setSelectedTeacherMetric(null)}
                metric={selectedTeacherMetric}
            />
        </div>
    )
}

export default TeacherEffectiveness