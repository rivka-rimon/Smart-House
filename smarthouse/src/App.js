import React ,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Title from './components/Title'
import HomePage from './components/HomePage'
import Room from './components/Room'
import AddRoom from './components/AddRoom'


function App() {

  const[roomArr , setRoomArr] =
  useState([ ]);

  const[index , setIndex] = useState();

  // remove a room from room array (by props)
  const removeRoom = (i)=>{
    setRoomArr(roomArr.filter((element,index) =>
      (index!= i)
    ))
  }
  

  return (
    <div className="App">
      <Title/>
      <Router>
        <Switch>
        {/* home page component */}
        <Route exact path = '/' component = {() => {return <HomePage arr = {roomArr} homeIndex = {(i) => {setIndex(i);
        }} />} } />
        {/* add room component */}
        <Route exact path = '/addroom' component=
        {() => {return <AddRoom info =
        {(t,n,c) => {let newRoom = [...roomArr , {type: t , name: n, color: c , product: []}]; setRoomArr(newRoom);
        }} />} } />
        {/* room component */}
        <Route exact path = '/room' component = {() => {return <Room index={index}  arr = {roomArr} 
        sendArr = { (r , i) => {roomArr.map ( (element , index) => {if(index == i) {element = r} return element} ) } }
        delete ={(i)=>{removeRoom(i)}}
         />} } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


