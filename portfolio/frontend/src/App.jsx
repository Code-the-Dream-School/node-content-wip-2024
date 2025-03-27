//Initial install default 
// Part of lesson walk through

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// React Demo Lesson 1

// import { useState } from 'react'
// import './App.css'
// import Button from './components/Button';


// const person = {
//   name: 'Ada Lovelace',
//   username: 'ada-bae',
//   age: 29,
//   address: {
//    street: '4 road lane',
//    city: 'Seaside',
//    state: 'California'
//   },
//   greet: function() {
//    console.log(`Hello, my name is ${this.name}`);
//   }
//  };

// function App() {
//   const handleClick = () => {
//     console.log('clicked'); // check to see 'clicked' in console
//   };

//   return (
//     <>
//       <div>
      
//       </div>
//       <p>
//         {person.name}'s Portfolio
//       </p>
//       <Button onClick={handleClick}>About</Button>
//     </>
//   )
// }

// export default App

//Introducing an external API Lesson
//explain useState, useEffect,
//review Axios
// describe mounting and need for asynchronicity 
// look at weather API docs, make account (no CC)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './components/Button';
import './App.css'


const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(35.2271); // Default set to Charlotte, NC
  const [lon, setLon] = useState(80.8431); // Default set to Charlotte, NC

  const API_KEY = import.meta.env.VITE_API_KEY 

  // Fetch weather data when component mounts or when coordinates change
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`
      )
      .then((response) => {
        console.log("testing")
        setWeather(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // API returns cooresponding error here, demonstrate errors (visible dev tools)
        setError(err);
        setLoading(false);
      });
  }, [lat, lon]);

  const handleCoordinatesChange = () => {
    // Example of changing coordinates (for Los Angeles or anywhere you want to change it to)
    setLat(34.0549);  // Los Angeles Latitude
    setLon(118.2426);  // Los Angeles Longitude
  };

  //Benefits of React, you can have client rendering automatically in case there is delay. Your user will be aware
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    //Notice how nested json data is retrieved using dot notation
    <div>
      <h1>Your Name's Portfolio</h1>
      <p>Weather at Coordinates: ({lat}, {lon})</p>
      {weather && (
        <div>
          <p>Current Temperature: {weather.current.temp_f}°F</p>
          <p>Weather: {weather.current.condition.text}</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.wind_mph} mph</p>
        </div>
      )}
      <Button onClick={handleCoordinatesChange}>Get LA weather</Button>
    </div>
  );
};

export default App;


// MAPPING DATA EXAMPLE IF TIME DURING LESSON
//

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://api.example.com/items')
//       .then(response => {
//         setData(response.data); 
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Items List</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//export default App
///




//Conditional rendering - Colors dependent on weather


// stylizing and personalizing assignment 