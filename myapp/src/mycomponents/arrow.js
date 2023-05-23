import React from 'react';
import './shanto.css'

const Arrow = () => {
    let myBtn = (a) => {
        alert(a);
    }
    return (
        <div>
            <h1>Arrow Function</h1>
            <button onClick= {myBtn.bind( this, 'Arrow button working with alert')} class="myBtn">Visit Website</button>
        </div>
    )
};

export default Arrow;