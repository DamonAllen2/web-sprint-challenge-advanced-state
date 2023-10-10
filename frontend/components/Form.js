import React from 'react'
import { connect } from 'react-redux'
import { postQuiz, inputChange } from '../state/action-creators'

const Form = ({newQuestion, newTrueAnswer, newFalseAnswer, postQuiz, inputChange}) => {

  const onChange = evt => {
    const value = evt.target.value;
    const target = evt.target.id
    inputChange(target, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz(newQuestion, newTrueAnswer, newFalseAnswer);
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer}/>
      <button id="submitNewQuizBtn" 
      disabled={newQuestion.trim() === '' || 
      newTrueAnswer.trim() === '' || 
      newFalseAnswer.trim() ==='' ? true : false}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer,
  }
}

export default connect(mapStateToProps, {postQuiz, inputChange})(Form);
