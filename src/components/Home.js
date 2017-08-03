import React from "react";
import { Card, Col, Icon, Row } from "react-materialize";

import LoginPersonForm from "./LoginPersonForm";
import NewPersonForm from "./NewPersonForm";
import Tetrahedron from "./Tetrahedron";

const Home = () => {
    return (
        <div>
            <Row>
                <Col s={2} />
                <Col s={8}>
                    <Row>
                        <Card title="Welcome">
                            Intro to the site will go here.
                        </Card>
                    </Row>
                    <Row>
                        <LoginPersonForm />
                    </Row>
                    <Row>
                        <Col s={2}></Col>
                        <Col s={8} className="centralCol">
                            <Icon large>brightness_low</Icon>
                            <hr />
                            <Tetrahedron />
                            <hr />
                            <Icon large>brightness_low</Icon>
                        </Col>
                        <Col s={2}></Col>
                    </Row>
                    <Row>
                        <NewPersonForm />
                    </Row>
                    <Row>
                        <Card title="More info">
                            Official looking info on the bottom.
                        </Card>
                    </Row>
                </Col>
                <Col s={2} />
            </Row>
        </div>
    );
};

export default Home;
