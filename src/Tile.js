import React from 'react';
import './Tile.css';

function Tile(props){
    const handleClick = () => {
        let newTitle = props.batInfo.title.replace(/ /g, "_");
        props.toggleInfoPage(newTitle, props.batInfo.year, props.type);
    }

    return(
        <div className="Tile">
            <img className='show-poster' onClick={handleClick} alt='show-poster' src={props.batInfo.img}/>
            <h3>{props.batInfo.title} ({props.batInfo.year})</h3>
        </div>
    );
}

export default Tile;