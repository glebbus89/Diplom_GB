import React from 'react';
import '../App.css';
import {  Link  } from 'react-router-dom';





export const Start = () => {

    

    return (
        <div className="start-wrapper">
        <Link to = '/1'><input className='start-button' type='button' value='Начать тест' /></Link>
        </div>  
    );
};
