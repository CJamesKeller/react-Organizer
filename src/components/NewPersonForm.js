import React from "react";
import { Button, Card, Input } from "react-materialize";

const NewPersonForm = () => {
    return (
        <div>
            <Card title="Sign up">
                <form>
                    <Input id="email" type="text" placeholder="email" />
                    <Input id="password" type="password" placeholder="password" />
                    <Input id="pwAgain" type="password" placeholder="re-enter password" />
                    <Button>Sign Up</Button>
                </form>
            </Card>
        </div>
    );
};

export default NewPersonForm;
