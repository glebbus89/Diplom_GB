import React from 'react';
import '../App.css';
import {  Link } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

export const Question = (props) => {
    
        

    
    return (
            <Route path = {props.path}>
            <div className='test-wrapper' >
                <h2 className='question_subtitle'>Выберите один правильный ответ.</h2>
                <h2 className='question_title'><span className='question_title_span' >{props.questionNumber}</span>{props.question}</h2>
                <div className='question-inputs'>
                    <input
                    onClick= {(e) => props.getAnswer(e)} className='question-input' type='radio' id='q1' name='q1' value = {props.value1} />
                    <label htmlFor= 'q1'>{props.var1}</label>
                </div>  
                <div className='question-inputs'>
                    <input
                        onClick= {(e) => props.getAnswer(e)} className='question-input' type='radio' id='q2' name='q1' value = {props.value2} />
                    <label htmlFor= 'q2'>{props.var2}</label>
                </div>  
                <div className='question-inputs'>
                    <input 
                    onClick= {(e) => props.getAnswer(e)}className='question-input' type='radio' id='q3' name='q1' value = {props.value3}  />
                    <label htmlFor= 'q3'>{props.var3}</label>
                </div> 
                <div className='question-inputs'>
                    <input
                    onClick= {(e) => props.getAnswer(e)} className='question-input' type='radio' id='q4' name='q1' value = {props.value4} />
                    <label htmlFor= 'q4'>{props.var4}</label>
                </div>  
                <div className='question-button'>
                    <Link to = {props.link}><input 
                    onClick={props.getReset} className='question-button-next' type='button' value={props.next} /></Link>
                </div>
            </div>
            </Route>
                     
    );
}
