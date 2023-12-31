import meter1 from "../assets/img/aboutTuriya/pd.jpg";
import meter2 from "../assets/img/aboutTuriya/mindfulness.jpg";
import meter3 from "../assets/img/aboutTuriya/emotional_wellbeing.jpeg";
import meter4 from "../assets/img/aboutTuriya/stress_reduction.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Intro = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>What is Turiya?</h2>
                        <p>Transformation and Unity through Realization and Inner Awareness.<br></br> Cultivating Character and Unleashing Potential</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="circle-image" src={meter1} alt="Image" />
                                <h5>Personality Development</h5>
                            </div>
                            <div className="item">
                                <img className="circle-image" src={meter2} alt="Image" />
                                <h5>Mindfulness</h5>
                            </div>
                            <div className="item">
                                <img className="circle-image" src={meter3} alt="Image" />
                                <h5>Emotional Well-being</h5>
                            </div>
                            <div className="item">
                                <img className="circle-image" src={meter4} alt="Image" />
                                <h5>Stress Reduction</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Personality Development</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
