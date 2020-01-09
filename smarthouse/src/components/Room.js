
import React,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import Product from './Product';
import './Room.css'


export default function Room(props) {


    const[roomArr , setRoomArr] = useState([]);
    const[newProduct , setNewProduct] = useState('');
    const[productArea , setProductArea] = useState('hidden');
    const[roomIndex , setRoomIndex] = useState();
    const[myRoom , setMyRoom] = useState({});
    const[productArr , setProductArr] = useState([]);
    

    useEffect(() => {
        // get the room array from app
        setRoomArr(props.arr);
        setRoomIndex(props.index);
        {roomArr.map( (element,index) => {
            if (index == roomIndex)
            return setMyRoom(element);  
        })}   
    }, [roomArr])

    // use local storsge to save data
    // useEffect(() => {
    //    localStorage.setItem('roomArr' , JSON.stringify(roomArr))
    // }, [roomArr])

    // const localData = localStorage.getItem('roomArr');
    // return localData ? JSON.parse(localData) : [];

    // remove product 
    const removeProduct = (i)=>{
        setProductArr(productArr.filter( (element,index)=>
        (index != i)
        ))
        myRoom.product.splice(i , 1);
        setMyRoom(myRoom);
    }

    return (
        <div id="room" style={{borderColor: myRoom.color}}>
        <h2 style={{backgroundColor: myRoom.color}}>room information</h2>
        {/* room information */}
        <ul id="roomInfoList" >
            <li style={{borderColor: myRoom.color}}>name: {myRoom.name}</li>
            <li style={{borderColor: myRoom.color}}>type: {myRoom.type} </li>
            {/* show products */}
            <li style={{borderColor: myRoom.color}} id="productsList" >
            products:
            {productArr.map( (element,index) =>{
                return <Product productName = {element.name} color = {element.color} index= {index} key={index}
                // remove product
                delete = {(i)=>{removeProduct(i)} }
                // change product color 
                changeColor = {(i) => {
                let change = productArr.map( (element1,index1)=>{
                    if(index1 == i){
                    if(element1.color == 'red'){
                        element1.color = 'green';
                    }
                    else{element1.color = 'red'}
                    }
                    return element1;
                })
                setProductArr(change);
                }}/> 
                })}
            </li>
        </ul>
        {/* buttons */}
        {/* add product button */}     
        <button onClick={()=>{setProductArea('visible')}} type="button" className="btn btn-info">add product
        </button>
        {/* show room's products */}
        <button id="show products" type="button" className="btn btn-info"
        onClick={ ()=>{
        setProductArr(myRoom.product);}}
        >show products</button>
        <Link to = '/'><button type="button" className="btn btn-info">home </button></Link> 
        {/* delete button */}
        <Link to = '/'>
        <button type="button" className="btn btn-danger" 
        onClick={()=>{props.delete(roomIndex)}}
        >delete room</button>
        </Link>
        {/* add product */}
        <div id="addProductArea" style={{visibility:productArea}}>
                    <select className="selectRoom" onChange={(n)=> {setNewProduct(n.target.value)}}>
                    <option value="none">choose your product</option>
                    <option value="Air-Conditioner">Air-Conditioner</option>
                    <option value="boiler">boiler</option>
                    <option value="lamp">lamp</option>
                    <option value="stereo-System">stereo system</option>
                    </select> <br/>
        {/* add button */}
        <button onClick={() => {
                    // check if the product can be in the room
                    setProductArea('hidden');
                    if(newProduct == 'boiler' && myRoom.type != 'Bathroom'){
                        return alert ('ERROR')}
                    else if(newProduct == 'stereoSystem' && myRoom.product.indexOf('stereoSystem') != -1){
                        return alert ('ERROR')
                        }
                    else if(myRoom.product.length > 4){
                        return alert ('ERROR')
                        }
                    else{
                        // add the product to the room
                        myRoom.product.push({name:newProduct , color:'red'});
                        setMyRoom(myRoom);
                        setProductArr(myRoom.product);
                        roomArr.map((element,index) =>{ if(index == roomIndex ){element = myRoom} return element })
                        {props.sendArr(myRoom , roomIndex )}}
                        }}
        type="button" className="btn btn-info">add me</button>
        </div>
        </div>
    )
}

// to do:
// photos of products