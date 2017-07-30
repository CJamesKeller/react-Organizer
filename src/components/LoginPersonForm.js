import React from "react";
import { Button, Card, Input } from "react-materialize";

const LoginPersonForm = () => {
    return (
        <div>
            <Card title="Log in">
                <form>
                    <Input id="username" type="text" placeholder="username" />
                    <Input id="password" type="password" placeholder="password" />
                    <Button>Log In</Button>
                </form>
            </Card>
        </div>
    );
};

export default LoginPersonForm;
