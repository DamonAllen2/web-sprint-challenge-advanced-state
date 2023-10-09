import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectAnswer, fetchQuiz, postAnswer, setMessage } from '../state/action-creators'

const Quiz = ({selectAnswer, fetchQuiz, quiz, selectedAnswer, postAnswer, setMessage}) => {
  useEffect(() => {
    if (quiz === null) {
      console.log('works')
      fetchQuiz();
    }
    
  }, [])

  const onSelect = (number) => {
    console.log(number);
    setMessage('')
    selectAnswer(number);
  }

  const onSubmit = () => {
    let questionId = null;
    let quizId = quiz.quiz_id;
    if (selectedAnswer === 0) {
      questionId = quiz.answers[0].answer_id;
    } else {
      questionId = quiz.answers[1].answer_id;
    }
    console.log(quizId)
    postAnswer(questionId, quizId);
  }

  if (quiz === null) {
    return 'Loading next quiz...'
  }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."

        
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={selectedAnswer === 0 ? 'answer selected' : 'answer'}>
                {quiz.answers[0].text}
                <button onClick={() => onSelect(0)}>
                {selectedAnswer === 0 ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={selectedAnswer === 1 ? 'answer selected' : 'answer'}>
              {quiz.answers[1].text}
                <button onClick={() => onSelect(1)}>
                  {selectedAnswer === 1 ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={onSubmit} disabled={selectedAnswer === null ? true : false}>Submit answer</button>
          </>
       
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
  };
};

export default connect(mapStateToProps, {selectAnswer, fetchQuiz, postAnswer, setMessage})(Quiz);
