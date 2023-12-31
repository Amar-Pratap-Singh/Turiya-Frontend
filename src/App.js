import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LandingPage } from './components/LandingPage';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
