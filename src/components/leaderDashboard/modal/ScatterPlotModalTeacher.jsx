import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Star, Download } from "lucide-react"
import OverviewTab from "./tabs/OverviewTab"
import TeachingInsightsTab from "./tabs/TeachingInsightsTab"

// Standard 3 Legends (Student, Teacher, Observer)
const THREE_LEGENDS = [
  { name: "Student", color: "#723CEB", key: "student" },
  { name: "Teacher", color: "#C7B0F7", key: "teacher" },
  { name: "Observer", color: "#8DC613", key: "observer" },
]

// Professional Practice 2 Legends (Teacher, Observer)
const TWO_LEGENDS = [
  { name: "Teacher", color: "#C7B0F7", key: "teacher" },
  { name: "Observer", color: "#8DC613", key: "observer" },
]

// Radar Datasets
const RADAR_DATA_MAP = {
  "Teaching Quality": [
    { subject: "Clarity", student: 4.5, teacher: 4.0, observer: 3.2, iconColor: "#FB8C00" },
    { subject: "Purpose", student: 4.8, teacher: 3.8, observer: 3.5, iconColor: "#E53935" },
    { subject: "Progression", student: 4.2, teacher: 4.5, observer: 3.8, iconColor: "#66BB6A" },
    { subject: "Challenge", student: 4.9, teacher: 4.8, observer: 3.9, iconColor: "#66BB6A" },
    { subject: "Engagement", student: 4.3, teacher: 4.1, observer: 3.7, iconColor: "#E53935" },
    { subject: "Feedback", student: 4.6, teacher: 4.2, observer: 3.8, iconColor: "#66BB6A" },
  ],
  "Learning Environment": [
    { subject: "Pace", student: 4.8, teacher: 4.0, observer: 3.5, iconColor: "#FB8C00" },
    { subject: "Support", student: 4.5, teacher: 3.8, observer: 3.2, iconColor: "#E53935" },
    { subject: "Dialogue", student: 4.2, teacher: 4.5, observer: 3.8, iconColor: "#66BB6A" },
    { subject: "Fairness", student: 4.9, teacher: 4.8, observer: 3.9, iconColor: "#66BB6A" },
    { subject: "Inclusion", student: 4.3, teacher: 4.1, observer: 3.7, iconColor: "#E53935" },
    { subject: "Behavior", student: 4.6, teacher: 4.2, observer: 3.8, iconColor: "#66BB6A" },
  ],
  "Professional Practice": [
    { subject: "Lesson Coherence", teacher: 3.2, observer: 2.8, iconColor: "#FB8C00" },
    { subject: "Meaningful Assessment", teacher: 4.0, observer: 4.5, iconColor: "#66BB6A" },
    { subject: "Adaptive Teaching", teacher: 3.5, observer: 4.2, iconColor: "#66BB6A" },
    { subject: "Ongoing Improvement", teacher: 4.8, observer: 4.0, iconColor: "#E53935" },
  ],
}

// Table Insights Data Map
const CATEGORY_INSIGHTS_DATA_MAP = {
  "Classroom Climate": [
    {
      metric: "Classroom Safety",
      insightText:
        "Most students feel safe and comfortable in class. However, this becomes less consistent during transitions, where noise and loss of focus create moments of instability.",
      tags: [{ label: "Sometimes feel uncomfortable", percentage: "48%" }],
      suggestedApproach:
        "Introduce and practise a simple transition routine (pause → clear instruction → countdown → move → reset).",
      score: 4.5,
      trend: "9%",
      iconType: "lightbulb",
    },
    {
      metric: "Student Wellbeing",
      insightText:
        "Students generally feel positive in class. However, when behaviour is corrected loudly, some students feel unsettled or anxious, which can affect their confidence and ability to stay focused.",
      tags: [{ label: "Usually feel good", percentage: "80%" }],
      suggestedApproach:
        "Use calm, consistent behaviour responses (e.g. pause, proximity, clear expectation, follow-up if needed). Establish a predictable approach so students know what to expect.",
      score: 4.5,
      trend: "9%",
      iconType: "lightbulb",
    },
  ],
  "Teaching Quality": [
    {
      metric: "Clarity",
      insightText:
        "Students understand explanations but struggle to begin independent work confidently.",
      tags: [
        { label: "Rarely checks understanding", percentage: "48%" },
        { label: "Instructions unclear", percentage: "20%" },
        { label: "Few examples", percentage: "18%" },
      ],
      suggestedApproach:
        "Use frequent checks for understanding before independent work (e.g. hinge questions, mini whiteboards). Add a short 'We Do' step to model how to begin tasks.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Purpose",
      insightText:
        "Students complete tasks but are not always clear on why they are learning them.",
      tags: [
        { label: "Don't know why", percentage: "48%" },
        { label: "Not clear how it's used", percentage: "39%" },
      ],
      suggestedApproach:
        "Clearly state the learning goal at the start and revisit it during the lesson. Ask students to explain the purpose in their own words.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Progression",
      insightText:
        "Learning does not always feel connected, making it harder for students to follow.",
      tags: [
        { label: "Doesn't connect to last lesson", percentage: "48%" },
        { label: "Hard to follow", percentage: "20%" },
      ],
      suggestedApproach:
        "Start lessons with retrieval practice and explicitly link prior learning to new content. Make progression visible during the lesson.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Challenge",
      insightText:
        "Tasks do not consistently promote deeper thinking or challenge all students.",
      tags: [
        { label: "Too easy", percentage: "48%" },
        { label: "Not much thinking required", percentage: "33%" },
      ],
      suggestedApproach:
        "Add at least one higher-order thinking task each lesson (e.g. 'Explain why...'). Build in structured reasoning or explanation.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Engagement",
      insightText:
        "Participation is uneven, with many students remaining passive.",
      tags: [
        { label: "Few chances to participate", percentage: "48%" },
        { label: "Hard to focus", percentage: "20%" },
      ],
      suggestedApproach:
        "Use structured participation (e.g. cold call, think-pair-share, wait time) to ensure all students contribute.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Feedback",
      insightText:
        "Students receive feedback but are not always clear on how to improve.",
      tags: [
        { label: "No clear next steps", percentage: "48%" },
        { label: "Feedback not clear", percentage: "20%" },
      ],
      suggestedApproach:
        "Give one clear next step and provide time in the lesson for students to apply it immediately.",
      score: 4.5,
      trend: "9%",
    },
  ],
  "Learning Environment": [
    {
      metric: "Pace",
      insightText: "Lesson pacing is not consistently matched to student understanding.",
      tags: [
        { label: "Hard to keep up", percentage: "48%" },
        { label: "Sometimes rushed", percentage: "20%" },
        { label: "Not enough thinking time", percentage: "18%" },
      ],
      suggestedApproach:
        "Build in short pause points during lessons to check readiness (e.g. quick questions, mini whiteboards). Adjust pacing based on responses before moving on.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Support",
      insightText: "Students do not always receive timely help when they struggle.",
      tags: [
        { label: "Hard to get help", percentage: "48%" },
        { label: "Questions not answered", percentage: "48%" },
        { label: "Explanations unclear", percentage: "39%" },
      ],
      suggestedApproach:
        "Use structured support strategies (e.g. check-in points, help signals, targeted circulation) to ensure struggling students are identified and supported quickly.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Dialogue",
      insightText: "Opportunities for students to explain ideas and engage in discussion are inconsistent.",
      tags: [
        { label: "Few chances to share", percentage: "48%" },
        { label: "Same students speak", percentage: "20%" },
        { label: "Ideas not fully explored", percentage: "20%" },
      ],
      suggestedApproach:
        "Use structured discussion routines (e.g. think-pair-share, cold call, sentence stems) to ensure all students explain their thinking.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Fairness",
      insightText: "Students do not always perceive classroom interactions as consistently fair.",
      tags: [
        { label: "Students treated differently", percentage: "48%" },
        { label: "Decisions not explained", percentage: "33%" },
        { label: "Not always respectful", percentage: "33%" },
      ],
      suggestedApproach:
        "Make behaviour expectations explicit and consistently applied. Briefly explain decisions to reinforce fairness and transparency.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Inclusion",
      insightText: "Not all students consistently feel a strong sense of belonging in the classroom.",
      tags: [
        { label: "Often feel left out", percentage: "48%" },
        { label: "Sometimes feel left out", percentage: "20%" },
      ],
      suggestedApproach:
        "Use inclusive strategies (e.g. targeted questioning, group roles, positive recognition) to ensure all students feel seen and involved.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Behavior",
      insightText: "Behaviour expectations are not always consistently applied, affecting classroom climate.",
      tags: [
        { label: "Rules unclear", percentage: "48%" },
        { label: "Not always fair", percentage: "20%" },
        { label: "Inconsistency in application", percentage: "20%" },
      ],
      suggestedApproach:
        "Re-teach and reinforce clear routines and expectations. Apply them consistently to build predictability and a stable classroom environment.",
      score: 4.5,
      trend: "9%",
    },
  ],
  "Professional Practice": [
    {
      metric: "Lesson Coherence",
      insightText: "Lesson components are aligned, but this alignment is not always made explicit during the lesson.",
      suggestedApproach:
        "Consider making the alignment more visible to students (e.g. briefly referencing how each task connects to the learning goal and assessment).",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Meaningful Assessment",
      insightText: "Assessment is aligned with learning goals, but is not consistently used during learning to inform teaching.",
      suggestedApproach:
        "You might try using short in-lesson checks (e.g. hinge questions, mini tasks) to use assessment as a live tool for adjusting teaching.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Adaptive Teaching",
      insightText: "Teaching is responsive, but adjustments are not always consistently visible across the lesson.",
      suggestedApproach:
        "It could help to build in more frequent check points to guide when and how to adjust instruction in real time.",
      score: 4.5,
      trend: "9%",
    },
    {
      metric: "Ongoing Improvement",
      insightText: "Reflection is evident, though it is not always clearly translated into specific next steps.",
      suggestedApproach:
        "You might focus reflection on one specific moment from a lesson and define a small, testable change for next time.",
      score: 4.5,
      trend: "9%",
    },
  ],
  "Learning Impact": [
    {
      metric: "Understanding",
      insightText: "Students understand explanations but struggle to begin independent work confidently.",
      tags: [
        { label: "Often confused", percentage: "48%" },
        { label: "Not always clear", percentage: "20%" },
        { label: "Few examples", percentage: "18%" },
      ],
      suggestedApproach:
        "Break explanations into smaller chunks and check understanding frequently (e.g. hinge questions, mini whiteboards). Re-explain key points before moving on.",
      score: 4.5,
      trend: "9%",
      iconType: "lightbulb",
    },
    {
      metric: "Progress",
      insightText: "Students are not always confident that they are making progress.",
      tags: [
        { label: "Don't see progress", percentage: "48%" },
        { label: "Progress not always clear", percentage: "20%" },
      ],
      suggestedApproach:
        "Make progress visible by sharing success criteria and showing examples of improvement. Build in moments where students reflect on progress.",
      score: 4.5,
      trend: "9%",
      iconType: "lightbulb",
    },
    {
      metric: "Confidence",
      insightText: "Students do not consistently feel confident in their ability to succeed.",
      tags: [
        { label: "Feel stuck · can't do it", percentage: "40%" },
        { label: "Need a lot of help", percentage: "20%" },
      ],
      suggestedApproach:
        "Build confidence through scaffolded tasks and gradual release (I Do → We Do → You Do). Provide early success opportunities and encourage independent attempts.",
      score: 4.5,
      trend: "9%",
      iconType: "lightbulb",
    },
  ],
}

const ScatterPlotModalTeacher = ({ isOpen, onClose, metric }) => {
  const [mainTab, setMainTab] = useState("overview")
  const [activeSubTab, setActiveSubTab] = useState("Classroom Climate")

  const teacherName = metric?.name || "Albert Flores"
  const score =
    metric?.overall !== undefined
      ? metric.overall % 1 === 0
        ? metric.overall.toFixed(0)
        : metric.overall.toFixed(1)
      : "1.5"

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

  const currentRadarData = RADAR_DATA_MAP[activeSubTab] || null
  const currentLegends = activeSubTab === "Professional Practice" ? TWO_LEGENDS : THREE_LEGENDS
  const currentRows = CATEGORY_INSIGHTS_DATA_MAP[activeSubTab] || CATEGORY_INSIGHTS_DATA_MAP["Classroom Climate"]

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose && onClose()}>
      <DialogContent className="max-w-[1440px] w-[95%] sm:w-full rounded-3xl bg-white p-0 border border-gray-100 shadow-2xl font-urbanist overflow-hidden">
        {/* Inner Scrollable Container with Generous Bottom Padding (pb-8 sm:pb-10) */}
        <div className="p-4 max-h-[88vh] overflow-y-auto space-y-5 no-scrollbar">
          {/* Modal Top Header */}
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

          {/* Top Navigation Row: Main Tabs (Overview | Teaching Insights) & Download Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMainTab("overview")}
                className={`px-5 py-2.5 rounded-full text-[18px] font-normal transition-all cursor-pointer ${mainTab === "overview"
                  ? "bg-[#038AF9] text-white font-medium shadow-xs"
                  : "border border-gray-200/90 bg-white text-[#5A5A5A] hover:text-[#080808]"
                  }`}
              >
                Overview
              </button>

              <button
                type="button"
                onClick={() => setMainTab("insights")}
                className={`px-5 py-2.5 rounded-full text-[18px] font-normal transition-all cursor-pointer ${mainTab === "insights"
                  ? "bg-[#038AF9] text-white font-medium shadow-xs"
                  : "border border-gray-200/90 bg-white text-[#5A5A5A] hover:text-[#080808]"
                  }`}
              >
                Teaching Insights
              </button>
            </div>

            <button
              type="button"
              className="bg-[#038AF9] hover:bg-[#0274d4] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs shrink-0"
            >
              <Download className="w-4 h-4 stroke-[2]" />
              <span>Download Report</span>
            </button>
          </div>

          {/* Faint Dotted Divider Line */}
          <div className="border-b border-dashed border-gray-200 my-4" />

          {/* MAIN TAB 1: OVERVIEW */}
          {mainTab === "overview" && (
            <OverviewTab
              strengths={strengths}
              developmentAreas={developmentAreas}
              keyMetrics={keyMetrics}
              learningImpactMetrics={learningImpactMetrics}
            />
          )}

          {/* MAIN TAB 2: TEACHING INSIGHTS */}
          {mainTab === "insights" && (
            <TeachingInsightsTab
              activeSubTab={activeSubTab}
              setActiveSubTab={setActiveSubTab}
              currentRadarData={currentRadarData}
              currentLegends={currentLegends}
              currentRows={currentRows}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ScatterPlotModalTeacher