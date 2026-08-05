import { createBrowserRouter, Navigate } from "react-router-dom"

import AdminLayout from "../layout/DashboardLayout"
import Home from "../pages/sites/Home"
import Dashboard from "../pages/dashboard/Dashboard"
import ComponentsShowcase from "../pages/dashboard/ComponentsShowcase"
import Layout from "../layout/Layout"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/auth/Login"
import RoleSelect from "../pages/auth/RoleSelect"
import SignUp from "../pages/auth/SignUp"
import SchoolLeaderSignUp from "../pages/auth/SchoolLeaderSignUp"
import TeacherSignUp from "../pages/auth/TeacherSignUp"
import TeacherPlanSelect from "../pages/auth/TeacherPlanSelect"
import SchoolEvaluatorSignUp from "../pages/auth/SchoolEvaluatorSignUp"
import VerifyEmail from "../pages/auth/VerifyEmail"
import ForgotPassword from "../pages/auth/ForgotPassword"
import ResetPassword from "../pages/auth/ResetPassword"
import ReviewLayout from "../layout/ReviewLayout"
import StudentToTeacherReview from "../pages/review_teacher/StudentToTeacherReview"
import TeacherSelfReview from "../pages/review_teacher/TeacherSelfReview"
import ObserverToTeacherReview from "../pages/review_teacher/ObserverToTeacherReview"
import SpeakUp from "../pages/speakUp/SpeakUp"
import ReportTrack from "../pages/reportTrack/ReportTrack"
import StudentSchoolReview from "../pages/schoolReview/StudentSchoolReview"
import SchoolLeaderReview from "../pages/schoolReview/SchoolLeaderReview"
import ThankTeacher from "../pages/schoolReview/ThankTeacher"

import LeaderDashboardLayout from "../layout/LeaderDashboard"
import OverView from "../pages/LeaderDashboard/OverView"
import SafeGuard from "../pages/LeaderDashboard/SafeGuard"
import TeachingInsight from "../pages/LeaderDashboard/TeachingInsight"
import CommunityFeedbacck from "../pages/LeaderDashboard/CommunityFeedbacck"
import ReportLeader from "../pages/LeaderDashboard/ReportLeader"
import SchoolBrandingProfile from "../pages/LeaderDashboard/setting/SchoolBrandingProfile"
import UserManagement from "../pages/LeaderDashboard/setting/UserManagement"
import General from "../pages/LeaderDashboard/setting/General"
import FollowedSchool from "../pages/LeaderDashboard/setting/FollowedSchool"
import DashboardErrorBoundary from "../components/common/DashboardErrorBoundary"

import SchoolReport from "../pages/reports/SchoolReport"
import ReportLayout from "../layout/ReportLayout"

import InternalTeacherLayout from "../layout/InternalTeacherLayout"
import TeachingInsightTeacher from "../pages/internalTeacher/TeachingInsight"
import StudentFeedbackTeacher from "../pages/internalTeacher/StudentFeedback"
import ActivityTaskTeacher from "../pages/internalTeacher/ActivityTask"
import MyActivityTeacher from "../pages/internalTeacher/MyActivity"
import TeacherGeneral from "../pages/internalTeacher/setting/TeacherGeneral"
import TeacherFollowedSchool from "../pages/internalTeacher/setting/TeacherFollowedSchool"

const router = createBrowserRouter([
  // 1. Review & Feedback Forms
  {
    path: "/speak-up",
    element: <ReviewLayout />,
    children: [{ path: "", element: <SpeakUp /> }],
  },
  {
    path: "/report-track",
    element: <ReviewLayout />,
    children: [{ path: "", element: <ReportTrack /> }],
  },
  {
    path: "/school-review",
    element: <ReviewLayout />,
    children: [
      { path: "", element: <StudentSchoolReview /> },
      { path: "student", element: <StudentSchoolReview /> },
      { path: "leader", element: <SchoolLeaderReview /> },
      { path: "thank-teacher", element: <ThankTeacher /> },
    ],
  },
  {
    path: "/school-leader-review",
    element: <ReviewLayout />,
    children: [{ path: "", element: <SchoolLeaderReview /> }],
  },
  {
    path: "/thank-teacher",
    element: <ReviewLayout />,
    children: [{ path: "", element: <ThankTeacher /> }],
  },


  {
    path: "/review",
    element: <ReviewLayout />,
    children: [
      { path: "student-to-teacher", element: <StudentToTeacherReview /> },
      { path: "teacher-self", element: <TeacherSelfReview /> },
      { path: "observer-to-teacher", element: <ObserverToTeacherReview /> },
    ],
  },

  // 2. Reports
  {
    path: "/reports",
    element: <ReportLayout />,
    children: [
      { path: "school", element: <SchoolReport /> },
      { path: "school-report", element: <SchoolReport /> },
    ],
  },

  // 3. Leader Dashboard
  {
    path: "/leader-dashboard",
    element: <LeaderDashboardLayout />,
    errorElement: <DashboardErrorBoundary />,
    children: [
      { path: "", element: <OverView /> },
      { path: "overview", element: <OverView /> },
      { path: "safeguarding", element: <SafeGuard /> },
      { path: "community", element: <CommunityFeedbacck /> },
      { path: "community-feedback", element: <CommunityFeedbacck /> },
      { path: "teaching-insights", element: <TeachingInsight /> },
      { path: "reports", element: <ReportLeader /> },
      { path: "setting", element: <General /> },
      { path: "setting/branding-profile", element: <SchoolBrandingProfile /> },
      { path: "setting/user-admin", element: <UserManagement /> },
      { path: "setting/general", element: <General /> },
      { path: "setting/followed-schools", element: <FollowedSchool /> },
      { path: "*", element: <Navigate to="/leader-dashboard" replace /> },
    ],
  },
  {
    path: "/leader",
    element: <Navigate to="/leader-dashboard" replace />,
  },

  // 4. Internal Teacher Dashboard
  {
    path: "/internal-teacher",
    element: <InternalTeacherLayout />,
    errorElement: <DashboardErrorBoundary />,
    children: [
      { path: "", element: <TeachingInsightTeacher /> },
      { path: "teaching-insights", element: <TeachingInsightTeacher /> },
      { path: "student-feedback", element: <StudentFeedbackTeacher /> },
      { path: "my-work", element: <ActivityTaskTeacher /> },
      { path: "my-work/activity-task", element: <ActivityTaskTeacher /> },
      { path: "my-work/my-activity", element: <MyActivityTeacher /> },
      { path: "setting", element: <TeacherGeneral /> },
      { path: "setting/general", element: <TeacherGeneral /> },
      { path: "setting/followed-schools", element: <TeacherFollowedSchool /> },
      { path: "*", element: <Navigate to="/internal-teacher" replace /> },
    ],
  },
  {
    path: "/teacher",
    element: <Navigate to="/internal-teacher" replace />,
  },

  // 4. Auth Pages
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "", element: <Navigate to="/auth/login" replace /> },
      { path: "login", element: <Login /> },
      { path: "select-role", element: <RoleSelect /> },
      { path: "signup", element: <SignUp /> },
      { path: "signup/school-leader", element: <SchoolLeaderSignUp /> },
      { path: "signup/teacher", element: <TeacherSignUp /> },
      { path: "signup/teacher/plan", element: <TeacherPlanSelect /> },
      { path: "signup/school-evaluator", element: <SchoolEvaluatorSignUp /> },
      { path: "verify-email", element: <VerifyEmail /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },

  // 5. Main Site & Admin Dashboard
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "showcase", element: <ComponentsShowcase /> },
      { path: "*", element: <Navigate to="/dashboard" replace /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])

export default router
