import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuList from './components/MenuList';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className="App__mainSection">
        <MenuList/>
        <Sidebar/>
      </main>
    </div>
  );
}

export default App;
