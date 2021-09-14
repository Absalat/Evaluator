import React, { useEffect, useState } from "react";
import {
    Container,
    Box,
    makeStyles,
    Typography,
    Table,
    TableRow,
    TableCell,
} from "@material-ui/core";
import { useHistory } from "react-router";
import EvaluationType from "../../../components/evaluation-type/evaluation_type";
import ImprovedCapacity from "../faculity-form/sections/improved_capacity";
import CourseTaught from "../faculity-form/components/course_taught";
import TutoredCourses from "../faculity-form/sections/tutored_courses";
import TeachingLearning from "../faculity-form/sections/teaching_learning";
import EntrepreneurialProjects from "../faculity-form/sections/entrepneurial_projects";
import Research from "../faculity-form/sections/research";
import Publication from "../faculity-form/sections/publication";
import CooperationWithUniversityAbroad from "../faculity-form/sections/cooperation_with_university_abroad";
import UniversityLinkage from "../faculity-form/sections/university_linkage";
import Consultancy from "../faculity-form/sections/consultancy";
import TechnologyTransfer from "../faculity-form/sections/technoloy_transfer";
import CommunityEnagement from "../faculity-form/sections/community_engagement";
import { useFormik } from "formik";
import Section from "../../../components/section/section";
import { connect } from "react-redux";

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

const FacultyFilledForm = (props) => {
    const history = useHistory();
    const classes = useStyles();

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
        if (props.faculitySelfEvaludation.submitSuccess) {
            const data = props.faculitySelfEvaludation.submitSuccess;
            formik.setValues(data);
            setTought_bsc_courses(data.tought_bsc_courses);
            setTought_msc_courses(data.tought_msc_courses);
            setTought_phd_courses(data.tought_msc_courses);
        }
    }, [props.faculitySelfEvaludation]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.wrapper}>
            <form onSubmit={formik.handleSubmit}>
                <EvaluationType
                    disable
                    onChangeHandler={formik.handleChange}
                    semester={formik.values.semester}
                    evaluation_type={formik.values.evaluation_type}
                />
                <Box my={2} />
                <ImprovedCapacity
                    disable
                    hdp_training={formik.values.hdp_training}
                    entrepreneurship_training={
                        formik.values.entrepreneurship_training
                    }
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
                        disable
                        title="B.Sc Courses"
                        courseType={course_types.bsc_course}
                        courses={tought_bsc_courses}
                        handleAddElement={handleAddElement}
                        handleRemoveElement={handleRemoveElement}
                        handleOnChange={handleOnChange}
                    />
                    <Box mt={2} />
                    <CourseTaught
                        disable
                        title="M.Sc Courses"
                        courseType={course_types.msc_course}
                        courses={tought_msc_courses}
                        handleAddElement={handleAddElement}
                        handleRemoveElement={handleRemoveElement}
                        handleOnChange={handleOnChange}
                    />
                    <Box mt={2} />
                    <CourseTaught
                        disable
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
                    disable
                    tutored_bsc_courses={formik.values.tutored_bsc_courses}
                    tutored_msc_courses={formik.values.tutored_msc_courses}
                    tutored_phd_courses={formik.values.tutored_phd_courses}
                    onChangeHandler={formik.handleChange}
                />
                <Box my={2} />
                <TeachingLearning
                    disable
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
                    disable
                    onChangeHandler={formik.handleChange}
                    bsc_msc_student_advised_partially_done={
                        formik.values.bsc_msc_student_advised_partially_done
                    }
                    bsc_msc_student_advised_completed={
                        formik.values.bsc_msc_student_advised_completed
                    }
                    bsc_msc_student_advised_prototype_developed={
                        formik.values
                            .bsc_msc_student_advised_prototype_developed
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
                    disable
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
                    disable
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
                        formik.values
                            .paper_presented_on_conference_international
                    }
                    seminar_speaker_internal={
                        formik.values.seminar_speaker_internal
                    }
                    seminar_speaker_external={
                        formik.values.seminar_speaker_external
                    }
                />
                <Box mt={2} />
                <CooperationWithUniversityAbroad
                    onChangeHandler={formik.handleChange}
                    faculty_exchange={formik.values.faculty_exchange}
                    joint_projects={formik.values.joint_projects}
                    disable
                />
                <Box mt={2} />
                <UniversityLinkage
                    disable
                    onChangeHandler={formik.handleChange}
                    invited_industrialists_number={
                        formik.values.invited_industrialists_number
                    }
                    invited_industrialists_percent_course_covered={
                        formik.values
                            .invited_industrialists_percent_course_covered
                    }
                    invited_industrialists_num_of_joint_projects={
                        formik.values
                            .invited_industrialists_num_of_joint_projects
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
                    disable
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
                    enterprise_encubated={formik.values.enterprise_encubated}
                    disable
                />
                <Box mt={2} />
                <CommunityEnagement
                    disable
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
                <Table>
                    <TableRow>
                        <TableCell>
                            <Typography>Prepared By</Typography>
                        </TableCell>
                        <TableCell>
                            <Box display="flex">
                                <Typography>Name of faculty</Typography>
                                <Box className={classes.underline} />
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box display="flex">
                                <Typography>Date</Typography>
                                <Box className={classes.underline} />
                            </Box>
                            <Box display="flex">
                                <Typography>Signature</Typography>
                                <Box className={classes.underline} />
                            </Box>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography>Checkeds By</Typography>
                        </TableCell>
                        <TableCell>
                            <Box display="flex">
                                <Typography>Chair Heads</Typography>
                                <Box className={classes.underline} />
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box display="flex">
                                <Typography>Date</Typography>
                                <Box className={classes.underline} />
                            </Box>
                            <Box display="flex">
                                <Typography>Signature</Typography>
                                <Box className={classes.underline} />
                            </Box>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography>Approved By</Typography>
                        </TableCell>
                        <TableCell>
                            <Box display="flex">
                                <Typography>Dean/Heads</Typography>
                                <Box className={classes.underline} />
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box display="flex">
                                <Typography>Date</Typography>
                                <Box className={classes.underline} />
                            </Box>
                            <Box display="flex">
                                <Typography>Signature</Typography>
                                <Box className={classes.underline} />
                            </Box>
                        </TableCell>
                    </TableRow>
                </Table>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        faculitySelfEvaludation: state.form.faculitySelfEvaludation,
    };
};
export default connect(mapStateToProps)(FacultyFilledForm);
