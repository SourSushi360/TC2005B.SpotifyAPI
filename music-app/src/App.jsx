import './index.css'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Register />} />
    </Routes>
  )
}

export default App
