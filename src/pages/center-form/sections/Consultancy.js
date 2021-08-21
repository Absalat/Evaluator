import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "./modules/Section";

const Consultancy = ({
    onChangeHandler,
    consultancy_short_term_training,
    consultancy_num_of_consulting_services_initiated,
    consultancy_num_of_consulting_services_completed,
    consultancy_consulting_income_generated,
}) => {
    return (
        <Section title="Consultancy">
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Short term training"
                fullWidth
                onChange={onChangeHandler}
                name="consultancy_short_term_training"
                value={consultancy_short_term_training}
            />
            <Box mt={2} />
            <Typography>No. consult. services</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Initiated"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="consultancy_num_of_consulting_services_initiated"
                        value={consultancy_num_of_consulting_services_initiated}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Completed"
                        margin="dense"
                        fullWidth
                        onChange={onChangeHandler}
                        name="consultancy_num_of_consulting_services_completed"
                        value={consultancy_num_of_consulting_services_completed}
                    />
                </Grid>
            </Grid>
            <TextField
                variant="outlined"
                type="number"
                margin="dense"
                label="Consult. income generated (Birr)"
                fullWidth
                onChange={onChangeHandler}
                name="consultancy_consulting_income_generated"
                value={consultancy_consulting_income_generated}
            />
        </Section>
    );
};

export default Consultancy;
