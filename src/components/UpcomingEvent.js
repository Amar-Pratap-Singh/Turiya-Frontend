import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";

export const UpcomingEvent = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    rollNumber: '',
    email: '',
    phone: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Register');
  const [status, setStatus] = useState({});
  const [imageURL, setImageURL] = useState("");
  const [upcomingEvent, setUpcomingEvent] = useState(false);
  const [flag, setFlag] = useState("");


  // fetch the image poster from database
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Fetch data from an API (example URL)
        const response = await axios.get('https://turiyaclubiiitb-api.onrender.com/api/getEventPoster');

        if (response.data.image_url === "") {
          setUpcomingEvent(false);
          setFlag('false');
          return;
        }

        // var image_id = response.data.image_url.substring(32);
        // image_id = image_id.substring(0, image_id.length - 17);
        // // console.log(response.data.image_url);
        // console.log(image_id);
        // const image_url = "https://drive.google.com/uc?id=" + image_id;

        var image_id = response.data.image_url.substring(18);
        var image_url = `https://i.imgur.com/${image_id}.jpg`;
        console.log(image_url);

        setImageURL(image_url);
        setUpcomingEvent(true);
        setFlag('true');

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchImage();

  }, []);



  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formDetails.email.slice(-12) !== "@iiitb.ac.in") {
      setStatus({ success: false, message: 'Please use your IIITB account to register!' });
      return;
    }

    document.getElementById("form-button").setAttribute("disabled", true);
    setButtonText("Registering...");

    let response = await axios.post("https://turiyaclubiiitb-api.onrender.com/api/registerForEvent", formDetails);

    // console.log(response);

    if (response.data.code === 200) {
      setButtonText("Registered");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Registered Successfully for event' });
    }
    else if (response.data.code === 400) {
      setButtonText("Register");
      setStatus({ success: false, message: 'User with same email is already registered' });
      document.getElementById("form-button").setAttribute("disabled", false);
    }
    else {
      setButtonText("Register");
      setStatus({ success: false, message: 'Something went wrong, please try again later' });
      document.getElementById("form-button").setAttribute("disabled", false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {flag === ''
            ? <h4 style={{ textAlign: "center" }}>Fetching event status... Please Wait!</h4>
            :
            !upcomingEvent
              ?
              <h4 style={{ textAlign: "center" }}>Upcoming event will be shown here! Please check for regular updates.</h4>
              :
              <>
                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={imageURL} alt="Event Poster" />
                    }
                  </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                        <h2>Upcoming Event</h2>
                        <form onSubmit={handleSubmit}>
                          <Row>
                            <Col size={12} sm={6} className="px-1">
                              <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                              <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                              <input type="text" value={formDetails.rollNumber} placeholder="Roll Number" onChange={(e) => onFormUpdate('rollNumber', e.target.value)} required />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                              <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                            </Col>
                            <Col size={12} className="px-1">
                              <Col className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                              </Col>
                              {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                              <button id="form-button" type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                              status.message &&
                              <div className="message">
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                              </div>
                            }
                          </Row>
                        </form>

                      </div>}
                  </TrackVisibility>
                </Col>
              </>
          }
        </Row>
      </Container>
    </section>
  )
}
