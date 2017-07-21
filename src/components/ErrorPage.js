import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>You look a bit lost. Let's take you back home.</h1>
            <br />
            <Link to="/"><h1>Home</h1></Link>
        </div>
    );
};

export default ErrorPage;
