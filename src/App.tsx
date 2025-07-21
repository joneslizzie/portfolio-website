import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';

function App() {
  return (
    <BrowserRouter>
      <div className="menu-container">
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;