import React, { useEffect } from "react";
import FormDisplay from "./sections/form-display";
import FormFilter from "./sections/form-filter";

function ChairFilledForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <FormFilter />
            <FormDisplay />
        </>
    );
}

export default ChairFilledForm;
