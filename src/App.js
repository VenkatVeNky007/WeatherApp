import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {
const [city,setcity]=useState("")
const[weather,setweather]=useState("")
const handlesub=(e)=>{
  e.preventDefault()
  

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20eb792b01b786cdee9158c33a3268fc&units=metric`) 
.then( (val)=>{
  
console.log(val)
  setweather({
    temp:val.data.main.temp,
    name:val.data.name,
   max:val.data.main.temp_max,
   min:val.data.main.temp_min,
   feels:val.data.main.feels_like,
    humidity:val.data.main.humidity,
    visibility:val.data.visibility,
    clouds:val.data.clouds.all,
    pressure:val.data.main.pressure,
    gust:val.data.wind.speed,
   
          })
  setcity("")

  
  }).catch((error) => { // error is handled in catch block
    
      alert("invalid city name")}
  );
 
}

const handlechange=(event)=>{
const value=event.target.value
setcity(value)
}














  return (
    <div class="body">
      <img src="./space.gif" width={"100%"} height={"100%"}/>
    <div class="main">
      <form onSubmit={handlesub}>
      <input class="search"type='text'  onChange={handlechange} value={city}/>
 <img onClick={handlesub} src="./search.jpg" class="searchimg"/>
 </form>
 <div style={{textAlign:"center"}}>
 <img class="image"src="./imgw.png" />
 <h1 class="cityname">{weather.name || "City name"}</h1>
  <span class="temp">{Math.round(weather.temp) || "00"}<sup>o</sup>c</span></div><br/>


{/* max min block */}
  <div style={{width:"100%",backgroundColor:"red"}}>
    <div class="maxmin">
      <h1 class="maxminh1">MAX</h1>
      <span>{Math.round(weather.max||"00")}<sup>o</sup>c</span>
    </div>
    <div class="maxmin">
      <h1 class="maxminh1">MIN</h1>
      <span>{Math.round(weather.min||"00")}<sup>o</sup>c</span>
    </div>
  </div><br/><br/><br/><br/><hr/>

  {/* table block scroll */}

  <div class="tablecontainer">
    <table>
      <tr>
        <td>Feels like</td>
        <td>{Math.round(weather.feels)||"00"}<sup>o</sup>c</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>{weather.humidity||"00"}%</td>
      </tr>
      <tr>
        <td>Visibility</td>
        <td>{Math.round(weather.visibility/1000)||"00"}km/h</td>
      </tr>
      <tr>
        <td>Cloud Cover</td>
        <td>{weather.clouds||"00"}%</td>
      </tr>
      <tr>
        <td>Pressure</td>
        <td>{weather.pressure||"0000"}mb</td>
      </tr>
      <tr>
        <td>Wind Speed</td>
        <td>{Math.round(weather.gust)||"00"}km/h</td>
      </tr>
     
    </table>


  </div>



    </div>
    </div>  
  );
}

export default App;
