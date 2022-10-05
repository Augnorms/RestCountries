
import Countries from './components/Countries'
import {Routes, Route} from 'react-router-dom'
import Country from './components/Country'
import './index.css';
import './index2.css'
import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://restcountries.com/v2/all';

function App() {
  //to change the color theme
  const [change, setChange] = useState(true)

  //array for all countries
  const [countries, setCountries] = useState([]) 
  
  

  const HandleClick = ()=>{

    change === true ? setChange(false) : setChange(true)
   
  }


  useEffect(()=>{ 
   
    axios.get(url).then((response)=>{
        const countries = response.data
        setCountries(countries)
 
    }).catch((err)=>console.log(err))

 
  }, []) 

 
  
  return (
    <div className={change === true ? 'body' : 'body2'}>

      <header className={change === true ? 'head' : 'head2'}>

           <div className='logo'>
             <h2>Where in the world?</h2>        
           </div> 

           <div className='icon'>
            <i onClick={HandleClick}  className='fa fa-moon-o'><span>Dark Mode</span></i>
           </div> 
          
      </header>
       
        <Routes>  
            <Route path="/RestCountries" element={<Countries change={change} arrayData={countries}/>}/> 
        

        
           <Route path="/RestCountries/countries/:name" element={<Country change={change} arrayData={countries}/>}/> 
        </Routes>  

    </div>
  );
}

export default App;
