
import './App.css';
import Axios from 'axios';
import { YOUR_APP_ID, YOUR_APP_KEY  } from './constants';
import Card from './Card';
import { useState } from 'react';
import './App.css'


function App() {
 
  const [apiData, setApiData] =useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [ mealType, setMealType] = useState('')
  const [ dietType, setDietType] = useState('')
  const [name, setName] = useState('')

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=6&calories=591-722&mealType=${mealType}&diet=${dietType}`


  const getReceipeInfo = async() =>{
    var result = await Axios.get(url);
    console.log(result)
    setApiData(result.data.hits)
  }

  return (
    <div className='container'>
      <h1>Food recipe</h1>
      <form className='form-container' >
        <select  className="select-box" onChange={(e) => setMealType(e.target.value)}>
          <option>Select meal type</option>
          <option>breakfast</option>
          <option>lunch</option>
          <option>snacks</option>
          <option>dinner</option>
        </select>

        <select className="select-box"  onChange={(e) => setDietType(e.target.value)}>
          <option>Select Diet type</option>
          <option>balanced</option>
          <option>high-protein</option>
          <option>high-fiber</option>
          <option>low-fat</option>
        </select>
      {/* <button onClick={}></button> */}
        <input type="text" placeholder='enter food' className='search_field' onChange={(e) => {setSearchValue(e.target.value)}}/>
       <input type="button" value="Search" className='submit_btn' onClick={getReceipeInfo}/>
       
      </form>
    <div>{name}</div>
      <div className='card-container'>
      {apiData.map(val => {
        return <Card image ={val.recipe.image} label={val.recipe.label}/> }
      )}
      </div>
    </div>
  );
}

export default App;

