import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Sports from './pages/Sports';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/sports' element={<Sports></Sports>} />
        <Route path='/politics' element={<div>politics</div>} />
        <Route path='/entertainment' element={<div>entertainment</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
