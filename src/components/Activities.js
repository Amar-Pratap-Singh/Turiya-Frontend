import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ActivityCard } from "./ActivityCard";
import session from "../assets/img/activities/session5.jpeg";
import service from "../assets/img/activities/service.jpeg";
import yoga from "../assets/img/activities/yoga.jpeg";
import trip from "../assets/img/activities/trip2.jpeg";
import food from "../assets/img/activities/food3.jpeg";
import meditation from "../assets/img/activities/meditation.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Activities = () => {

  const projects = [
    {
      title: "Spiritual Sessions",
      // description: "...",
      imgUrl: session,
    },
    {
      title: "Yoga Classes",
      // description: "...",
      imgUrl: yoga,
    },
    {
      title: "Mindful Meditation",
      // description: "...",
      imgUrl: meditation,
    },
    {
      title: "Rejuvenating Trips",
      // description: "...",
      imgUrl: trip,
    },
    {
      title: "Community Service",
      // description: "...",
      imgUrl: service,
    },
    {
      title: "Sattvik Food",
      // description: "...",
      imgUrl: food,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>What all we do?</h2>
                <p>We host professional spiritual sessions, yoga classes nurturing body, mind, and soul, complemented by curated trips to vibrant spiritual destinations.</p>
                {/* <p>We curate and host regular spiritual sessions and yoga classes designed to nourish the body, mind, and soul. Additionally, we facilitate enriching journeys to spiritually vibrant destinations, fostering holistic well-being through transformative experiences</p> */}
                <br></br>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ActivityCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
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
