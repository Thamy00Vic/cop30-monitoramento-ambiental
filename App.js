import React from 'react';
import './styles/App.css';
import Logo from '../public/logo.png';  // Importando a logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="Logo Green Norte" />
        <h1>GREEN NORTE</h1>
      </header>
    </div>
  );
}

export default App;