import {
    Box,
    Button,
    Snackbar,
    Dialog,
    DialogContent,
    CircularProgress,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import EvaluationType from "../../../components/evaluation-type/evaluation_type";
import ChairProfile from "./sections/chair-profile";
import CommunityEngagement from "./sections/community-engagement";
import Consultancy from "./sections/consultancy";
import CooperationWithUniversityAbroad from "./sections/cooperation-with-university-abroad";
import Publication from "./sections/publication";
import Research from "./sections/research";
import StaffCapacityBuilding from "./sections/staff-capacity-building";
import TeachingAndLearning from "./sections/teaching-and-learning";
import TechnologyTransfer from "./sections/technology-transfer";
import UniversityIndustryLinkage from "./sections/university-industy-linkage";
import { connect } from "react-redux";
import * as formActions from "../../../store/form/actions";
import Alert from "@material-ui/lab/Alert";
import Confirm from "../../../components/confirm/confirm";
import { useHistory } from "react-router-dom";
const ChairForm = (props) => {
    const [confirmDialog, setConfirmDialog] = useState({
        open: false,
    });
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            //chair profile
            num_of_technical_staff: "0",
            num_of_bsc_holders: "0",
            num_of_msc_holders: "0",
            num_of_phd_holders: "0",
            num_of_asst_professors: "0",
            num_of_assoc_professors: "0",
            num_of_full_professors: "0",
            //staff capacity building
            hdp_training: "no",
            higher_degree_study_started: "no",
            higher_degree_study_completed: "no",
            special_training_started: "no",
            special_training_completed: "no",
            //teaching and learning
            student_feedback_teaching_quality: "0",
            student_feedback_teaching_motivation: "0",
            student_feedback_overall_satisfaction: "0",
            teaching_materials_hard_copy: "0",
            teaching_materials_soft_copy: "0",
            e_learning_lectures_full_course: "0",
            e_learning_lectures_part_of_course: "0",
            //research
            num_of_research_grant_applied_internal: "0",
            num_of_research_grant_applied_external: "0",
            amount_of_grant_secured_internal: "0",
            amount_of_grant_secured_external: "0",
            phd_students_supervision_enrolled: "0",
            phd_students_supervision_completed: "0",
            msc_students_supervision_enrolled: "0",
            msc_students_supervision_completed: "0",
            msc_students_supervision_manuscripts_produced: "0",
            //publication
            published_journal_papers_national: "0",
            published_journal_papers_international: "0",
            submitted_journal_papers_national: "0",
            submitted_journal_papers_international: "0",
            conference_proceedings_national: "0",
            conference_proceedings_international: "0",
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
            num_of_consulting_services_initiated: "0",
            num_of_consulting_services_completed: "0",
            consulting_income_generated: "0",
            // technology transfer
            it_projects_initiated: "0",
            it_projects_completed: "0",
            patented_research_outputs: "0",
            // community engagement
            num_of_community_services_initiated: "0",
            num_of_community_services_completed: "0",
            num_of_benefited_parties: "0",
            //
            evaluation_type: "expected",
            semester: null,
        },
        onSubmit: (values) => {
            setConfirmDialog({
                open: true,
                title: "Are you sure ?",
                message:
                    "Are you sure you want to submit this evaluation? This action is not reverable. ",
                onConfirm: () => {
                    props.submitChairSelfEvaluation(values);
                    history.push("/chair/self-evaluation/view");
                },
            });
        },
    });
    return (
        <>
            <Confirm
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
            <form onSubmit={formik.handleSubmit}>
                <Snackbar
                    autoHideDuration={1000}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={props.chairSelfEvaluation.submitSuccess}
                    onClose={props.resetChairSelfEvaluation}
                >
                    <Alert severity="success">
                        {props.chairSelfEvaluation.submitSuccess}
                    </Alert>
                </Snackbar>
                <Snackbar
                    autoHideDuration={1000}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={props.chairSelfEvaluation.error}
                    onClose={props.resetChairSelfEvaluation}
                >
                    <Alert severity="error">
                        {props.chairSelfEvaluation.error}
                    </Alert>
                </Snackbar>
                <Dialog open={props.chairSelfEvaluation.isLoading}>
                    <DialogContent>
                        <CircularProgress disableShrink />
                    </DialogContent>
                </Dialog>
                <EvaluationType
                    onChangeHandler={formik.handleChange}
                    semester={formik.values.semester}
                    evaluation_type={formik.values.evaluation_type}
                />
                <Box mt={2} />
                <ChairProfile
                    onChangeHandler={formik.handleChange}
                    num_of_technical_staff={
                        formik.values.num_of_technical_staff
                    }
                    num_of_bsc_holders={formik.values.num_of_bsc_holders}
                    num_of_msc_holders={formik.values.num_of_msc_holders}
                    num_of_phd_holders={formik.values.num_of_phd_holders}
                    num_of_asst_professors={
                        formik.values.num_of_asst_professors
                    }
                    num_of_assoc_professors={
                        formik.values.num_of_assoc_professors
                    }
                    num_of_full_professors={
                        formik.values.num_of_full_professors
                    }
                />
                <Box mt={2} />
                <StaffCapacityBuilding
                    onChangeHandler={formik.handleChange}
                    hdp_training={formik.values.hdp_training}
                    higher_degree_study_started={
                        formik.values.higher_degree_study_started
                    }
                    higher_degree_study_completed={
                        formik.values.higher_degree_study_completed
                    }
                    special_training_started={
                        formik.values.special_training_started
                    }
                    special_training_completed={
                        formik.values.special_training_completed
                    }
                />
                <Box mt={2} />
                <TeachingAndLearning
                    onChangeHandler={formik.handleChange}
                    student_feedback_teaching_quality={
                        formik.values.student_feedback_teaching_quality
                    }
                    student_feedback_teaching_motivation={
                        formik.values.student_feedback_teaching_motivation
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
                    msc_students_supervision_manuscripts_produced={
                        formik.values
                            .msc_students_supervision_manuscripts_produced
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
                />
                <Box mt={2} />
                <CooperationWithUniversityAbroad
                    onChangeHandler={formik.handleChange}
                    faculty_exchanges={formik.values.faculty_exchanges}
                    student_exchanges={formik.values.student_exchanges}
                    joint_projects={formik.values.joint_projects}
                />
                <Box mt={2} />
                <UniversityIndustryLinkage
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
                />
                <Box mt={2} />
                <TechnologyTransfer
                    onChangeHandler={formik.handleChange}
                    it_projects_initiated={formik.values.it_projects_initiated}
                    it_projects_completed={formik.values.it_projects_completed}
                    patented_research_outputs={
                        formik.values.patented_research_outputs
                    }
                />
                <Box mt={2} />
                <CommunityEngagement
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
                        submit
                    </Button>
                </Box>
            </form>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        chairSelfEvaluation: state.form.chairSelfEvaluation,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitChairSelfEvaluation: (evaluation) =>
            dispatch(formActions.submitChairSelfEvaluation(evaluation)),
        resetChairSelfEvaluation: () =>
            dispatch(formActions.resetSubmitChairSelfEvaluation()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChairForm);
