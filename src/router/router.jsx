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

import LeaderDashboardLayout from "../layout/LeaderDashboard"
import OverView from "../pages/LeaderDashboard/OverView"
import SafeGuard from "../pages/LeaderDashboard/SafeGuard"
import DashboardErrorBoundary from "../components/common/DashboardErrorBoundary"

const router = createBrowserRouter([
  {
    path: "/leader-dashboard",
    element: <LeaderDashboardLayout />,
    errorElement: <DashboardErrorBoundary />,
    children: [
      { path: "", element: <OverView /> },
      { path: "overview", element: <OverView /> },
      { path: "safeguarding", element: <SafeGuard /> },
      { path: "community", element: <OverView /> },
      { path: "teaching-insights", element: <OverView /> },
      { path: "reports", element: <OverView /> },
      { path: "*", element: <Navigate to="/leader-dashboard" replace /> },
    ],
  },
  {
    path: "/leader",
    element: <Navigate to="/leader-dashboard" replace />,
  },
  {
    path: "/review-teacher",
    element: <ReviewLayout />,
    children: [
      { path: "student-to-teacher", element: <StudentToTeacherReview /> },
      { path: "self", element: <TeacherSelfReview /> },
      { path: "observer", element: <ObserverToTeacherReview /> },
    ]
  },
  {
    path: "/review",
    element: <ReviewLayout />,
    children: [
      { path: "student-to-teacher", element: <StudentToTeacherReview /> },
      { path: "teacher-self", element: <TeacherSelfReview /> },
      { path: "observer-to-teacher", element: <ObserverToTeacherReview /> },
    ]
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth", element: <Navigate to="/auth/login" replace /> },
      { path: "/auth/login", element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "/auth/select-role", element: <RoleSelect /> },
      { path: "select-role", element: <RoleSelect /> },
      { path: "/auth/signup", element: <SignUp /> },
      { path: "signup", element: <SignUp /> },
      { path: "/auth/signup/school-leader", element: <SchoolLeaderSignUp /> },
      { path: "signup/school-leader", element: <SchoolLeaderSignUp /> },
      { path: "/auth/signup/teacher", element: <TeacherSignUp /> },
      { path: "signup/teacher", element: <TeacherSignUp /> },
      { path: "/auth/signup/teacher/plan", element: <TeacherPlanSelect /> },
      { path: "signup/teacher/plan", element: <TeacherPlanSelect /> },
      { path: "/auth/signup/school-evaluator", element: <SchoolEvaluatorSignUp /> },
      { path: "signup/school-evaluator", element: <SchoolEvaluatorSignUp /> },
      { path: "/auth/verify-email", element: <VerifyEmail /> },
      { path: "verify-email", element: <VerifyEmail /> },
      { path: "/auth/forgot-password", element: <ForgotPassword /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "/auth/reset-password", element: <ResetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },

      // Components Showcase route
      { path: "/dashboard/showcase", element: <ComponentsShowcase /> },

      // Redirect any mismatch in dashboard to dashboard root
      { path: "*", element: <Navigate to="/dashboard" replace /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])

export default router
