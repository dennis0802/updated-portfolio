import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Skills from './routes/skill';
import ErrorPage from './routes/error';
import Experience from './routes/experience';
import ContactRoute from './routes/contact';
import ProjectsPage from './routes/projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/index" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/skills" element={<Skills/>} />
        <Route path="/experience" element={<Experience />}/>
        <Route path="/contact" element={<ContactRoute />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
