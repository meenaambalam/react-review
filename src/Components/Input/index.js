import React from 'react';
import './style.css'

function Input(props){
    return (
        <div>
            <span>{props.name}: </span>
            <input
                name={props.name}
                value={props.value}
                type={props.type || "text"}
                placeholder={props.placeholder || null}
                onChange={props.onChange || function(e) {console.log(e.target.value)}}
            />
        </div>
    );
}

export default Input;