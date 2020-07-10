import React from 'react';
import './InfoPage.css';

function InfoPage(props){
    const data = props.infoPage.omdbData;
    const totalRuntime = parseInt(data.runtime) * data.episodes;
    const totalHours = Math.floor(totalRuntime / 60);
    const remainderMins = totalRuntime % 60;

    return(
        <div className='InfoPage'>
            <button className='back-button' onClick={props.toggleInfoPage}>BACK</button>
            <div className='info-div'>
                <img className='poster' alt='poster' src={data.poster}/>
                <br/>
                <h1 className='title'>{data.title}</h1>
                <h3 className='year'>{data.year}</h3>
                <div>
                    <p>{data.rated}</p>
                    <img className='divider' alt='batman-logo' src={props.logo}/>
                    <p>{data.runtime}</p>
                    <img className='divider' alt='batman-logo' src={props.logo}/>
                    <p>{data.imdbScore}/10</p>
                </div>
                <h4>{data.plot}</h4>
                <br/><br/>
                {data.type === 'series' ?
                    <div>
                        <p>{data.seasons} seasons</p>
                        <img className='divider' alt='batman-logo' src={props.logo}/>
                        <p>{totalHours} hrs {remainderMins} min</p>
                    </div>
                : <div></div>}
            </div>
        </div>
    );
}

export default InfoPage;