import React, { useState } from 'react';
import Nav from './screens/nav';
import Home from './screens/home';
import Login from './screens/login';
import Workspace from './screens/workspace';
import Storage from './services/storage';

import './App.css';

function App() {
  const [tab, setNavigation] = useState('HOME');
  const onNavigationChange = (tab) => {
    setNavigation(tab)
  }
  
  return (
    <div className="main-container main-blogpost">
      <Nav tab={tab} onChange={onNavigationChange}/>
      <main className="outline">
        {tab === 'HOME' && <Home />}
        {tab === 'LOGIN' && <Login changeNav={onNavigationChange}/>}
        {tab === 'WORKSPACE' && <Workspace />}
      </main>
    </div>
  );
}

export default App;
