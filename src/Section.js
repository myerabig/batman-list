import React from 'react';
import './Section.css';
import Tile from './Tile';

function Section(props){
    return(
        <div className="Section">
            <h2>{props.title}</h2>
            <table className="sectionTable">
                <tbody>
                    {props.batInfo.map(row => {
                        return(
                            <tr>
                                {row.map(tile => <td className='tiletd'><Tile batInfo={tile} toggleInfoPage={props.toggleInfoPage} type={props.type}/></td>)} 
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Section;