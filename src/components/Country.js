import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'




function Country(props) {


const {name} = useParams()

//use to change the theme
let changes = props.change

//all array from appjs
let countries = props.arrayData;

let countryDetail = countries.filter(country => country.name === name)[0];

const borders = (arr) => {
    return arr.map(code => {
       const borderCountry = countries.filter(country => country.alpha3Code === code)[0];
        return <div className="borders" key={borderCountry.name}>{borderCountry.name}</div>

    })
}

let borderCountries = Object.keys(countryDetail).includes('borders') ? 
borders(countryDetail.borders) : 'No borders';

//console.log(countryDetail.borders)


  return (
    <div >

      <div className={changes === true ? 'navigate' : 'navigate2'}>

        <Link to="/RestCountries">
        <div id="arrDiv">
        <i className="las la-arrow-left" id="arrow"><span className='arrowSpan'>Back</span></i>
        </div>
        </Link>

      </div>

      <div className={changes === true ? "countryInfo" : "countryInfo2"}>

        <section>

          <div className='flagDisplay'>
            <img src={countryDetail.flags.png} alt='flag'/>
          </div>

          <div className='information'>

             <div id="head">
               <h3>{name}</h3>
             </div>

          <div id="body">

            <div id="leftInfo">
                <h5>Native Name: <span>{countryDetail.nativeName}</span></h5>
                <h5>Population: <span>{countryDetail.population}</span></h5>
                <h5>Region: <span>{countryDetail.region}</span></h5>
                <h5>Sub Region: <span>{countryDetail.subregion}</span></h5>
                <h5>Capital: <span>{countryDetail.capital}</span></h5>
                           
            </div>

            <div id="rightInfo">
                <h5>Top Level Domain: <span>{countryDetail.topLevelDomain}</span></h5>
                <h5>Currency: <span>{countryDetail.currencies[0].name}</span></h5>
                <h5>Languages: <span>{countryDetail.languages.map(lang => <span className="lang">{lang.name.toString()}</span>)}</span></h5>
            </div>

          </div>

          <div id="foot">
                        
              <div id="title">

                <h5>Border Countries:</h5>

              </div>

                <div id="list">
                     
                        {borderCountries }     

                  </div>
                        
            </div>

      </div>

    </section>

   </div>
      
   </div> 
  )
}

export default Country