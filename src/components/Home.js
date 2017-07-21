import React from "react";

import LoginPersonForm from "./LoginPersonForm";
import NewPersonForm from "./NewPersonForm";

const Home = () => {
    return (
        <div>
            <p>Intro to the site will go here.</p>
            <LoginPersonForm />
            <hr />
            <NewPersonForm />
            <p>Official looking info on the bottom.</p>
        </div>
    );
};

export default Home;
