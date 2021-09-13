import React from "react";
import {
    Table,
    TableRow,
    TableCell,
    Box,
    Typography,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    underline: {
        borderBottom: "1px solid",
        flexGrow: 1,
        marginLeft: "5px",
        marginRight: "5px",
    },
}));

function FormFooter() {
    const classes = useStyles();

    return (
        <Table>
            <TableRow>
                <TableCell>
                    <Typography>Prepared By</Typography>
                </TableCell>
                <TableCell>
                    <Box display="flex">
                        <Typography>Name of chair</Typography>
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
                    <Typography>Checked By</Typography>
                </TableCell>
                <TableCell>
                    <Box display="flex">
                        <Typography>Dean/Center Head</Typography>
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
                        <Typography>Executive Director</Typography>
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
    );
}

export default FormFooter;
