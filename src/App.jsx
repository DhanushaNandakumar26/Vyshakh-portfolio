// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home/Home';
// import { BrowserRouter as Router } from 'react-router-dom';
// import CustomCursor from './components/CustomCursor/CustomCursor';
// import ProjectCustomCursor from './components/ProjectHoverCursor/ProjectHoverCursor';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//       {/* <ProjectCustomCursor /> */}

//         <CustomCursor />

//         <Home />
//       </Router>

//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ProjectCustomCursor from './components/ProjectHoverCursor/ProjectHoverCursor';
import Home from './components/Home/Home';

function App() {
  const [hoveringProject, setHoveringProject] = useState(false);
  console.log("Hovering Project:", hoveringProject);
  const handleHoverChange = (isHovering) => {
    setHoveringProject(isHovering);
  };
  return (
    <div className="App">
      <Router>
        <CustomCursor hoveringProject={hoveringProject} />
        <ProjectCustomCursor hoveringProject={hoveringProject} />
        <Home onHoverChange={handleHoverChange} />
      </Router>
    </div>
  );
}

export default App;
