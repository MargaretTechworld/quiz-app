import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  loading: false,
  error: '',
};

export const getQuestions = createAsyncThunk('questions/getQuestions', async () => {
  const question = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple');
  const data = await question.json();
  return data;
});

const quizSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        const question1 = action.payload.results;
        const question2 = question1.map((quizQuestion) => {
          quizQuestion.id = nanoid();
          return quizQuestion;
        });
        state.questions = question2;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default quizSlice.reducer;
