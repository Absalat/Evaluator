import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Snackbar,
    CircularProgress,
} from "@material-ui/core";
import { useFormik } from "formik";

import AcademicStaff from "./sections/AcademicStaff";
import AdministrativeStaff from "./sections/AdministrativeStaff";
import Chairs from "./sections/Chairs";
import Programs from "./sections/Programs";
import Students from "./sections/Students";
import StaffCapacity from "./sections/StaffCapacity";
import UniversityLinkage from "./sections/UniversityLinkage";
import Consultancy from "./sections/Consultancy";
import TechnologyTransfer from "./sections/TechnologyTransfer";
import CommunityEnagement from "./sections/CommunityEngagement";
import CooperationWithUniversityAbroad from "./sections/CooperationWithUniversityAbroad";
import Publication from "./sections/Publication";
import Research from "./sections/Research";
import Entrepreneurship from "./sections/Entrepreneurship";
import TeachingAndLearning from "./sections/TeachingAndLearning";
import EvaluationType from "./sections/modules/EvaluationType";
import { connect } from "react-redux";
import * as formActions from "../../../store/form/actions";
import Confirm from "../../../components/confirm/confirm";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
function CenterForm(props) {
    const [confirmDialog, setConfirmDialog] = useState({
        open: false,
    });
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            // evaluation type
            evaluation_type: "expected",
            semester: null,
            // academic staff
            technical_staffs: "0",
            technical_staffs: "0",
            lecturers: "0",
            asst_profesors: "0",
            assoc_professors: "0",
            profesors: "0",
            // administrative staff
            administrators: "0",
            secretaries: "0",
            research_staffs: "0",
            // chairs
            num_of_chairs: "0",
            members_chair: "0",
            chairs_submitted_annual_plan: "0",
            chairs_submitted_quarterly_report: "0",
            // programs
            bsc_programs: "0",
            msc_programs: "0",
            phd_programs: "0",
            // student profiles
            ug_students: "0",
            msc_students: "0",
            phd_students: "0",
            // staff capacity building
            hdp_training: "0",
            msc_started: "0",
            msc_completed: "0",
            phd_started: "0",
            phd_completed: "0",
            special_training: "0",
            // teaching and learning
            student_feedback_teaching_quality: "1",
            student_feedback_motivation: "1",
            student_feedback_overall_satisfaction: "1",
            teaching_materials_hard_copy: "0",
            teaching_materials_soft_copy: "0",
            e_learning_lectures_full_course: "0",
            e_learning_lectures_part_of_course: "0",

            sert_num_of_project_teams: "0",
            sert_num_of_projects: "0",
            sert_num_of_tutorials: "0",
            //Entrepreneurship
            courses_num_of_students: "0",
            training_num_of_trainings: "0",
            training_num_of_students: "0",
            project_num_of_projects: "0",
            project_num_of_students: "0",
            num_of_motivational_programs: "0",
            num_of_motivational_program_atendees: "0",
            //research
            num_of_research_grant_applied_internal: "0",
            num_of_research_grant_applied_external: "0",
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
            conference_workshop_organized_national: "0",
            conference_workshop_organized_international: "0",
            seminar_school_speaker: "0",
            seminar_external_speaker: "0",
            // cooperation with university abroad
            faculty_exchanges: "0",
            student_exchanges: "0",
            joint_projects: "0",
            // university industry linkage
            partnership_established_mou_signed: "0",
            partnership_established_joint_workshops: "0",
            industry_projects_initiated: "0",
            industry_projects_completed: "0",
            // consultancy
            short_term_training: "0",
            num_of_consulting_services_initiated: "0",
            num_of_consulting_services_completed: "0",
            consulting_income_generated: "0",
            //technology transfer
            it_projects_initiated: "0",
            it_projects_completed: "0",
            patented_research_outputs: "0",
            enterprise_incubated: "0",
            //community engagement
            num_of_community_services_initiated: "0",
            num_of_community_services_completed: "0",
            num_of_benefited_parties: "0",
        },
        onSubmit: (values) => {
            setConfirmDialog({
                open: true,
                title: "Are you sure sure ?",
                message:
                    "Are you sure you want to submit this form ? This action is irreversible.",
                onConfirm: () => {
                    props.submitSchoolEvaluation(values);
                },
            });
        },
    });

    useEffect(() => {
        if (props.schoolEvaluation.submitSuccess) {
            //redirect to the success view page.
            history.push("/center/self-evaluation/view");
        }
    }, [props.schoolEvaluation]);

    return (
        <>
            <Confirm
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
            <Snackbar
                autoHideDuration={1000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={props.schoolEvaluation.submitSuccess}
                onClose={props.resetSubmitSchoolEvaluation}
            >
                <Alert severity="success">
                    {props.schoolEvaluation.submitSuccess}
                </Alert>
            </Snackbar>
            <Snackbar
                autoHideDuration={1000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={props.schoolEvaluation.error}
                onClose={props.resetSubmitSchoolEvaluation}
            >
                <Alert severity="error">{props.schoolEvaluation.error}</Alert>
            </Snackbar>
            <Dialog open={props.schoolEvaluation.isLoading}>
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
                <Box mt={2} />
                <AcademicStaff
                    onChangeHandler={formik.handleChange}
                    technical_staffs={formik.values.technical_staffs}
                    asst_lecturers={formik.values.asst_lecturers}
                    lecturers={formik.values.lecturers}
                    asst_profesors={formik.values.asst_profesors}
                    assoc_professors={formik.values.assoc_professors}
                    profesors={formik.values.profesors}
                />
                <Box mt={2} />
                <AdministrativeStaff
                    onChangeHandler={formik.handleChange}
                    administrators={formik.values.administrators}
                    secretaries={formik.values.secretaries}
                    research_staffs={formik.values.research_staffs}
                />
                <Box mt={2} />
                <Chairs
                    onChangeHandler={formik.handleChange}
                    num_of_chairs={formik.values.num_of_chairs}
                    members_chair={formik.values.members_chair}
                    chairs_submitted_annual_plan={
                        formik.values.chairs_submitted_annual_plan
                    }
                    chairs_submitted_quarterly_report={
                        formik.values.chairs_submitted_quarterly_report
                    }
                />
                <Box mt={2} />
                <Programs
                    onChangeHandler={formik.handleChange}
                    bsc_programs={formik.values.bsc_programs}
                    msc_programs={formik.values.msc_programs}
                    phd_programs={formik.values.phd_programs}
                />
                <Box mt={2} />
                <Students
                    onChangeHandler={formik.handleChange}
                    ug_students={formik.values.ug_students}
                    msc_students={formik.values.msc_students}
                    phd_students={formik.values.phd_students}
                />
                <Box mt={2} />
                <StaffCapacity
                    onChangeHandler={formik.handleChange}
                    hdp_training={formik.values.hdp_training}
                    msc_started={formik.values.msc_started}
                    msc_completed={formik.values.msc_completed}
                    phd_started={formik.values.phd_started}
                    phd_completed={formik.values.phd_completed}
                    special_training={formik.values.special_training}
                />
                <Box mt={2} />
                <TeachingAndLearning
                    onChangeHandler={formik.handleChange}
                    student_feedback_teaching_quality={
                        formik.values.student_feedback_teaching_quality
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
                    e_learning_lectures_full_course={
                        formik.values.e_learning_lectures_full_course
                    }
                    sert_num_of_project_teams={
                        formik.values.sert_num_of_project_teams
                    }
                    sert_num_of_projects={formik.values.sert_num_of_projects}
                    sert_num_of_tutorials={formik.values.sert_num_of_tutorials}
                />
                <Box my={2} />
                <Entrepreneurship
                    onChangeHandler={formik.handleChange}
                    courses_num_of_students={
                        formik.values.courses_num_of_students
                    }
                    training_num_of_trainings={
                        formik.values.training_num_of_trainings
                    }
                    training_num_of_students={
                        formik.values.training_num_of_students
                    }
                    project_num_of_projects={
                        formik.values.project_num_of_projects
                    }
                    project_num_of_students={
                        formik.values.project_num_of_students
                    }
                    num_of_motivational_programs={
                        formik.values.num_of_motivational_programs
                    }
                    num_of_motivational_program_atendees={
                        formik.values.num_of_motivational_program_atendees
                    }
                />
                <Box mt={2} />
                <Research
                    onChangeHandler={formik.handleChange}
                    num_of_research_grant_applied_internal={
                        formik.values.num_of_research_grant_applied_internal
                    }
                    num_of_research_grant_applied_external={
                        formik.values.num_of_research_grant_applied_external
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
                    conference_workshop_organized_national={
                        formik.values.conference_workshop_organized_national
                    }
                    conference_workshop_organized_international={
                        formik.values
                            .conference_workshop_organized_international
                    }
                    seminar_school_speaker={
                        formik.values.seminar_school_speaker
                    }
                    seminar_external_speaker={
                        formik.values.seminar_external_speaker
                    }
                />
                <Box mt={2} />
                <CooperationWithUniversityAbroad
                    onChangeHandler={formik.handleChange}
                    faculty_exchanges={formik.values.faculty_exchanges}
                    student_exchanges={formik.values.student_exchanges}
                    joint_projects={formik.values.joint_projects}
                />
                <Box mt={2} />
                <UniversityLinkage
                    onChangeHandler={formik.handleChange}
                    partnership_established_mou_signed={
                        formik.values.partnership_established_mou_signed
                    }
                    partnership_established_joint_workshops={
                        formik.values.partnership_established_joint_workshops
                    }
                    industry_projects_initiated={
                        formik.values.industry_projects_initiated
                    }
                    industry_projects_completed={
                        formik.values.industry_projects_completed
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
                    patented_research_outputs={
                        formik.values.patented_research_outputs
                    }
                    enterprise_incubated={formik.values.enterprise_incubated}
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
                    num_of_benefited_parties={
                        formik.values.num_of_benefited_parties
                    }
                />
                <Box mt={2} />
                <Box display="flex" justifyContent="flex-end">
                    <Button type="submit" color="primary" variant="contained">
                        Submit
                    </Button>
                </Box>
            </form>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        schoolEvaluation: state.form.schoolEvaluation,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitSchoolEvaluation: (evaluation) =>
            dispatch(formActions.submitSchoolEvaluation(evaluation)),
        resetSubmitSchoolEvaluation: () =>
            dispatch(formActions.resetSubmitSchoolEvaluation()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CenterForm);
