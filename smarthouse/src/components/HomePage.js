import React,{useState , useEffect} from 'react'
import RoomMenu from './RoomMenu'
import {Link} from 'react-router-dom';
import './HomePage.css'


export default function HomePage(props) {

    const[HomeRoomArr , setHomeRoomArr] =
    useState([]);
 
    // get roomArr from 'app'
    useEffect(() => {
            setHomeRoomArr(props.arr)
        })
    
    // case there is no rooms
    const empty = ()=> {
        if(!HomeRoomArr.length){
            return (
            <div id="empty">no rooms yet. click the button to create your room!</div>)
        }}
    
    return (
        <div id="home">
            <div id="roomMenu">
            {/* show room menu by map */}
            { HomeRoomArr.map( (element,index) =>{
                return  <RoomMenu name={element.name} color={element.color} index={index} key={index} roomindex = {(i)=>{props.homeIndex(i)
                }}  />
            })}
            </div>
            {empty()}
            <Link to = '/addroom'>
            <button type="button" className="btn btn-info" id="addBtn">
            +</button>
            </Link>
        </div>
    )
}
