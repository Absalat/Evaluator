import React from "react";
import { Box, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function AdministrativeStaff({
    onChangeHandler,
    administrative_staff_adminstrator,
    administrative_staff_secretaries,
    administrative_staff_research_staff,
}) {
    return (
        <Section title="Administrative Staff Profile">
            <Box mt={2} />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Adminstrator"
                fullWidth
                onChange={onChangeHandler}
                name="administrative_staff_adminstrator"
                value={administrative_staff_adminstrator}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Secretaries"
                fullWidth
                onChange={onChangeHandler}
                name="administrative_staff_secretaries"
                value={administrative_staff_secretaries}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Research Staffs"
                fullWidth
                onChange={onChangeHandler}
                name="administrative_staff_research_staff"
                value={administrative_staff_research_staff}
            />
        </Section>
    );
}

export default AdministrativeStaff;
