import React, { useState } from "react";
import EmailModal from "../components/EmailModal";
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import im from "../images/asu_seal.png";


const Education = () => {
    const [viz, setViz] = useState(true);

    return (<Container
    style = {{
        height: "100vh",
       width: "100%",
       backgroundImage: 'url("https://www.mos.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fh1t3y2jud9xn%2F3X3ZXO3WAcLOOxcEmlkcM6%2F98ef3316ec6f0d0d5d9124f672e543e5%2Fimage2.png&w=2048&q=75")',
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
     
    }} >
            <center>
                <Row>
                    <h3><u>Education</u></h3>


                    <Col>
                        <ul style={{color: "black", fontWeight: "bold", fontSize:"large"}}><li>
                            Went to Arizona State University in the Ira Fulton Schools of Engineering
                        </li>
                            <li>Graduated undergrad in 2022.</li>
                            <li>Recieved a bachelors degree in science focusing on Software Engineering</li>
                            <li>Started graduate program for the school of Computing and Augmented Intelligence as ASU </li>
                            <li>Plans to graduate in 2024.</li>
                            <li>With a masters in science focusing on Computer Science</li>
                            
                            </ul>
                            <div>
                                Tell me what you think I should focus in:
                            </div>
                            <form>
                            <ol>
                            <li>Big Data  &emsp;<input type="checkbox" id="bigdata" value="data"></input></li> 
                            <li>Security  &emsp;<input type="checkbox" id="security" value="security"></input></li> 
                            <li>Artificial Intelligence  &emsp;<input type="checkbox" id="ai"  value="ai"></input></li> 
                            </ol>
                            </form></Col>
                    <Col>
                    <img src={im} alt="asu seal" width="400" height="400"></img>
                    </Col>
                    <Col>
                        <p>I would like to know more about you! If you care to share click the button to send me an email.</p>
                        <EmailModal title="Tell me about your school" buttonName="Tell me where you went to school" description="I would love to hear about where you went to school and what was your favorite class" />
                    </Col>
                </Row>
                <Row>
                    <Col> 
                    <Button href="hobbies" id="education_to_hobbies"> Check out my hobbies.</Button>               
    </Col>
                </Row>
            </center>

            </Container>
        
    );
}

export default Education;