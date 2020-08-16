import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = "64958b81";
  const APP_KEY = "053aace91356d4247b2ca5ff67b21355	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
;


  return (
    <div className="App" >
      <h1>Hello React</h1>
      <form className="search-form" action="">

        <input type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>

  );
};

export default App;