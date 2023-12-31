// import logo from './logo.svg';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Intro } from "./Intro";
import { Activities } from "./Activities";
import { UpcomingEvent } from "./UpcomingEvent";
import { Footer } from "./Footer";
import { Connect } from './Connect';
import { Credits } from './Credits';

export const LandingPage = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Intro />
      <Activities />
      <UpcomingEvent />
      <Connect />
      <Credits />
      <Footer />
    </div>

  );
}

