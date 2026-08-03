import React from "react"
import { Title48, Title24 } from "@/components/typho/Title"
import KeyMetricsCard from "@/components/leaderDashboard/overview/KeyMetricsCard"
import PieChartComponent from "@/components/graphCharts/PieChart"
import StudentSafetySignals from "@/components/leaderDashboard/overview/teacherOverview/StudentSafetySignals"
import ScatterPlot from "@/components/graphCharts/ScatterPlot"
import PrioprityArea from "@/components/leaderDashboard/overview/PrioprityArea"
import SubjectYearComparisonBarChart from "@/components/graphCharts/SubjectYearComparisonBarChart"
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

const StarIconBlue = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path d="M7.10091 1.9696C7.53723 1.12166 8.76024 1.12166 9.19656 1.9696L10.6666 4.82631C10.6911 4.87371 10.7369 4.9067 10.7899 4.91507L13.9859 5.41908C14.9337 5.56857 15.3114 6.7185 14.6335 7.39151L12.3458 9.66288C12.3079 9.70051 12.2904 9.75372 12.2988 9.80626L12.8031 12.9772C12.9525 13.9168 11.9632 14.628 11.1075 14.1963L8.22513 12.7423C8.17724 12.7181 8.1204 12.7181 8.07251 12.7423L5.19013 14.1963C4.33442 14.628 3.3451 13.9168 3.49454 12.9772L3.99887 9.80626C4.00723 9.75372 3.98977 9.70051 3.95188 9.66288L1.66418 7.39151C0.986348 6.7185 1.36404 5.56857 2.31187 5.41908L5.50785 4.91507C5.60086 4.9067 5.64667 4.87371 5.67106 4.82631L7.10091 1.9696Z" fill="#038AF9" />
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
    { id: 1, name: "Kathryn Murphy", x: 0.5, y: 0.3, category: "low", overall: 0.3, student: 0.5, parent: 0.3 },
    { id: 2, name: "Robert Fox", x: 0.8, y: 0.6, category: "low", overall: 0.6, student: 0.8, parent: 0.6 },
    { id: 3, name: "Floyd Miles", x: 1.0, y: 0.5, category: "low", overall: 0.5, student: 1.0, parent: 0.5 },
    { id: 4, name: "Savannah Nguyen", x: 1.2, y: 0.7, category: "low", overall: 0.7, student: 1.2, parent: 0.7 },
    { id: 5, name: "Ronald Richards", x: 1.8, y: 1.3, category: "medium", overall: 1.3, student: 1.8, parent: 1.3 },
    { id: 6, name: "Esther Howard", x: 2.1, y: 1.6, category: "medium", overall: 1.6, student: 2.1, parent: 1.6 },
    { id: 7, name: "Wade Warren", x: 2.4, y: 1.4, category: "medium", overall: 1.4, student: 2.4, parent: 1.4 },
    { id: 8, name: "Bessie Cooper", x: 3.2, y: 2.6, category: "neutral", overall: 2.6, student: 3.2, parent: 2.6 },
    { id: 9, name: "Annette Black", x: 3.5, y: 2.3, category: "neutral", overall: 2.3, student: 3.5, parent: 2.3 },
    { id: 10, name: "Jacob Jones", x: 3.8, y: 2.7, category: "neutral", overall: 2.7, student: 3.8, parent: 2.7 },
    { id: 11, name: "Albert Flores", x: 4.2, y: 3.3, category: "good", overall: 3.3, student: 4.2, parent: 3.3 },
    { id: 12, name: "Jenny Wilson", x: 4.4, y: 3.8, category: "good", overall: 3.8, student: 4.4, parent: 3.8 },
    { id: 13, name: "Dianne Russell", x: 4.5, y: 3.4, category: "good", overall: 3.4, student: 4.5, parent: 3.4 },
    { id: 14, name: "Guy Hawkins", x: 4.8, y: 3.7, category: "good", overall: 3.7, student: 4.8, parent: 3.7 },
    { id: 15, name: "Cody Fisher", x: 5.2, y: 4.4, category: "best", overall: 4.4, student: 5.2, parent: 4.4 },
    { id: 16, name: "Kristin Watson", x: 5.5, y: 4.7, category: "best", overall: 4.7, student: 5.5, parent: 4.7 },
    { id: 17, name: "Devon Lane", x: 5.7, y: 4.5, category: "best", overall: 4.5, student: 5.7, parent: 4.5 },
    { id: 18, name: "Eleanor Pena", x: 6.0, y: 4.8, category: "best", overall: 4.8, student: 6.0, parent: 4.8 },
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
                            subtitle=""
                            hideTabs={true}
                            xAxisLabel="Opportunity for Improvement"
                            yAxisLabel="Overall Satisfaction"
                            showReferenceLine={true}
                            showBottomCaption={true}
                            data={TEACHER_SCATTER_DATA}
                            className="h-full"
                        />
                    </div>

                    {/* Right Priority Areas */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col">
                        <PrioprityArea
                            title="Priority Areas by Performance"
                            groups={TEACHER_PRIORITY_GROUPS}
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
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89897 2.46232C9.44472 1.40188 10.9746 1.40188 11.5203 2.46232L13.3591 6.0356C13.3896 6.09489 13.4469 6.13616 13.5132 6.14662L17.5101 6.77703C18.6956 6.96401 19.168 8.40266 18.3203 9.24449L15.459 12.0857C15.4116 12.1328 15.3897 12.1994 15.4002 12.2651L16.0309 16.2305C16.2178 17.4057 14.9804 18.2952 13.9101 17.7552L10.3051 15.9365C10.2451 15.9062 10.1741 15.9062 10.1142 15.9365L6.50924 17.7552C5.43884 18.2952 4.2015 17.4057 4.38841 16.2305L5.01908 12.2651C5.02953 12.1994 5.00768 12.1328 4.96029 12.0857L2.09895 9.24449C1.25124 8.40266 1.72364 6.96401 2.90914 6.77703L6.90603 6.14662C6.97238 6.13616 7.02969 6.09489 7.06021 6.0356L8.89897 2.46232Z" fill="#038AF9" />
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
        </div>
    )
}

export default TeacherEffectiveness