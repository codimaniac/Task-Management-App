import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Upcoming, Vital, Login, Dashboard, Tasks, Completed, SignUp, NotFound, Landing, Profile } from './routes';
import { Layout, ProtectedRoutes, TaskForm } from './components';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleNav = () => setIsSideNavOpen(!isSideNavOpen);

  return (
    <Routes>
      {/* Routes without layout */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />

      {/* Routes with layout */}
      <Route element={<Layout isSideNavOpen={isSideNavOpen} toggleNav={toggleNav} />}>
        <Route path="/" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
        <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        <Route path="/tasks" element={<ProtectedRoutes><Tasks /></ProtectedRoutes>} />
        <Route path="/vital" element={<ProtectedRoutes><Vital /></ProtectedRoutes>} />
        <Route path="/upcoming" element={<ProtectedRoutes><Upcoming /></ProtectedRoutes>} />
        <Route path="/completed" element={<ProtectedRoutes><Completed /></ProtectedRoutes>} />
        <Route path="/addtask" element={<ProtectedRoutes><TaskForm title="Add New Task" submitTitle="Add Task" /></ProtectedRoutes>} />
        <Route path="/edittask" element={<ProtectedRoutes><TaskForm title="Edit Task" submitTitle="Update Task" /></ProtectedRoutes>} />
      </Route>
    </Routes>
  );
}

export default App;