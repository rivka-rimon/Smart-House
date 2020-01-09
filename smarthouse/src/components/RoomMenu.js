import React from 'react'
import {Link} from 'react-router-dom';
import './RoomMenu.css'


export default function RoomMenu(props) {
    return (
        <div className="btn">
            <Link to = '/room'>
            <button id="roomBtn" onClick = {() =>{ props.roomindex(props.index)}}  type="button" className="btn btn-info" style={{backgroundColor: props.color}}>
            {props.name}
            </button> 
            </Link>
        </div>
    )
}
