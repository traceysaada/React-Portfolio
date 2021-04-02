
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Components/Header"
import ProjectPage from './Components/ProjectPage';
import TimeLinePage from './Components/TimeLinePage';

import About from './Components/About'
import ContactPage from './Components/ContactPage'

function App() {
  return (
    <div className="App">
      <Router>
     <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/timeline" component={TimeLinePage} />
     
      <Route exact path="/contactpage" component={ContactPage} />
      </Router>
    </div>
  );
}

export default App;
