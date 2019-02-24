 import React from 'react';
 import './Person.css'

 const person = (props) => {
     return (
        <div className="Person">
            <p onClick={props.click}>I am a {props.name} {props.age} years old</p>
            <span>{props.children}</span><br />
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
     )
     
 }

 export default person