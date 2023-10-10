// ❗ You don't need to add extra reducers to achieve MVP
import { 
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  SET_QUIZ_INTO_STATE, 
  SET_QUIZ_NULL, 
  SET_SELECTED_ANSWER, 
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM } from './action-types'
import { combineReducers } from 'redux'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return action.payload;
    case MOVE_COUNTERCLOCKWISE:
      return action.payload;
    default:
      return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload;
    case SET_QUIZ_NULL:
      return null;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state;
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.target]: action.value
      }
    case RESET_FORM:
      return {
        ...state,
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: '',
      }
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
