import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import First from './pages/First';
import Second from './pages/Second.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/first' element={<First />} />
        <Route path='/second/:articleLink' element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
