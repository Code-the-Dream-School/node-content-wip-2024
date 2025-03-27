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

// //Introducing an external API Lesson

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from './components/Button';
// import './App.css'


// const App = () => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [lat, setLat] = useState(35.2271); // Default set to Charlotte, NC
//   const [lon, setLon] = useState(80.8431); // Default set to Charlotte, NC

//   const API_KEY = import.meta.env.VITE_API_KEY 

//   // Fetch weather data when component mounts or when coordinates change
//   useEffect(() => {
//     axios
//       .get(
//         `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`
//       )
//       .then((response) => {
//         console.log("testing")
//         setWeather(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         // API returns cooresponding error here, demonstrate errors (visible dev tools)
//         setError(err);
//         setLoading(false);
//       });
//   }, [lat, lon]);

//   const handleCoordinatesChange = () => {
//     // Example of changing coordinates (for Los Angeles or anywhere you want to change it to)
//     setLat(34.0549);  // Los Angeles Latitude
//     setLon(118.2426);  // Los Angeles Longitude
//   };

//   //Benefits of React, you can have client rendering automatically in case there is delay. Your user will be aware
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     //Notice how nested json data is retrieved using dot notation
//     <div>
//       <h1>Your Name's Portfolio</h1>
//       <p>Weather at Coordinates: ({lat}, {lon})</p>
//       {weather && (
//         <div>
//           <p>Current Temperature: {weather.current.temp_f}°F</p>
//           <p>Weather: {weather.current.condition.text}</p>
//           <p>Humidity: {weather.current.humidity}%</p>
//           <p>Wind Speed: {weather.current.wind_mph} mph</p>
//         </div>
//       )}
//       <Button onClick={handleCoordinatesChange}>Get LA weather</Button>
//     </div>
//   );
// };

// export default App;

//Conditional Rendering Lesson

// we'll be establishing conditional rendering based on time
//seasons will have a different color palette. 
// there will be an option for user to add zip code for weather
//specific rendering (less invasive than requesting geolocation 
//from User)

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
  let month = null
  let day = null
  let season = null

  // key for Weather API that exists in our environemnt file
  const API_KEY = import.meta.env.VITE_API_KEY 


  //date using JS built-in Date() and setting as State 
  //(since it's temporal/expected to change)
  const [currentDate, setCurrentDate] = useState(new Date());
 


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());

    }, 1000); // This is always accurate, it updates every second
  
    return () => clearInterval(intervalId); // Clears after mount
  }, []);

//I'll go over Template literals with className change


//commented out is my initial walk through of season check before making more concise with
// the version directly after
// I'll set month and date directly to test and show different dates colors


//  function seasonCheck(month, day){
//   month = currentDate.getMonth()
//   day = currentDate.getDate()    
//     if (month<3){
//       season = "winter"
//       if(month ==2 && day>=20){
//         season = "spring"
//       }
//     }
//     if (month>3 && month<6){
//       season = "spring"
//       if(day>=20 && month==5){
//         season = "summer"
//       }
//     }
//     if (month>6 && month<9){
//       season = "summer"
//       if(day>=22 && month==8){
//         season = "fall"
//       }
//     }
//     if (month>8 && month<11){
//        season = "fall"
//       if(day>=21 && month==11){
//         season = "winter"
//       }   
    
//     }
//   return season
//   }

  function seasonCheck() {
    const month = new Date().getMonth();
    const day = new Date().getDate();
    
    let season;
    
    if (month < 2 || (month === 2 && day < 20)) {
      season = "winter";
    } else if (month < 5 || (month === 5 && day < 20)) {
      season = "spring";
    } else if (month < 8 || (month === 8 && day < 22)) {
      season = "summer";
    } else if (month < 11 || (month === 11 && day < 21)) {
      season = "fall";
    } else {
      season = "winter";
    }
  
    return season;
  }
 

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
        //checking to see how we're returning the date.
        //first show current date as is (locale to string)
        //
        // console.log("day and month:", currentDate.getMonth(), currentDate.getDate())
        // set current month and day
        // month = currentDate.getMonth()
        // day = currentDate.getDate()
      
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
      <h1 className={`${seasonCheck()}`}>Your Name's Portfolio</h1>
      <p>Weather at Coordinates: ({lat}, {lon}, {seasonCheck()})</p>
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

