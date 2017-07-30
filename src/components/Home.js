import React from "react";
import { Card, Col, Icon, Row } from "react-materialize";

import LoginPersonForm from "./LoginPersonForm";
import NewPersonForm from "./NewPersonForm";

const Home = () => {
    return (
        <div>
            <Row>
                <Col s={2} />
                <Col s={8}>
                    <Card title="Welcome">
                        Intro to the site will go here.
                    </Card>
                    <LoginPersonForm />
                    <Icon large>brightness_low</Icon>
                    <NewPersonForm />
                    <Card title="More info">
                        Official looking info on the bottom.
                    </Card>
                </Col>
                <Col s={2} />
            </Row>
        </div>
    );
};

export default Home;
