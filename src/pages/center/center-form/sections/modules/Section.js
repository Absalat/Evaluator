import { Card, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const formStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
    },
    title: {
        fontWeight: "bold",
    },
}));

const Section = ({ children, title }) => {
    const classes = formStyle();

    return (
        <Card variant="outlined" className={classes.card}>
            <Typography className={classes.title}>{title}</Typography>
            {children}
        </Card>
    );
};

export default Section;
