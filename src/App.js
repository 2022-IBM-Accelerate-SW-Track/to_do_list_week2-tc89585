import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';

function App() {
  return (
    <div className="App" data-testid="app-component">
      <NavbarComp/>
    </div>
  );
}

export default App;
