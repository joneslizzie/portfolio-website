import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import { Stack, Typography } from '@mui/joy';
import CopyrightIcon from '@mui/icons-material/Copyright';

function App() {
  return (
    <BrowserRouter>
      <div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
      <div className="menu-container">
        <Menu />
      </div>
      <div style={{flex: 1}}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/contact" element={<ContactMe />}/>
        </Routes>
        </div>
      <footer className="menu-container">
        <Stack direction="row" spacing={1}>
        <CopyrightIcon sx={{fontSize: '20px' }}/>
        <Typography level="body-xs" sx={{display: 'flex', alignItems: 'center'}}>
          Elizabeth Jones. All rights reserved.
        </Typography>
        </Stack>
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;