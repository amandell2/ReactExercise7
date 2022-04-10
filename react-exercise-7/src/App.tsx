import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuList from './components/MenuList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <MenuList/>
      </main>
    </div>
  );
}

export default App;
