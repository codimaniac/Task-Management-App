import React from 'react'
import './App.css'
import { SideBar, TopBar } from './components'
import { Upcoming, Today, Logout, Dashboard, Tasks, Completed } from './routes'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <TopBar />
      <main>
        <SideBar />
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
