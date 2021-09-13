import React from "react";
import { Box, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function AdministrativeStaff({
    onChangeHandler,
    administrators,
    secretaries,
    research_staffs,
    disable,
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
                name="administrators"
                value={administrators}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Secretaries"
                fullWidth
                onChange={onChangeHandler}
                name="secretaries"
                value={secretaries}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Research Staffs"
                fullWidth
                onChange={onChangeHandler}
                name="research_staffs"
                value={research_staffs}
                disabled={disable}
            />
        </Section>
    );
}

export default AdministrativeStaff;
