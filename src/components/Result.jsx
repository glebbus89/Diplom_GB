import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export const Result = (props) => {
    return (
        <div className='result-wrapper'>
            <h2 className='result-title'>Ваш результат: </h2>
            <div className='result-count'>{props.result}</div>
        <Link to = '/'><input
            onClick={props.getResult} className='result-button' type='button' value='Начать заново' /></Link>
    </div>
    );
};