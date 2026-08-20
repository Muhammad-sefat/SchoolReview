import { ScrollRestoration } from "react-router-dom";
import TeachersBanner from "../../components/site-components/forteachers/TeachersBanner";

function ForTeachers() {
  return (
    <>
      <ScrollRestoration />
      <TeachersBanner />
    </>
  );
}

export default ForTeachers;
