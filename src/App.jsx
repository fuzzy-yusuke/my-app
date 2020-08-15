import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

function App() {    //classで定義付けるより、functionで定義した方が記述が少ない？
    return(
      <List />
    );
  
}

export default App;
