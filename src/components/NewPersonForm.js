import React from "react";

const NewPersonForm = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <label for="email">email</label>
                <input id="email" type="text" />
                <label for="password">password</label>
                <input id="password" type="password" />
                <label for="pwAgain">again</label>
                <input id="pwAgain" type="password" />
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default NewPersonForm;
