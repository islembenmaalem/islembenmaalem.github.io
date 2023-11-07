import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import "./styles/Global.css";
import SidebarNav from './components/SidebarNav';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Credits from './components/Credits';
import JobList from './components/JobList';

function App() {
  return (
    <div className="App">
        <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
      
        <Credits></Credits>
      </div>
      <SidebarNav></SidebarNav>
    </div>
  );
}

export default App;
