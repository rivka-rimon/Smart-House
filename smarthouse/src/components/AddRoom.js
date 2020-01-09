import React ,{useState} from 'react'
import {Link} from 'react-router-dom';
import './AddRoom.css'



export default function AddRoom(props) {

    const [roomType , setRoomType] = useState('');
    const [roomName , setRoomName] = useState('');
    const [roomColor , setRoomColor] = useState('');

    return (
        <div>
            <h3> let's create a new room! </h3>
            {/* dropdown for room type */}
            <select id="selectType" className='selectRoom'  onChange={(t)=> {setRoomType(t.target.value)}}>
                <option value="">choose room type...</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Kitchen">Kitchen</option>
            </select> <br/>
            {/* input for name and color */}
            <input className='selectRoom' onChange={(n)=> {setRoomName(n.target.value)}} type="text" placeholder="name your room" maxLength="5"/> <br/>
            <input className='selectRoom' onChange={(c)=> {setRoomColor(c.target.value)}} type="text" placeholder="enter room color"/> <br/>
            {/* alert if type/name/color is not good  */}
            <Link to = '/'>
            <button type="button" className="btn btn-info" id="creatBtn"
            onClick={() => {if (roomType == '' || roomName == '' || roomColor == ''){return alert ('ERROR')} props.info(roomType , roomName , roomColor) } }>
            create my room!
            </button>
            </Link>
            <Link to = '/'><button id="homeBtn" type="button" className="btn btn-info">home</button></Link>  
        </div>
    )
}



