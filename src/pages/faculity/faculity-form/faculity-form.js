import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import { useFormik } from "formik";
import CourseTaught from "./components/course_taught";
import UniversityLinkage from "./sections/university_linkage";
import Consultancy from "./sections/consultancy";
import TechnologyTransfer from "./sections/technoloy_transfer";
import CommunityEnagement from "./sections/community_engagement";
import CooperationWithUniversityAbroad from "./sections/cooperation_with_university_abroad";
import Publication from "./sections/publication";
import Research from "./sections/research";
import EntrepreneurialProjects from "./sections/entrepneurial_projects";
import TeachingLearning from "./sections/teaching_learning";
import TutoredCourses from "./sections/tutored_courses";
import Section from "./components/section";
import ImprovedCapacity from "./sections/improved_capacity";
import FaculityProfile from "./sections/faculity_profile";
const FaculityForm = () => {
  const course_types = {
    bsc_course: "bsc_course",
    msc_course: "msc_course",
    phd_course: "phd_course",
  };
  const [bscCourses, setBscCourses] = useState([{ bsc: "" }]);
  const [mscCourses, setMscCourses] = useState([{ msc: "" }]);
  const [phdCourses, setPhdCourses] = useState([{ phd: "" }]);

  const formik = useFormik({
    initialValues: {
      bscDegreeEarnedName: "",
      mscDegreeEarnedName: "",
      mscDegreeEarnedThesis: "",
      phdDegreeEarnedName: "",
      pdhDegreeEarnedThesis: "",
      academicRank: "",
      chairMembership: "",
      administrativeRole: "",
      bscTutoredCourse: "",
      mscTutoredCourse: "",
      phdTutoredCourse: "",
      hdpTraining: "",
      entrepreneurshipTraining: "",
      otherTraining: "",
      higherDegreeEarned: "",
      teachingQuality: "",
      motivation: "",
      overallSatisfaction: "",
      HardCopyTeachingMaterial: "",
      eMaterialTeachingMaterial: "",
      fullCourseELearningLectures: "",
      partOfCourseELearningLectures: "",
      numberOfExcercises: "",
      labCourseSupervised: "",
      partiallyCompletedStudentAdvisedProjects: "",
      completedStudentAdvisedProjects: "",
      prototypeDevelopedStudentAdvisedProjects: "",
      partiallyCompletedPersonallyExecutedProjects: "",
      completedPersonallyExecutedProjects: "",
      prototypeDevelopedPersonallyExecutedProjects: "",
      internalResearchGrantSecured: "",
      externalResearchGrantSecured: "",
      internalAmountGrantSecured: "",
      externalAmountGrantSecured: "",
      internalPhdStudentSupervision: "",
      externalPhdStudentSupervision: "",
      internalMscStudentSupervision: "",
      externalMscStudentSupervision: "",
      nationalPublishedJornalMscStudentSupervision: "",
      internationalPublishedJornalMscStudentSupervision: "",
      nationalSubmittedJornalPaper: "",
      internationalSubmittedJornalPaper: "",
      nationalConferenceProceeding: "",
      internationalConferenceProceeding: "",
      nationalPaperPresentedOnConference: "",
      internationalPaperPresentedOnConference: "",
      internalSeminarSpeaker: "",
      externalSeminarSpeaker: "",
      faculityExchange: "",
      jointProject: "",
      noOfIndustrialists: "",
      percentageOfCourseCovered: "",
      noOfJointProjects: "",
      industryProjectIntitiated: "",
      industryProjectCompleted: "",
      noOfMentoringInternshipStudents: "",
      shortTermTraining: "",
      noOfConsultancyServiceIntitated: "",
      noOfConsultancyServiceCompleted: "",
      consultancyIncomeGenerated: "",
      mscStudentSupervisonInitiated: "",
      mscStudentSupervisonCompleted: "",
      patentedResearchOutputs: "",
      enterpriseEncubated: "",
      noOfCommunityServiceIntitated: "",
      noOfCommunityServiceCompleted: "",
      noOfBenefited: "",
    },
  });

  const handleAddElement = (srcButton) => {
    switch (srcButton) {
      case course_types.bsc_course:
        setBscCourses([...bscCourses, { bsc: "" }]);
        break;
      case course_types.msc_course:
        setMscCourses([...mscCourses, { msc: "" }]);
        break;
      case course_types.phd_course:
        setPhdCourses([...phdCourses, { phd: "" }]);
        break;
      default:
        return;
    }
  };
  const handleRemoveElement = (srcButton, index) => {
    switch (srcButton) {
      case course_types.bsc_course: {
        const list = [...bscCourses];
        list.splice(index, 1);
        setBscCourses(list);
        break;
      }
      case course_types.msc_course: {
        const list = [...mscCourses];
        list.splice(index, 1);
        setMscCourses(list);
        break;
      }
      case course_types.phd_course: {
        const list = [...phdCourses];
        list.splice(index, 1);
        setPhdCourses(list);
        break;
      }
      default:
        return;
    }
  };

  return (
    <form>
      <FaculityProfile
        academicRank={formik.values.academicRank}
        administrativeRole={formik.values.administrativeRole}
        bscDegreeEarnedName={formik.values.bscDegreeEarnedName}
        chairMembership={formik.values.chairMembership}
        mscDegreeEarnedName={formik.values.mscDegreeEarnedName}
        mscDegreeEarnedThesis={formik.values.mscDegreeEarnedThesis}
        onChangeHandler={formik.handleChange}
        phdDegreeEarnedName={formik.values.phdDegreeEarnedName}
        pdhDegreeEarnedThesis={formik.values.pdhDegreeEarnedThesis}
      />
      <Box my={2} />
      <ImprovedCapacity
        hdpTraining={formik.values.hdpTraining}
        entrepreneurshipTraining={formik.values.entrepreneurshipTraining}
        higherDegreeEarned={formik.values.higherDegreeEarned}
        onChangeHandler={formik.handleChange}
        otherTraining={formik.values.otherTraining}
      />
      <Box my={2} />
      <Section title="Course Taught">
        <Box mt={2} />
        <CourseTaught
          title="B.Sc Courses"
          courseType={course_types.bsc_course}
          courses={bscCourses}
          handleAddElement={handleAddElement}
          handleRemoveElement={handleRemoveElement}
        />
        <Box mt={2} />
        <CourseTaught
          title="M.Sc Courses"
          courseType={course_types.msc_course}
          courses={mscCourses}
          handleAddElement={handleAddElement}
          handleRemoveElement={handleRemoveElement}
        />
        <Box mt={2} />
        <CourseTaught
          title="PhD Courses"
          courseType={course_types.phd_course}
          courses={phdCourses}
          handleAddElement={handleAddElement}
          handleRemoveElement={handleRemoveElement}
        />
      </Section>
      <Box my={2} />
      <TutoredCourses
        bscTutoredCourse={formik.values.bscTutoredCourse}
        mscTutoredCourse={formik.values.mscTutoredCourse}
        phdTutoredCourse={formik.values.phdTutoredCourse}
        onChangeHandler={formik.handleChange}
      />
      <Box my={2} />
      <TeachingLearning
        formikHanleChange={formik.handleChange}
        motivation={formik.values.motivation}
        overallSatisfaction={formik.values.overallSatisfaction}
        teachingQuality={formik.values.teachingQuality}

      />
      <Box my={2} />
      <EntrepreneurialProjects />
      <Box mt={2} />
      <Research />
      <Box mt={2} />
      <Publication />
      <Box mt={2} />
      <CooperationWithUniversityAbroad />
      <Box mt={2} />
      <UniversityLinkage />
      <Box mt={2} />
      <Consultancy />
      <Box mt={2} />
      <TechnologyTransfer />
      <Box mt={2} />
      <CommunityEnagement />
      <Box mt={2} />
      <Box display="flex" justifyContent="flex-end">
        <Button variant="outlined" color="secondary">
          cancel
        </Button>
        <Box mr={2} />
        <Button type="submit" color="primary" variant="contained">
          submit
        </Button>
      </Box>
    </form>
  );
};

export default FaculityForm;
