import React from "react";

const NewPersonForm = () => {
    return (
        <form>
            <input id="email" type="text" />
            <input id="password" type="password" />
            <input id="pwAgain" type="password" />
            <button>Sign Up</button>
        </form>
    );
};

export default NewPersonForm;
