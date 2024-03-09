import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import First from './pages/First';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/first' element={<First />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
