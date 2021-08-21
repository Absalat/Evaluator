import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Snackbar,
} from "@material-ui/core";
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
import Section from "../../../components/section/section";
import ImprovedCapacity from "./sections/improved_capacity";
import EvaluationType from "../../../components/evaluation-type/evaluation_type";
import { connect } from "react-redux";
import * as faculityFormAction from "../../../store/form/actions";
import Alert from "@material-ui/lab/Alert";
import Confirm from "../../../components/confirm/confirm";
const FaculityForm = (props) => {
  const [confirmDialog, setConfirmDialog] = useState({
    open: false,
  });
  const course_types = {
    bsc_course: "bsc_course",
    msc_course: "msc_course",
    phd_course: "phd_course",
  };
  const [tought_bsc_courses, setTought_bsc_courses] = useState([
    { course_code: "", course_name: "" },
  ]);
  const [tought_msc_courses, setTought_msc_courses] = useState([
    { course_code: "", course_name: "" },
  ]);
  const [tought_phd_courses, setTought_phd_courses] = useState([
    { course_code: "", course_name: "" },
  ]);

  const formik = useFormik({
    initialValues: {
      hdp_training: "no",
      higher_degree_earned: "bsc",
      entrepreneurship_training: "no",
      other_trainings_skills_gained: "no",
      // tutored courses
      tutored_bsc_courses: "0",
      tutored_msc_courses: "0",
      tutored_phd_courses: "0",
      // teaching and learning
      student_feedback_teaching_quality_rating: "0",
      student_feedback_motivation: "0",
      student_feedback_overall_satisfaction: "0",
      teaching_materials_hard_copy: "0",
      teaching_materials_soft_copy: "0",
      e_learning_lectures_full_course: "0",
      e_learning_lectures_part_of_course: "0",
      tutorial_exercises_num_of_exercises: "0",
      laboratory_courses_supervised: "0",
      //Entrepreneurial projects
      bsc_msc_student_advised_partially_done: "0",
      bsc_msc_student_advised_completed: "0",
      bsc_msc_student_advised_prototype_developed: "0",
      personally_executed_partially_done: "0",
      personally_executed_completed: "0",
      personally_executed_prototype_developed: "0",
      //research
      num_of_research_grants_applied_internal: "0",
      num_of_research_grants_applied_external: "0",
      amount_of_grant_secured_internal: "0",
      amount_of_grant_secured_external: "0",
      phd_students_supervision_enrolled: "0",
      phd_students_supervision_completed: "0",
      msc_students_supervision_enrolled: "0",
      msc_students_supervision_completed: "0",
      //publication
      published_journal_papers_national: "0",
      published_journal_papers_international: "0",
      submitted_journal_papers_national: "0",
      submitted_journal_papers_international: "0",
      conference_proceedings_national: "0",
      conference_proceedings_international: "0",
      paper_presented_on_conference_national: "0",
      paper_presented_on_conference_international: "0",
      seminar_speaker_internal: "0",
      seminar_speaker_external: "0",
      // cooperation with university abroad
      faculty_exchange: "0",
      joint_projects: "0",
      // university industry linkage
      invited_industrialists_number: "0",
      invited_industrialists_percent_course_covered: "0",
      invited_industrialists_num_of_joint_projects: "0",
      industry_projects_initiated: "0",
      industry_projects_completed: "0",
      mentoring_internship_students_number: "0",
      // consultancy
      num_of_consulting_services_initiated: "0",
      num_of_consulting_services_completed: "0",
      consulting_income_generated: "0",
      short_term_training: "0",
      //technology transfer
      it_projects_initiated: "0",
      it_projects_completed: "0",
      patented_research_outputs: "0",
      enterprise_encubated: "0",
      //community enagagement
      num_of_community_services_initiated: "0",
      num_of_community_services_completed: "0",
      num_of_benefited_parties: "0",
      //
      evaluation_type: "expected",
      semester: null,
    },
    onSubmit: (values) => {
      values.tought_bsc_courses = tought_bsc_courses;
      values.tought_msc_courses = tought_msc_courses;
      values.tought_phd_courses = tought_phd_courses;
      setConfirmDialog({
        open: true,
        title: "Are you sure ?",
        message:
          "Are you sure you want to submit this evaluation? This action is not reverable. ",
        onConfirm: () => {
          props.submitFaculitySelfEvaluation(values);
        },
      });
    },
  });

  const handleOnChange = (e, srcButton, index) => {
    switch (srcButton) {
      case course_types.bsc_course: {
        const list = [...tought_bsc_courses];
        list[index][e.target.name] = e.target.value;
        setTought_bsc_courses(list);
        break;
      }
      case course_types.msc_course: {
        const list = [...tought_msc_courses];
        list[index][e.target.name] = e.target.value;
        setTought_msc_courses(list);
        break;
      }
      case course_types.phd_course: {
        const list = [...tought_phd_courses];
        list[index][e.target.name] = e.target.value;
        setTought_phd_courses(list);
        break;
      }
      default:
        return;
    }
  };

  const handleAddElement = (srcButton) => {
    switch (srcButton) {
      case course_types.bsc_course:
        setTought_bsc_courses([
          ...tought_bsc_courses,
          { course_code: "", course_name: "" },
        ]);
        break;
      case course_types.msc_course:
        setTought_msc_courses([
          ...tought_msc_courses,
          { course_code: "", course_name: "" },
        ]);
        break;
      case course_types.phd_course:
        setTought_phd_courses([
          ...tought_phd_courses,
          { course_code: "", course_name: "" },
        ]);
        break;
      default:
        return;
    }
  };
  const handleRemoveElement = (srcButton, index) => {
    switch (srcButton) {
      case course_types.bsc_course: {
        const list = [...tought_bsc_courses];
        list.splice(index, 1);
        setTought_bsc_courses(list);
        break;
      }
      case course_types.msc_course: {
        const list = [...tought_msc_courses];
        list.splice(index, 1);
        setTought_msc_courses(list);
        break;
      }
      case course_types.phd_course: {
        const list = [...tought_phd_courses];
        list.splice(index, 1);
        setTought_phd_courses(list);
        break;
      }
      default:
        return;
    }
  };
  useEffect(() => {
    return () => {
      props.resetSubmitFaculitySelfEvaluation();
    };
  }, []);
  return (
    <div>
      <Confirm
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.faculitySelfEvaludation.submitSuccess}
      >
        <Alert severity="success">
          faculity self-evaluation submitted successfully !
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.faculitySelfEvaludation.error}
      >
        <Alert severity="error">{props.faculitySelfEvaludation.error}</Alert>
      </Snackbar>
      <Dialog open={props.faculitySelfEvaludation.isLoading}>
        <DialogContent>
          <CircularProgress disableShrink />
        </DialogContent>
      </Dialog>
      <form onSubmit={formik.handleSubmit}>
        <EvaluationType
          onChangeHandler={formik.handleChange}
          semester={formik.values.semester}
          evaluation_type={formik.values.evaluation_type}
        />
        <Box my={2} />
        <ImprovedCapacity
          hdp_training={formik.values.hdp_training}
          entrepreneurship_training={formik.values.entrepreneurship_training}
          higher_degree_earned={formik.values.higher_degree_earned}
          onChangeHandler={formik.handleChange}
          other_trainings_skills_gained={
            formik.values.other_trainings_skills_gained
          }
        />
        <Box my={2} />
        <Section title="Course Taught">
          <Box mt={2} />
          <CourseTaught
            title="B.Sc Courses"
            courseType={course_types.bsc_course}
            courses={tought_bsc_courses}
            handleAddElement={handleAddElement}
            handleRemoveElement={handleRemoveElement}
            handleOnChange={handleOnChange}
          />
          <Box mt={2} />
          <CourseTaught
            title="M.Sc Courses"
            courseType={course_types.msc_course}
            courses={tought_msc_courses}
            handleAddElement={handleAddElement}
            handleRemoveElement={handleRemoveElement}
            handleOnChange={handleOnChange}
          />
          <Box mt={2} />
          <CourseTaught
            title="PhD Courses"
            courseType={course_types.phd_course}
            courses={tought_phd_courses}
            handleAddElement={handleAddElement}
            handleRemoveElement={handleRemoveElement}
            handleOnChange={handleOnChange}
          />
        </Section>
        <Box my={2} />
        <TutoredCourses
          tutored_bsc_courses={formik.values.tutored_bsc_courses}
          tutored_msc_courses={formik.values.tutored_msc_courses}
          tutored_phd_courses={formik.values.tutored_phd_courses}
          onChangeHandler={formik.handleChange}
        />
        <Box my={2} />
        <TeachingLearning
          onChangeHandler={formik.handleChange}
          student_feedback_teaching_quality_rating={
            formik.values.student_feedback_teaching_quality_rating
          }
          student_feedback_motivation={
            formik.values.student_feedback_motivation
          }
          student_feedback_overall_satisfaction={
            formik.values.student_feedback_overall_satisfaction
          }
          teaching_materials_hard_copy={
            formik.values.teaching_materials_hard_copy
          }
          teaching_materials_soft_copy={
            formik.values.teaching_materials_soft_copy
          }
          e_learning_lectures_full_course={
            formik.values.e_learning_lectures_full_course
          }
          e_learning_lectures_part_of_course={
            formik.values.e_learning_lectures_part_of_course
          }
          tutorial_exercises_num_of_exercises={
            formik.values.tutorial_exercises_num_of_exercises
          }
          laboratory_courses_supervised={
            formik.values.laboratory_courses_supervised
          }
        />
        <Box my={2} />
        <EntrepreneurialProjects
          onChangeHandler={formik.handleChange}
          bsc_msc_student_advised_partially_done={
            formik.values.bsc_msc_student_advised_partially_done
          }
          bsc_msc_student_advised_completed={
            formik.values.bsc_msc_student_advised_completed
          }
          bsc_msc_student_advised_prototype_developed={
            formik.values.bsc_msc_student_advised_prototype_developed
          }
          personally_executed_partially_done={
            formik.values.personally_executed_partially_done
          }
          personally_executed_completed={
            formik.values.personally_executed_completed
          }
          personally_executed_prototype_developed={
            formik.values.personally_executed_prototype_developed
          }
        />
        <Box mt={2} />
        <Research
          onChangeHandler={formik.handleChange}
          num_of_research_grants_applied_internal={
            formik.values.num_of_research_grants_applied_internal
          }
          num_of_research_grants_applied_external={
            formik.values.num_of_research_grants_applied_external
          }
          amount_of_grant_secured_internal={
            formik.values.amount_of_grant_secured_internal
          }
          amount_of_grant_secured_external={
            formik.values.amount_of_grant_secured_external
          }
          phd_students_supervision_enrolled={
            formik.values.phd_students_supervision_enrolled
          }
          phd_students_supervision_completed={
            formik.values.phd_students_supervision_completed
          }
          msc_students_supervision_enrolled={
            formik.values.msc_students_supervision_enrolled
          }
          msc_students_supervision_completed={
            formik.values.msc_students_supervision_completed
          }
        />
        <Box mt={2} />
        <Publication
          onChangeHandler={formik.handleChange}
          published_journal_papers_national={
            formik.values.published_journal_papers_national
          }
          published_journal_papers_international={
            formik.values.published_journal_papers_international
          }
          submitted_journal_papers_national={
            formik.values.submitted_journal_papers_national
          }
          submitted_journal_papers_international={
            formik.values.submitted_journal_papers_international
          }
          conference_proceedings_national={
            formik.values.conference_proceedings_national
          }
          conference_proceedings_international={
            formik.values.conference_proceedings_international
          }
          paper_presented_on_conference_national={
            formik.values.paper_presented_on_conference_national
          }
          paper_presented_on_conference_international={
            formik.values.paper_presented_on_conference_international
          }
          seminar_speaker_internal={formik.values.seminar_speaker_internal}
          seminar_speaker_external={formik.values.seminar_speaker_external}
        />
        <Box mt={2} />
        <CooperationWithUniversityAbroad
          onChangeHandler={formik.handleChange}
          faculty_exchange={formik.values.faculty_exchange}
          joint_projects={formik.values.joint_projects}
        />
        <Box mt={2} />
        <UniversityLinkage
          onChangeHandler={formik.handleChange}
          invited_industrialists_number={
            formik.values.invited_industrialists_number
          }
          invited_industrialists_percent_course_covered={
            formik.values.invited_industrialists_percent_course_covered
          }
          invited_industrialists_num_of_joint_projects={
            formik.values.invited_industrialists_num_of_joint_projects
          }
          industry_projects_initiated={
            formik.values.industry_projects_initiated
          }
          industry_projects_completed={
            formik.values.industry_projects_completed
          }
          mentoring_internship_students_number={
            formik.values.mentoring_internship_students_number
          }
        />
        <Box mt={2} />
        <Consultancy
          onChangeHandler={formik.handleChange}
          num_of_consulting_services_initiated={
            formik.values.num_of_consulting_services_initiated
          }
          num_of_consulting_services_completed={
            formik.values.num_of_consulting_services_completed
          }
          consulting_income_generated={
            formik.values.consulting_income_generated
          }
          short_term_training={formik.values.short_term_training}
        />
        <Box mt={2} />
        <TechnologyTransfer
          onChangeHandler={formik.handleChange}
          it_projects_initiated={formik.values.it_projects_initiated}
          it_projects_completed={formik.values.it_projects_completed}
          patented_research_outputs={formik.values.patented_research_outputs}
          enterprise_encubated={formik.values.enterprise_encubated}
        />
        <Box mt={2} />
        <CommunityEnagement
          onChangeHandler={formik.handleChange}
          num_of_community_services_initiated={
            formik.values.num_of_community_services_initiated
          }
          num_of_community_services_completed={
            formik.values.num_of_community_services_completed
          }
          num_of_benefited_parties={formik.values.num_of_benefited_parties}
        />
        <Box mt={2} />
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" color="primary" variant="contained">
            submit
          </Button>
        </Box>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    faculitySelfEvaludation: state.form.faculitySelfEvaludation,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitFaculitySelfEvaluation: (evaluation) =>
      dispatch(faculityFormAction.submitFaculitySelfEvaluation(evaluation)),
    resetSubmitFaculitySelfEvaluation: () =>
      dispatch(faculityFormAction.resetSubmitFaculitySelfEvaluation()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FaculityForm);
