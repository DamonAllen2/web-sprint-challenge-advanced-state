// ❗ You don't need to add extra action creators to achieve MVP
import axios from 'axios'
import { MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  SET_QUIZ_INTO_STATE, 
  SET_QUIZ_NULL, 
  SET_SELECTED_ANSWER, 
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM } from './action-types'

export function moveClockwise(newState) {
  if (newState > 5) {
    return {type: MOVE_CLOCKWISE, payload: 0}
  } else {
    return {type: MOVE_CLOCKWISE, payload: newState}
  }
}

export function moveCounterClockwise(newState) {
  if (newState < 0) {
    return {type: MOVE_CLOCKWISE, payload: 5}
  } else {
    return {type: MOVE_COUNTERCLOCKWISE, payload: newState}
  }
 }

export function selectAnswer(number) {
  return {type: SET_SELECTED_ANSWER, payload: number}
 }

export function setMessage(message) {
  return {type: SET_INFO_MESSAGE, payload: message}
 }

export function setQuizNull() { 
  return {type: SET_QUIZ_NULL}
}

export function setQuizData(data) { 
  return {type: SET_QUIZ_INTO_STATE, payload: data}
}

export function inputChange(target, value) { 
  return {type: INPUT_CHANGE, target: target, value: value}
}

export function resetForm() {
  return {type: RESET_FORM}
}

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  dispatch(setQuizNull());
  axios.get('http://localhost:9000/api/quiz/next')
  .then((res) => {
    console.log(res.data)
    const data = res.data;
    dispatch(setQuizData(data))
  })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
}
export const postAnswer = (questionId, quizId) => dispatch => {
  axios.post('http://localhost:9000/api/quiz/answer', {
    "quiz_id": quizId,
    "answer_id": questionId
  })
  .then((res) => {
    console.log(res.data)
    dispatch(selectAnswer(null));
    dispatch(setMessage(res.data.message));
    dispatch(fetchQuiz())
  })
  .catch(err => dispatch(setMessage(err)))
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
}
export const postQuiz = (newQuestion, newTrueAnswer, newFalseAnswer) => dispatch => {
  axios.post('http://localhost:9000/api/quiz/new', {
    "question_text": newQuestion,
    "true_answer_text": newTrueAnswer,
    "false_answer_text": newFalseAnswer
  })
  .then((res) => {
    console.log(res);
    dispatch(setMessage(`Congrats: "${newQuestion}" is a great question!`));
    dispatch(resetForm());
  })
  .catch(err => dispatch(setMessage(err)))
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
