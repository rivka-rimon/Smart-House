import React from 'react';
import './Product.css';
import Trash from './Trash.png'

export default function Product(props) {


    return (
        <div>
          <img src={Trash} alt="delete" onClick={()=> {props.delete(props.index)}}/>
          <button className="btn btn-info" id="product"
          onClick = {()=>{
            props.changeColor(props.index);
          }}
          style={{backgroundColor: props.color}}>  {props.productName} </button>
        </div>
    )
}
