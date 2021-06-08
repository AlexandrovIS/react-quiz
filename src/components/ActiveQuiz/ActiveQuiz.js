import React from 'react'
import style from './ActiveQuiz.module.css'
import AnswersList from './AnswerList/AnswersList'  

const ActiveQuiz = props=>(
    <div className={style.ActiveQuiz}>
    <p className={style.Question}> 
      <span>
        <strong>{props.answerNumber}.&nbsp;</strong>
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
)  

export default ActiveQuiz