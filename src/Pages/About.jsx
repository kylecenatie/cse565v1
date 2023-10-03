import React, { useState } from "react";
import Button from "react-bootstrap/button"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import styled from 'styled-components';
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import im from "../images/california.png";
import im2 from "../images/family.jpeg";

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

const About = () => {
    const [viz, setViz] = useState(true);
    const [name, setName] = useState(false);
    const [city, setCity] = useState(false);
    const [state, setState] = useState(false);
    const [message, setMessage] = useState(false);
    const [country, setCountry] = useState(false);

    return (
        <AppBodyContainer className="App-header"><center>
            <Row>
                <h3><u>About Me</u></h3>


                <Col>
                    <ul><li>
                        Born in Riverside California.
                    </li>
                        <li>Middle child of five.</li>
                        <li>Three brothers and one sister.</li>
                        <li>Moved to Mesa Arizona in 2002.</li>
                        <li><b>I love California!</b> </li>
                    </ul>
                    <img src={im2} alt="family photo" width="440" id="family_image" height="350"></img>
                    <label id="family_image_label">Family Photo</label>
                    
                </Col>
                <Col><img src={im} alt="California" id="cal_image" width="450" height="600"></img>
                    {!message ?
                        <Form>
                            <Form.Check.Label>Fan of CA?</Form.Check.Label>
                            <Form.Check
                            style={{fontSize:"large", color:"black", backgroundColor:"gold"}}
                                type='checkbox'
                                label='Check the box if you like California.'
                                id='like_ca'
                                onChange={() => setMessage("I knew you were pretty cool.")}
                            /></Form>
                        :
                        <h3 style={{paddingTop:"30px"}}>{message}</h3>
                    }</Col>
                <Col>
                    {viz &&
                        <><Form style={{paddingRight:'40px'}}>
                            <Form.Label>Where were you born?</Form.Label>
                            <Form.Group className="mb-3" controlId="basic-name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" id="u_name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="basic-city">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" id="u_city" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="basic-state">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" id="u_state" placeholder="Enter state" onChange={(e) => setState(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="basic-state">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" id="u_country" placeholder="Enter country" onChange={(e) => setCountry(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="basic-state">
                                <Form.Label>Big Family?</Form.Label>
                                <Form.Check type="radio" id="u_fam_yes" label="YES" />
                                <Form.Check type="radio" id="u_fam_no" label="NO" />
                            </Form.Group>
                        </Form><Button variant="primary" id="submit_button" type="submit" onClick={() => setViz(false)}> Send</Button></>
                    }
                    {!viz &&
                        <div id="message_to_input">Greetings <b>{name}</b> from {city}, {state} {country}!<br />Thanks for visiting my site</div>
                    }
                </Col>
            </Row>
            <Row><Col>
                <Button href="education" id="about_to_education"> Learn about my education.</Button>
            </Col>
            </Row>
        </center>

        </AppBodyContainer>
    );
}

export default About;