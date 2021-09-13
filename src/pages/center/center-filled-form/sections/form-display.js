import React, { useState, useRef, useEffect } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Snackbar,
    CircularProgress,
    makeStyles,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useReactToPrint } from "react-to-print";
import AcademicStaff from "../../center-form/sections/AcademicStaff";
import AdministrativeStaff from "../../center-form/sections/AdministrativeStaff";
import Chairs from "../../center-form/sections/Chairs";
import Programs from "../../center-form/sections/Programs";
import Students from "../../center-form/sections/Students";
import StaffCapacity from "../../center-form/sections/StaffCapacity";
import UniversityLinkage from "../../center-form/sections/UniversityLinkage";
import Consultancy from "../../center-form/sections/Consultancy";
import TechnologyTransfer from "../../center-form/sections/TechnologyTransfer";
import CommunityEnagement from "../../center-form/sections/CommunityEngagement";
import CooperationWithUniversityAbroad from "../../center-form/sections/CooperationWithUniversityAbroad";
import Publication from "../../center-form/sections/Publication";
import Research from "../../center-form/sections/Research";
import Entrepreneurship from "../../center-form/sections/Entrepreneurship";
import TeachingAndLearning from "../../center-form/sections/TeachingAndLearning";
import EvaluationType from "../../center-form/sections/modules/EvaluationType";
import { connect } from "react-redux";
import * as formActions from "../../../../store/form/actions";
import Alert from "@material-ui/lab/Alert";
import FormFooter from "./form-footer";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(2),
    },
    underline: {
        borderBottom: "1px solid",
        flexGrow: 1,
        marginLeft: "5px",
        marginRight: "5px",
    },
}));

function FormDisplay(props) {
    const classes = useStyles();
    const filledFormRef = useRef();

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
        onSubmit: (values) => {},
    });

    useEffect(() => {
        if (props.schoolEvaluation.submitSuccess) {
            const data = props.schoolEvaluation.submitSuccess;
            formik.setValues(data);
        }
    }, [props.schoolEvaluation]);

    const handlePrint = useReactToPrint({
        content: () => filledFormRef.current,
    });

    return (
        <div className={classes.wrapper}>
            <form onSubmit={formik.handleSubmit} ref={filledFormRef}>
                <EvaluationType
                    onChangeHandler={formik.handleChange}
                    semester={formik.values.semester}
                    evaluation_type={formik.values.evaluation_type}
                    disable
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
                    disable
                />
                <Box mt={2} />
                <AdministrativeStaff
                    onChangeHandler={formik.handleChange}
                    administrators={formik.values.administrators}
                    secretaries={formik.values.secretaries}
                    research_staffs={formik.values.research_staffs}
                    disable
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
                    disable
                />
                <Box mt={2} />
                <Programs
                    onChangeHandler={formik.handleChange}
                    bsc_programs={formik.values.bsc_programs}
                    msc_programs={formik.values.msc_programs}
                    phd_programs={formik.values.phd_programs}
                    disable
                />
                <Box mt={2} />
                <Students
                    onChangeHandler={formik.handleChange}
                    ug_students={formik.values.ug_students}
                    msc_students={formik.values.msc_students}
                    phd_students={formik.values.phd_students}
                    disable
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
                    disable
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
                    disable
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
                    disable
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
                    disable
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
                    disable
                />
                <Box mt={2} />
                <CooperationWithUniversityAbroad
                    onChangeHandler={formik.handleChange}
                    faculty_exchanges={formik.values.faculty_exchanges}
                    student_exchanges={formik.values.student_exchanges}
                    joint_projects={formik.values.joint_projects}
                    disable
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
                    disable
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
                    disable
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
                    disable
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
                    disable
                />
                <Box mt={2} />
                <FormFooter />
            </form>
            <Box mt={4} />
            <Box display="flex" justifyContent="flex-end">
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={handlePrint}
                >
                    Print
                </Button>
            </Box>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        schoolEvaluation: state.form.schoolEvaluation,
    };
};

export default connect(mapStateToProps, null)(FormDisplay);
