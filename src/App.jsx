import React from 'react'
import './App.css'
import { SideBar, TopBar } from './components'
import { Upcoming, Today, Logout, Dashboard, Tasks, Completed } from './routes'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const hideLayout = location.pathname === '/logout'

  return (
    <>
      { !hideLayout && <TopBar /> }
      <main>
        { !hideLayout && <SideBar /> }
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/tasks" element={ <Tasks /> } />
          <Route path="/today" element={ <Today /> } />
          <Route path="/upcoming" element={ <Upcoming /> } />
          <Route path="/completed" element={ <Completed /> } />
          <Route path="/logout" element={ <Logout /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
