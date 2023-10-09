// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'

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

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
