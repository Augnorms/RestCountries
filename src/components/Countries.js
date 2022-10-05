import React, {useState} from 'react';
import {Link} from 'react-router-dom'



function Countries(props) {

    const [find, setFind] = useState('')
    const [continent, setContinent] = useState("")
    
    

    const HandleChange = (e)=>{
      let search = e.target.value

      setFind(search) 
      
    }

     //retrieving data from Appjs
     let countries = props.arrayData;

    // retrieving props from app.js
     let changes = props.change
     

  return (

    <>

   <div className={changes === true ? 'filter' : 'filter2'}>
    
      <form className='form-control'>
        <i className='fa fa-search'></i>
         <input type="text" name="search" id="search"
          placeholder="Search for a country... " onChange={HandleChange}/>
      </form>

      <div className='select-control'>
        <select id="select" onChange={(e)=>{
            setContinent(e.target.value)
            
        }}>
           <option  value="filter">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option  value="America">America</option>
            <option  value="Asia">Asia</option>
            <option  value="Europe">Europe</option>
            <option  value="Oceania">Oceania</option>
        </select>
        
      </div>
    
    </div>

      <section className={changes === true ? 'grid' : 'grid2'}>
      {
          countries.filter((val)=>{
            if(find === ''){

               return val

            }else if(val.name.toLowerCase().includes(find.toLocaleLowerCase())){

              return val

            }
          }).filter((val)=>{
            if(continent === '' || continent === 'filter'){

              return val

           }else if(val.region.includes(continent)){

             return val

           }
          }).map((country, index)=>{
            const {numericCode, name, population, 
              region, subregion, capital, flag} = country;
           
            return(

                 <article key={numericCode}>
                  
                   <div className='imagCont'>
                    
                       <div id="infoImage">   

                         <Link to={`/RestCountries/countries/${name}`}>
                           <img  src={flag} alt={name} />
                         </Link> 

                        </div> 
                
                      <div id="infoFirst" >

                       <p>{name}</p>
                       <div className="labeldiv"><label>Population: </label> <span>{population}</span></div> 
                       <div className="labeldiv"><label>Region: </label> <span>{region}</span></div>   
                       <div className="labeldiv"><label>Capital: </label> <span>{capital}</span></div>                           
                        
                      </div>  
                   

                   </div>
                  
                 </article>
  

            )
          })
        }
      </section> 
    </>
    
  )
}

export default Countries