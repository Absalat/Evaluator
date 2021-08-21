import { TextField, Box } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const CooperationWithUniversityAbroad = ({
    onChangeHandler,
    cooperation_university_abroad_faculty_exchanges,
    cooperation_university_abroad_student_exchanges,
    cooperation_university_abroad_joint_projects,
}) => {
    return (
        <Section title="Cooperation with University abroad">
            <Box mt={2} />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Faculity exchanges"
                fullWidth
                onChange={onChangeHandler}
                name="cooperation_university_abroad_faculty_exchanges"
                value={cooperation_university_abroad_faculty_exchanges}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Student exchanges"
                fullWidth
                onChange={onChangeHandler}
                name="cooperation_university_abroad_student_exchanges"
                value={cooperation_university_abroad_student_exchanges}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Joint projects"
                fullWidth
                onChange={onChangeHandler}
                name="cooperation_university_abroad_joint_projects"
                value={cooperation_university_abroad_joint_projects}
            />
        </Section>
    );
};

export default CooperationWithUniversityAbroad;
