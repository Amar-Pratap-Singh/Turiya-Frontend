import tarun from "../assets/img/members/tarun.jpeg";
import harsha from "../assets/img/members/harsha.jpeg";
import swaroop from "../assets/img/members/swaroop.jpeg";
import suyash from "../assets/img/members/suyash.jpeg";
import soumaditya from "../assets/img/members/soumaditya.jpeg";
import nsp from "../assets/img/members/nsp.jpeg";
import anindhita from "../assets/img/members/anindhita.jpeg";
import amar from "../assets/img/members/amar.jpeg";
import risshi from "../assets/img/members/risshi.jpeg";
import tarun2 from "../assets/img/members/tarun2.jpeg";
import gopal from "../assets/img/members/gopal.jpeg";
import dhruv from "../assets/img/members/dhruv.jpg";
import srivigraha from "../assets/img/members/srivigrahaPrabhu.jpeg";
import ramasevaka from "../assets/img/members/ramasevakaPrabhu.jpeg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Credits = () => {
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
    <section className="credits" id="credits">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx-core wow zoomIn">
                        <h1 className="core-team">Our Core Team</h1>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item ">
                                <img src={srivigraha} alt="Image" className="credit-image"/>
                                <h5>Srivigraha Dasa</h5>
                            </div>

                            <div className="item ">
                                <img src={ramasevaka} alt="Image" className="credit-image"/>
                                <h5>Rama Sevaka Dasa</h5>
                            </div>

                            <div className="item ">
                                <img src={tarun} className="credit-image"alt="Image" />
                                <h4>Tarun</h4>
                                <p>Alumnus</p>
                            </div>

                            <div className="item ">
                                <img src={risshi} className="credit-image"alt="Image" />
                                <h5>Risshi</h5>
                                <p>iMTech 5th year</p>
                            </div>


                            <div className="item ">
                                <img src={dhruv} className="credit-image"alt="Image" />
                                <h5>Dhruv</h5>
                            </div>


                            <div className="item ">
                                <img src={gopal} className="credit-image"alt="Image" />
                                <h5>Gopal</h5>
                            </div>


                            <div className="item ">
                                <img src={suyash} className="credit-image" alt="Image" />
                                <h5>Suyash</h5>
                            </div>

                            <div className="item ">
                                <img src={harsha}className="credit-image" alt="Image" />
                                <h5>Harshavardhan</h5>
                            </div>

                            <div className="item ">
                                <img src={swaroop} className="credit-image" alt="Image" />
                                <h5>Swaroop</h5>
                            </div>

                            <div className="item ">
                                <img src={tarun2} className="credit-image"alt="Image" />
                                <h5>Tarun</h5>
                            </div>

                            <div className="item ">
                                <img src={soumaditya} className="credit-image" alt="Image" />
                                <h5>Soumaditya</h5>
                            </div>

                            <div className="item ">
                                <img src={anindhita} className="credit-image" alt="Image" />
                                <h5>Anindita</h5>
                            </div>

                            <div className="item ">
                                <img src={nsp} alt="Image" className="credit-image" />
                                <h5>NSP Koushik</h5>
                            </div>

                            <div className="item ">
                                <img src={amar} alt="Image" className="credit-image"/>
                                <h5>Amar Pratap Singh</h5>
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
