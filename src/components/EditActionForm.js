import React from "react";

const EditActionForm = () => {
    return (
        <form>
            <input id="name" type="text" />
            <input id="description" type="text" />
            <input id="options" type="radio" />
            <button>Submit</button>
        </form>
    );
};

export default EditActionForm;
