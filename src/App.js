import React, {useState} from 'react';
import './App.css';
import Section from './Section';
import InfoPage from './InfoPage';
import logo from './assets/batman-logo.png';
import batInfo from './batInfo.js';

function App() {
  const [infoPage, setInfoPage] = useState({
    visible: false,
    omdbData: {}
  });

  const toggleInfoPage = async (newTitle, newYear, newType) => {
    if(infoPage.visible){
      setInfoPage({visible: false});
    }
    else{
      let newOmdbData = await getData(newTitle, newYear, newType);
      setInfoPage({visible: true, omdbData: newOmdbData});
    }
  }

  const getData = async (omdbTitle, year, type) => {
    var url = 'http://www.omdbapi.com/?apikey=3e81f51c&t=' + omdbTitle + '&y=' + year + '&type=' + type;
    var resultObject = {};

    await fetch(url)
    .then(response => response.json())
    .then(json => {
        resultObject.poster = json.Poster;
        resultObject.title = json.Title;
        resultObject.year = json.Year;
        resultObject.rated = json.Rated;
        resultObject.runtime = json.Runtime;
        resultObject.imdbScore = json.imdbRating;
        resultObject.plot = json.Plot;
        resultObject.type = type;

        if(type == 'series'){
          resultObject.seasons = json.totalSeasons;
        }
    })
    .catch(error => console.error(error));

    if(type == 'series'){
      resultObject.episodes = await countEpisodes(omdbTitle, year, type, resultObject.seasons);
    }

    return resultObject;
  }

  const countEpisodes = async (omdbTitle, year, type, seasons) => {
    let episodeCount = 0;

    for(let season = 1; season <= seasons; season++){
      let url = 'http://www.omdbapi.com/?apikey=3e81f51c&t=' + omdbTitle + '&y=' + year + '&type=' + type + '&season=' + season;

      await fetch(url)
      .then(response => response.json())
      .then(json => {
        episodeCount += json.Episodes.length;
      })
      .catch(error => console.error(error));
    }

    return episodeCount;
  }

  if(!infoPage.visible){
    return (
      <div className='App'>
        <div id='title-div'>
            <img className='title-img' alt='batman-logo' src={logo}/>
            <h1>The Mega Batman List</h1>
            <img className='title-img' alt='batman-logo' src={logo}/>
        </div>
        <Section title='TV Shows' toggleInfoPage={toggleInfoPage} batInfo={batInfo.series} type='series'/>
        <Section title='Movies' toggleInfoPage={toggleInfoPage} batInfo={batInfo.movies} type='movie'/>
      </div>
    );
  }
  else{
    return(
      <div className='App'>
        <InfoPage toggleInfoPage={toggleInfoPage} infoPage={infoPage} logo={logo}/>
      </div>
    )
  }
}

export default App;
