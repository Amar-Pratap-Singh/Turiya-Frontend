import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";
import axios from "axios";

export const Connect = () => {

    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [link3, setLink3] = useState("");

    useEffect(()=>{
        const fetchInviteLinks = async () => {
            try {
              // Fetch data from an API (example URL)
                const response = await axios.get('http://localhost:5001/api/getInviteLinks');
                setLink1(response.data.link1);
                setLink2(response.data.link2);
                setLink3(response.data.link3);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
          };
      
          fetchInviteLinks();
    }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Join the Turiya Community</h2>
                <p>Join us on a path of holistic growth for a harmonious blend of body, mind, and soul enrichment.</p>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Join Turiya WA group</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Join Turiya Chanting Group</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Subscribe to Turiya Channel</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <p><a href={link1} target="_blank" rel="noopener noreferrer">Join</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p><a href={link2} target="_blank" rel="noopener noreferrer">Join</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p><a href={link3} target="_blank" rel="noopener noreferrer">Subscribe</a></p>                        
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
