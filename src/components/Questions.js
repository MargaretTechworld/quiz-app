import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getQuestions } from '../redux/quizSlice';

const Questions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const {
    questions, loading, error,
  } = useSelector((state) => state.questions);
  console.log(questions);

  return (
    <section>
      {loading && <p>Please wait</p>}
      {error && <p>error</p>}
      {questions.map((question, index) => (
        <div key={question.id} className="question-div">
          <p>{`${index + 1}. ${question.question}`}</p>
          <button type="button">{question.incorrect_answers[0]}</button>
          <button type="button">{question.incorrect_answers[1]}</button>
          <button type="button">{question.incorrect_answers[2]}</button>
          <button type="button">{question.incorrect_answers[0]}</button>
          <button type="button">{question.correct_answer}</button>
        </div>
      ))}
      <div className="button-div">
        <button className="check-button" type="button">Check Answers</button>
      </div>
    </section>
  );
};

export default Questions;
