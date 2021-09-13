import React from "react";
import FormDisplay from "./sections/form-display";
import FormFilter from "./sections/form-filter";

function CenterFilledForm() {
    return (
        <>
            <FormFilter />
            <FormDisplay />
        </>
    );
}

export default CenterFilledForm;
