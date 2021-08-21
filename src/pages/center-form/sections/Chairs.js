import React from "react";
import { Box, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function Chairs({
    onChangeHandler,
    chairs_number_of_chairs,
    chairs_members,
    chairs_chairs_submitted_annual_plan,
    chairs_chairs_submitted_quartely_report,
}) {
    return (
        <Section title="Chairs">
            <Box mt={2} />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Number of chairs"
                fullWidth
                onChange={onChangeHandler}
                name="chairs_number_of_chairs"
                value={chairs_number_of_chairs}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Members/Chair"
                fullWidth
                onChange={onChangeHandler}
                name="chairs_members"
                value={chairs_members}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Chairs submitted annual plan"
                fullWidth
                onChange={onChangeHandler}
                name="chairs_chairs_submitted_annual_plan"
                value={chairs_chairs_submitted_annual_plan}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Chairs submitted quarterly plan"
                fullWidth
                onChange={onChangeHandler}
                name="chairs_chairs_submitted_quartely_report"
                value={chairs_chairs_submitted_quartely_report}
            />
        </Section>
    );
}

export default Chairs;
