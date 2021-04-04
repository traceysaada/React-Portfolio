import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ProjectPage from './Components/ProjectPage';
import TimeLinePage from './Components/TimeLinePage';
import About from './Components/About'
import ContactPage from './Components/ContactPage'
import HomeWorkPage from './Components/HomeWorkPage';

function App() {
  return (
    <div className="App">
      <Router>
     <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/timeline" component={TimeLinePage} />
      <Route exact path="/contactpage" component={ContactPage} />
      <Route exact path="/homework" component={HomeWorkPage} />
      <Route exact path="/footer" component={Footer} />
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
