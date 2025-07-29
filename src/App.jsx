import React from 'react'
import './App.css'
import { SideBar, TopBar } from './components'
import { Upcoming, Vital, Login, Dashboard, Tasks, Completed, SignUp } from './routes'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const hideLayout = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <>
      { !hideLayout && <TopBar /> }
      { !hideLayout && <main>
        <SideBar />
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/tasks" element={ <Tasks /> } />
          <Route path="/vital" element={ <Vital /> } />
          <Route path="/upcoming" element={ <Upcoming /> } />
          <Route path="/completed" element={ <Completed /> } />
        </Routes>
      </main> }
      <Routes>        
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>
    </>
  )
}

export default App
