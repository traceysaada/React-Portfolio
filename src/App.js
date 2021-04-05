import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
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
     <Route path="/">
       <Redirect to="/about"/>
     </Route>
     <Route path="/React-Portfolio">
       <Redirect to="/about"/>
     </Route>
      <Route  path="/about" component={About} />
      <Route  path="/projects" component={ProjectPage} />
      <Route  path="/timeline" component={TimeLinePage} />
      <Route  path="/contact" component={ContactPage} />
      <Route  path="/homework" component={HomeWorkPage} />
     
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
