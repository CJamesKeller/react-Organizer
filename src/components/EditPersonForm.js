import React from "react";

const EditPersonForm = () => {
    return (
        <form>
            <input id="name" type="text" />
            <input id="email" type="text" />
            <input id="note" type="text" />
            <input id="newPassword" type="text" />
            <button>Submit</button>
        </form>
    );
};

export default EditPersonForm;
