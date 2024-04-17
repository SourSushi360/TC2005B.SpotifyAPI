import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/register/Login'
import Dashboard from './components/register/Dashboard'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
