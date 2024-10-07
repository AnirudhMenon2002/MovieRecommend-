import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//8c529e91
//deployment:https://medium.com/swlh/how-to-build-and-deploy-a-react-website-with-custom-domain-in-10-minutes-17d953d2a715
const URL= 'http://www.omdbapi.com?apikey=8c529e91';

const App = () => { 
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const searchMovies =async(title)=>{
    const response = await fetch(`${URL}&s=${title}`);
    const data=await response.json();

    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovies('');
  },[]);
  return (
      <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
            <input placeholder='Search Movie' value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img src={SearchIcon}
            alt='Search'
            onClick={()=>searchMovies(searchTerm)}

            ></img>
        </div>
        {
          movies?.length> 0
          ?(
            <div className='container'>
              {movies.map((movie)=>(
                <MovieCard movie={movie}/>
              ))}
          </div>
          ):
          (
            <div className='empty'>
              <h2>No movie available</h2>
            </div>

          )
        }

       
      </div>
  
   
  );
}

export default App;
