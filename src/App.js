
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Components/Header"
import ProjectPage from './Components/ProjectPage';
import TimeLinePage from './Components/TimeLinePage';
import CVPage from './Components/CVPage'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <Router>
     <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/timeline" component={TimeLinePage} />
      <Route exact path="/cvpage" component={CVPage} />
      </Router>
    </div>
  );
}

export default App;
