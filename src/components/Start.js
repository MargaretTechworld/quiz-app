import { NavLink } from 'react-router-dom';

const Start = () => (
  <section className="quiz-start">
    <h1>Quizzical</h1>
    <p>Some description if needed</p>
    <NavLink to="/questions">
      <button type="button" className="check-button">Start quiz</button>
    </NavLink>
  </section>
);
export default Start;
