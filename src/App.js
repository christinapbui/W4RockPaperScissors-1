import React from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js'
const choices = {
  rock: "https://images-na.ssl-images-amazon.com/images/I/61m9jG%2Bjj-L._AC_SX679_.jpg",
  paper: "https://m.media-amazon.com/images/I/61OorFhm6SL.jpg",
  scissors: "https://images-na.ssl-images-amazon.com/images/I/81TD%2B0Y9f6L._AC_SL1500_.jpg"
};

function App() {
  return (
    <div className="App">
      <ChoiceCard title="You" winner={false} imgURL={choices.rock} />
      <ChoiceCard title="Computer" winner={true} imgURL={choices.paper} />
    </div>
  );
}

export default App;
