import React from "react";
import { Box, Button } from "@material-ui/core";
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

function CenterForm() {
    const formik = useFormik({
        initialValues: {
            // evaluation type
            evaluation_type: "expected",
            semester: null,
            // academic staff
            academic_staff_technial_staff: "",
            academic_staff_assistant_lecturers: "",
            academic_staff_lecturers: "",
            academic_staff_assistant_professors: "",
            academic_staff_associate_professors: "",
            academic_staff_professors: "",
            // administrative staff
            administrative_staff_adminstrator: "",
            administrative_staff_secretaries: "",
            administrative_staff_research_staff: "",
            // chairs
            chairs_number_of_chairs: "",
            chairs_members: "",
            chairs_chairs_submitted_annual_plan: "",
            chairs_chairs_submitted_quartely_report: "",
            // programs
            programs_bsc_programs: "",
            programs_msc_programs: "",
            programs_phd_programs: "",
            // student profiles
            student_profiles_ug_students: "",
            student_profiles_msc_students: "",
            student_profiles_phd_students: "",
            // staff capacity building
            staff_capacity_building_hdp_training: "",
            staff_capacity_building_study_for_higher_degree_msc_started: "",
            staff_capacity_building_study_for_higher_degree_msc_completed: "",
            staff_capacity_building_study_for_higher_degree_phd_started: "",
            staff_capacity_building_study_for_higher_degree_phd_completed: "",
            staff_capacity_building_special_training: "",
            // teaching and learning
            teaching_learning_student_feedback_teaching_quality_rating: "",
            teaching_learning_student_student_feedback_motivation: "",
            teaching_learning_student_student_feedback_overall_satisfaction: "",
            teaching_learning_teaching_materials_hard_copy: "",
            teaching_learning_teaching_materials_e_materials: "",
            teaching_learning_e_learning_lectures_full_course: "",
            teaching_learning_e_learning_lectures_part_of_course: "",
            teaching_learning_student_education_num_of_project_teams: "",
            teaching_learning_student_education_num_of_projects: "",
            teaching_learning_student_education_num_of_tutorials: "",
            //Entrepreneurship
            entrepreneurship_courses_num_of_students: "",
            entrepreneurship_training_num_of_trainings: "",
            entrepreneurship_training_num_of_students: "",
            entrepreneurship_project_num_of_projects: "",
            entrepreneurship_project_num_of_students: "",
            entrepreneurship_motivational_programs_num_of_programs: "",
            entrepreneurship_motivational_programs_num_of_attendees: "",
            //research
            research_num_of_research_grants_applied_internal: "",
            research_num_of_research_grants_applied_external: "",
            research_amount_of_grant_secured_internal: "",
            research_amount_of_grant_secured_external: "",
            research_phd_students_supervision_enrolled: "",
            research_phd_students_supervision_completed: "",
            research_msc_students_supervision_enrolled: "",
            research_msc_students_supervision_completed: "",
            //publication
            publication_published_journal_papers_national: "",
            publication_published_journal_papers_international: "",
            publication_submitted_journal_papers_national: "",
            publication_submitted_journal_papers_international: "",
            publication_conference_proceedings_national: "",
            publication_conference_proceedings_international: "",
            publication_workshop_organized_national: "",
            publication_workshop_organized_international: "",
            publication_seminar_school_speaker: "",
            publication_seminar_external_speaker: "",
            // cooperation with university abroad
            cooperation_university_abroad_faculty_exchanges: "",
            cooperation_university_abroad_student_exchanges: "",
            cooperation_university_abroad_joint_projects: "",
            // university industry linkage
            university_industry_linkage_partnership_established_mou_signed: "",
            university_industry_linkage_partnership_established_joint_workshop:
                "",
            university_industry_linkage_industry_projects_initiated: "",
            university_industry_linkage_industry_projects_completed: "",
            // consultancy
            consultancy_short_term_training: "",
            consultancy_num_of_consulting_services_initiated: "",
            consultancy_num_of_consulting_services_completed: "",
            consultancy_consulting_income_generated: "",
            //technology transfer
            technology_transfer_tt_projects_initiated: "",
            technology_transfer_tt_projects_completed: "",
            technology_transfer_patented_research_outputs: "",
            technology_transfer_enterprise_incubated: "",
            //community engagement
            community_engagement_num_of_community_services_initiated: "",
            community_engagement_num_of_community_services_completed: "",
            community_engagement_num_of_benefited_parties: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <EvaluationType
                    onChangeHandler={formik.handleChange}
                    semester={formik.values.semester}
                    evaluation_type={formik.values.evaluation_type}
                />
                <Box mt={2} />
                <AcademicStaff
                    onChangeHandler={formik.handleChange}
                    academic_staff_technial_staff={
                        formik.values.academic_staff_technial_staff
                    }
                    academic_staff_assistant_lecturers={
                        formik.values.academic_staff_assistant_lecturers
                    }
                    academic_staff_lecturers={
                        formik.values.academic_staff_lecturers
                    }
                    academic_staff_assistant_professors={
                        formik.values.academic_staff_assistant_professors
                    }
                    academic_staff_associate_professors={
                        formik.values.academic_staff_associate_professors
                    }
                    academic_staff_professors={
                        formik.values.academic_staff_professors
                    }
                />
                <Box mt={2} />
                <AdministrativeStaff
                    onChangeHandler={formik.handleChange}
                    administrative_staff_adminstrator={
                        formik.values.administrative_staff_adminstrator
                    }
                    administrative_staff_secretaries={
                        formik.values.administrative_staff_secretaries
                    }
                    administrative_staff_research_staff={
                        formik.values.administrative_staff_research_staff
                    }
                />
                <Box mt={2} />
                <Chairs
                    onChangeHandler={formik.handleChange}
                    chairs_number_of_chairs={
                        formik.values.chairs_number_of_chairs
                    }
                    chairs_members={formik.values.chairs_members}
                    chairs_chairs_submitted_annual_plan={
                        formik.values.chairs_chairs_submitted_annual_plan
                    }
                    chairs_chairs_submitted_quartely_report={
                        formik.values.chairs_chairs_submitted_quartely_report
                    }
                />
                <Box mt={2} />
                <Programs
                    onChangeHandler={formik.handleChange}
                    programs_bsc_programs={formik.values.programs_bsc_programs}
                    programs_msc_programs={formik.values.programs_msc_programs}
                    programs_phd_programs={formik.values.programs_phd_programs}
                />
                <Box mt={2} />
                <Students
                    onChangeHandler={formik.handleChange}
                    student_profiles_ug_students={
                        formik.values.student_profiles_ug_students
                    }
                    student_profiles_msc_students={
                        formik.values.student_profiles_msc_students
                    }
                    student_profiles_phd_students={
                        formik.values.student_profiles_phd_students
                    }
                />
                <Box mt={2} />
                <StaffCapacity
                    onChangeHandler={formik.handleChange}
                    staff_capacity_building_hdp_training={
                        formik.values.staff_capacity_building_hdp_training
                    }
                    staff_capacity_building_study_for_higher_degree_msc_started={
                        formik.values
                            .staff_capacity_building_study_for_higher_degree_msc_started
                    }
                    staff_capacity_building_study_for_higher_degree_msc_completed={
                        formik.values
                            .staff_capacity_building_study_for_higher_degree_msc_completed
                    }
                    staff_capacity_building_study_for_higher_degree_phd_started={
                        formik.values
                            .staff_capacity_building_study_for_higher_degree_phd_started
                    }
                    staff_capacity_building_study_for_higher_degree_phd_completed={
                        formik.values
                            .staff_capacity_building_study_for_higher_degree_phd_completed
                    }
                    staff_capacity_building_special_training={
                        formik.values.staff_capacity_building_special_training
                    }
                />
                <Box mt={2} />
                <TeachingAndLearning
                    onChangeHandler={formik.handleChange}
                    teaching_learning_teaching_materials_hard_copy={
                        formik.values
                            .teaching_learning_teaching_materials_hard_copy
                    }
                    teaching_learning_teaching_materials_e_materials={
                        formik.values
                            .teaching_learning_teaching_materials_e_materials
                    }
                    teaching_learning_e_learning_lectures_full_course={
                        formik.values
                            .teaching_learning_e_learning_lectures_full_course
                    }
                    teaching_learning_e_learning_lectures_part_of_course={
                        formik.values
                            .teaching_learning_e_learning_lectures_part_of_course
                    }
                    teaching_learning_student_education_num_of_project_teams={
                        formik.values
                            .teaching_learning_student_education_num_of_project_teams
                    }
                    teaching_learning_student_education_num_of_projects={
                        formik.values
                            .teaching_learning_student_education_num_of_projects
                    }
                    teaching_learning_student_education_num_of_tutorials={
                        formik.values
                            .teaching_learning_student_education_num_of_tutorials
                    }
                />
                <Box my={2} />
                <Entrepreneurship
                    onChangeHandler={formik.handleChange}
                    entrepreneurship_courses_num_of_students={
                        formik.values.entrepreneurship_courses_num_of_students
                    }
                    entrepreneurship_training_num_of_trainings={
                        formik.values.entrepreneurship_training_num_of_trainings
                    }
                    entrepreneurship_training_num_of_students={
                        formik.values.entrepreneurship_training_num_of_students
                    }
                    entrepreneurship_project_num_of_projects={
                        formik.values.entrepreneurship_project_num_of_projects
                    }
                    entrepreneurship_project_num_of_students={
                        formik.values.entrepreneurship_project_num_of_students
                    }
                    entrepreneurship_motivational_programs_num_of_programs={
                        formik.values
                            .entrepreneurship_motivational_programs_num_of_programs
                    }
                    entrepreneurship_motivational_programs_num_of_attendees={
                        formik.values
                            .entrepreneurship_motivational_programs_num_of_attendees
                    }
                />
                <Box mt={2} />
                <Research
                    onChangeHandler={formik.handleChange}
                    research_num_of_research_grants_applied_internal={
                        formik.values
                            .research_num_of_research_grants_applied_internal
                    }
                    research_num_of_research_grants_applied_external={
                        formik.values
                            .research_num_of_research_grants_applied_external
                    }
                    research_amount_of_grant_secured_internal={
                        formik.values.research_amount_of_grant_secured_internal
                    }
                    research_amount_of_grant_secured_external={
                        formik.values.research_amount_of_grant_secured_external
                    }
                    research_phd_students_supervision_enrolled={
                        formik.values.research_phd_students_supervision_enrolled
                    }
                    research_phd_students_supervision_completed={
                        formik.values
                            .research_phd_students_supervision_completed
                    }
                    research_msc_students_supervision_enrolled={
                        formik.values.research_msc_students_supervision_enrolled
                    }
                    research_msc_students_supervision_completed={
                        formik.values
                            .research_msc_students_supervision_completed
                    }
                />
                <Box mt={2} />
                <Publication
                    onChangeHandler={formik.handleChange}
                    publication_published_journal_papers_national={
                        formik.values
                            .publication_published_journal_papers_national
                    }
                    publication_published_journal_papers_international={
                        formik.values
                            .publication_published_journal_papers_international
                    }
                    publication_submitted_journal_papers_national={
                        formik.values
                            .publication_submitted_journal_papers_national
                    }
                    publication_submitted_journal_papers_international={
                        formik.values
                            .publication_submitted_journal_papers_international
                    }
                    publication_conference_proceedings_national={
                        formik.values
                            .publication_conference_proceedings_national
                    }
                    publication_conference_proceedings_international={
                        formik.values
                            .publication_conference_proceedings_international
                    }
                    publication_workshop_organized_national={
                        formik.values.publication_workshop_organized_national
                    }
                    publication_workshop_organized_international={
                        formik.values
                            .publication_workshop_organized_international
                    }
                    publication_seminar_school_speaker={
                        formik.values.publication_seminar_school_speaker
                    }
                    publication_seminar_external_speaker={
                        formik.values.publication_seminar_external_speaker
                    }
                />
                <Box mt={2} />
                <CooperationWithUniversityAbroad
                    onChangeHandler={formik.handleChange}
                    cooperation_university_abroad_faculty_exchanges={
                        formik.values
                            .cooperation_university_abroad_faculty_exchanges
                    }
                    cooperation_university_abroad_student_exchanges={
                        formik.values
                            .cooperation_university_abroad_student_exchanges
                    }
                    cooperation_university_abroad_joint_projects={
                        formik.values
                            .cooperation_university_abroad_joint_projects
                    }
                />
                <Box mt={2} />
                <UniversityLinkage
                    onChangeHandler={formik.handleChange}
                    university_industry_linkage_partnership_established_mou_signed={
                        formik.values
                            .university_industry_linkage_partnership_established_mou_signed
                    }
                    university_industry_linkage_partnership_established_joint_workshop={
                        formik.values
                            .university_industry_linkage_partnership_established_joint_workshop
                    }
                    university_industry_linkage_industry_projects_initiated={
                        formik.values
                            .university_industry_linkage_industry_projects_initiated
                    }
                    university_industry_linkage_industry_projects_completed={
                        formik.values
                            .university_industry_linkage_industry_projects_completed
                    }
                />
                <Box mt={2} />
                <Consultancy
                    onChangeHandler={formik.handleChange}
                    consultancy_num_of_consulting_services_initiated={
                        formik.values
                            .consultancy_num_of_consulting_services_initiated
                    }
                    consultancy_num_of_consulting_services_completed={
                        formik.values
                            .consultancy_num_of_consulting_services_completed
                    }
                    consultancy_consulting_income_generated={
                        formik.values.consultancy_consulting_income_generated
                    }
                    consultancy_short_term_training={
                        formik.values.consultancy_short_term_training
                    }
                />
                <Box mt={2} />
                <TechnologyTransfer
                    onChangeHandler={formik.handleChange}
                    technology_transfer_tt_projects_initiated={
                        formik.values.technology_transfer_tt_projects_initiated
                    }
                    technology_transfer_tt_projects_completed={
                        formik.values.technology_transfer_tt_projects_completed
                    }
                    technology_transfer_patented_research_outputs={
                        formik.values
                            .technology_transfer_patented_research_outputs
                    }
                    technology_transfer_enterprise_incubated={
                        formik.values.technology_transfer_enterprise_incubated
                    }
                />
                <Box mt={2} />
                <CommunityEnagement
                    onChangeHandler={formik.handleChange}
                    community_engagement_num_of_community_services_initiated={
                        formik.values
                            .community_engagement_num_of_community_services_initiated
                    }
                    community_engagement_num_of_community_services_completed={
                        formik.values
                            .community_engagement_num_of_community_services_completed
                    }
                    community_engagement_num_of_benefited_parties={
                        formik.values
                            .community_engagement_num_of_benefited_parties
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

export default CenterForm;
