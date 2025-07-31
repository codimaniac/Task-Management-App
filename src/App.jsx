import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Upcoming, Vital, Login, Dashboard, Tasks, Completed, SignUp } from './routes';
import Layout from './components/Layout'; // adjust path as needed

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleNav = () => setIsSideNavOpen(!isSideNavOpen);

  return (
    <Routes>
      {/* Routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Routes with layout */}
      <Route element={<Layout isSideNavOpen={isSideNavOpen} toggleNav={toggleNav} />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/vital" element={<Vital />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/completed" element={<Completed />} />
      </Route>
    </Routes>
  );
}

export default App;