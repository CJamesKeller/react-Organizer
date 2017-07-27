import React from "react";

const LoginPersonForm = () => {
    return (
        <div>
            <h2>Log In</h2>
            <form>
                <label for="username">username</label>
                <input id="username" type="text" />
                <label for="password">password</label>
                <input id="password" type="password" />
                <button>Log In</button>
            </form>
        </div>
    );
};

export default LoginPersonForm;
