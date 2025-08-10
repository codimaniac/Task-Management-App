import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Upcoming, Vital, Login, Dashboard, Tasks, Completed, SignUp, NotFound } from './routes';
import { Layout, TaskForm } from './components';

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleNav = () => setIsSideNavOpen(!isSideNavOpen);

  return (
    <Routes>
      {/* Routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />

      {/* Routes with layout */}
      <Route element={<Layout isSideNavOpen={isSideNavOpen} toggleNav={toggleNav} />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/vital" element={<Vital />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/addtask" element={<TaskForm title="Add New Task" submitTitle="Add Task" />} />
        <Route path="/edittask" element={<TaskForm title="Edit Task" submitTitle="Update Task" />} />
      </Route>
    </Routes>
  );
}

export default App;