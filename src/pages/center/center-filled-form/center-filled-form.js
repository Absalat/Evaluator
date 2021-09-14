import React, { useEffect } from "react";
import FormDisplay from "./sections/form-display";
import FormFilter from "./sections/form-filter";

function CenterFilledForm() {
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

export default CenterFilledForm;
