import React, { useState } from "react"
import TeachingInsightsTab from "@/components/leaderDashboard/modal/tabs/TeachingInsightsTab"

// Legend Definitions matching ScatterPlotModalTeacher
const THREE_LEGENDS = [
  { name: "Student", color: "#038AF9", key: "student" },
  { name: "Teacher", color: "#C7B0F7", key: "teacher" },
  { name: "Observer", color: "#8DC613", key: "observer" },
]

const TWO_LEGENDS = [
  { name: "Teacher", color: "#C7B0F7", key: "teacher" },
  { name: "Observer", color: "#8DC613", key: "observer" },
]

// Radar Datasets (Teaching Quality, Learning Environment, Professional Practice ONLY)
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

// Table Insights Data Map copied 100% from ScatterPlotModalTeacher
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

const ClassroomInsightsTab = () => {
  const [activeSubTab, setActiveSubTab] = useState("Classroom Climate")

  const currentRadarData = RADAR_DATA_MAP[activeSubTab] || null
  const currentLegends = activeSubTab === "Professional Practice" ? TWO_LEGENDS : THREE_LEGENDS
  const currentRows = CATEGORY_INSIGHTS_DATA_MAP[activeSubTab] || CATEGORY_INSIGHTS_DATA_MAP["Classroom Climate"]

  return (
    <div className="w-full bg-[#F6F6F6] rounded-3xl p-5 md:p-6 space-y-6 font-urbanist">
      <TeachingInsightsTab
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        currentRadarData={currentRadarData}
        currentLegends={currentLegends}
        currentRows={currentRows}
      />
    </div>
  )
}

export default ClassroomInsightsTab
