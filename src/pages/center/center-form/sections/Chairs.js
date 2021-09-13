import React from "react";
import { Box, TextField } from "@material-ui/core";
import Section from "./modules/Section";

function Chairs({
    onChangeHandler,
    num_of_chairs,
    members_chair,
    chairs_submitted_annual_plan,
    chairs_submitted_quarterly_report,
    disable,
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
                name="num_of_chairs"
                value={num_of_chairs}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Members/Chair"
                fullWidth
                onChange={onChangeHandler}
                name="members_chair"
                value={members_chair}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Chairs submitted annual plan"
                fullWidth
                onChange={onChangeHandler}
                name="chairs_submitted_annual_plan"
                value={chairs_submitted_annual_plan}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Chairs submitted quarterly plan"
                fullWidth
                onChange={onChangeHandler}
                name="chairs_submitted_quarterly_report"
                value={chairs_submitted_quarterly_report}
                disabled={disable}
            />
        </Section>
    );
}

export default Chairs;
