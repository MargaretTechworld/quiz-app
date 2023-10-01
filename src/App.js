import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Questions from './components/Questions';
import Start from './components/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
