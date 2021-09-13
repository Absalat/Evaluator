import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../../../components/section/section";

const ChairProfile = ({
    num_of_full_professors,
    num_of_technical_staff,
    num_of_bsc_holders,
    num_of_msc_holders,
    num_of_phd_holders,
    num_of_asst_professors,
    num_of_assoc_professors,
    onChangeHandler,
    disable,
}) => {
    return (
        <Section title="Chair's Profile">
            <Box mt={2} />
            <TextField
                variant="outlined"
                type="number"
                label="No. of Technical staffs"
                margin="dense"
                fullWidth
                name="num_of_technical_staff"
                value={num_of_technical_staff}
                onChange={onChangeHandler}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                label="No. of B.Sc. holders"
                margin="dense"
                fullWidth
                name="num_of_bsc_holders"
                value={num_of_bsc_holders}
                onChange={onChangeHandler}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                label="No. of M.Sc. holders"
                margin="dense"
                fullWidth
                name="num_of_msc_holders"
                value={num_of_msc_holders}
                onChange={onChangeHandler}
                disabled={disable}
            />
            <TextField
                variant="outlined"
                type="number"
                label="No. of PhD holders"
                margin="dense"
                fullWidth
                name="num_of_phd_holders"
                value={num_of_phd_holders}
                onChange={onChangeHandler}
                disabled={disable}
            />
            <Box mt={1} />
            <Typography>No. Professors</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Asst. Professor"
                        margin="dense"
                        fullWidth
                        name="num_of_asst_professors"
                        value={num_of_asst_professors}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Assoc. Professor"
                        margin="dense"
                        fullWidth
                        name="num_of_assoc_professors"
                        value={num_of_assoc_professors}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Full Professor"
                        margin="dense"
                        fullWidth
                        name="num_of_full_professors"
                        value={num_of_full_professors}
                        onChange={onChangeHandler}
                        disabled={disable}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default ChairProfile;
