import React from "react";

import Action from "./Action";
import EditThingForm from "./EditThingForm";

const Thing = () => {
    return (
        <div>
            <div className="infoWillGoHere"></div>
            <hr />
            <Action />
            <hr />
            <EditThingForm />
        </div>
    );
};

export default Thing;
