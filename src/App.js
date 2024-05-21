import React from 'react';
import Header from './header';
import Introduction from './intro';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
