import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';

const store = configureStore({
  reducer: {
    questions: quizReducer,
  },
});

export default store;
