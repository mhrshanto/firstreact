import React from 'react';

function MyFunctional(props) {
    function doit() {
        alert("Button is clicked")
    }
    return (
        <div>
            <h1>{props.name} is a good boy and he is only {props.age}</h1>
            <button onClick={doit}>View Profile</button>
        </div>    
    )
};

export default MyFunctional;