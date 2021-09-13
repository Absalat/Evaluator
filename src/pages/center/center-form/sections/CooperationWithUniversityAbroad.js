import { TextField, Box } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const CooperationWithUniversityAbroad = ({
    onChangeHandler,
    faculty_exchanges,
    student_exchanges,
    joint_projects,
    disable,
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
                name="faculty_exchanges"
                value={faculty_exchanges}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Student exchanges"
                fullWidth
                onChange={onChangeHandler}
                name="student_exchanges"
                value={student_exchanges}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Joint projects"
                fullWidth
                onChange={onChangeHandler}
                name="joint_projects"
                value={joint_projects}
                disabled={disable}
            />
        </Section>
    );
};

export default CooperationWithUniversityAbroad;
