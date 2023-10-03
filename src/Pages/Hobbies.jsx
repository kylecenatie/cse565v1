import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
// import Skills from '../components/Skills'
import ImageSlider from '../components/ImageSlider'
import Form from "react-bootstrap/form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from 'styled-components';
import Mod from "../components/Mod";
import Button from "react-bootstrap/button";
import im1 from "../images/golf.jpeg";
import im2 from "../images/snowboard.jpeg";
import im3 from "../images/mancity.jpeg";
import im4 from "../images/usa_soccer.jpeg";
import im5 from "../images/paintball.jpeg";
import im6 from "../images/young_soccer.jpeg";





const AppBodyContainer = styled(Container).attrs({
    fluid: true,
    className: 'px-0 d-flex flex-column',
})`
  min-height: 100vh;
  & .container {
    flex-grow: 3;
    border: solid black;
  }
`;

const Hobbies = () => {
    const [viz, setViz] = useState(true);
    const [fave, setFave] = useState(true);

    const sliderImages = [{ url: im1 }, { url: im2 }, { url: im3 }, { url: im4 }, { url: im5 }, { url: im6 }];
    return (
        <AppBodyContainer>
            <header className="App-header">
                <Row>
                    <Col>
                        <ul>
                            <li style={{ fontSize: "x-large" }}>I love to golf.</li>
                            <li style={{ fontSize: "x-large" }}>My favorite team sport is soccer.</li>
                            <li style={{ fontSize: "x-large" }}>I have been playing soccer since I was 4 years old.</li>
                            <li style={{ fontSize: "x-large" }}>Favorite club is Manchester City.</li>
                            <li style={{ fontSize: "x-large" }}>I enjoy snowboarding.</li>
                            <li style={{ fontSize: "x-large" }}>I like paintballing.</li>
                            <li style={{ fontSize: "x-large" }}>I like pretty much anything that is outdoors.</li>
                        </ul>
                    </Col>
                    <Col>
                        <div> <center><h2>Hobbies</h2></center></div>

                        <ImageSlider images={sliderImages} wid={600} high={650} />
                    </Col>
                    <Col>
                        {viz &&
                            <><Form style={{ fontSize: "medium" }}>
                                <Form.Group className="mb-3" controlId="basic-name">
                                    <Form.Label>I want to hear about your favorite hobbie.</Form.Label>

                                    <Form.Control as="textarea" rows={3} placeholder="Whats your favorite hobbie?" onChange={(e) => setFave(e.target.value)} />
                                </Form.Group>
                            </Form><Button variant="primary" type="submit" onClick={() => setViz(false)}> Send</Button></>
                        }
                        {!viz &&
                            <div>Nice I really need to check out that hobbie!</div>
                        }

                        <div style={{ paddingTop: "300px", paddingLeft: "100px" }}>
                            <Button id="hobbies_to_home" href="/"> Thanks for checking out my website.</Button>
                        </div>
                    </Col>
                </Row>

            </header>
        </AppBodyContainer>
    );
}

export default Hobbies;