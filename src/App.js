import axios from 'axios';
import { useEffect, useState } from 'react';
import City from './City';
import './App.css';


function App() {
  const key="30b0ebc55172122a7185587a0360fcd2";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect ( () => {
    async function getApi() {
      try {
        const response = await axios.get
        (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search])
  console.log(search);
  return (
    <div className="App">
     <div>
     <input 
      onChange={(e)=> setSearch(e.target.value)} 
      className='border-8 bg-slate-500' 
      type="text"
      placeholder='Placeholder'
      />
    {city && <City city={city} />}

     </div>

    </div>
  );
}

export default App;
