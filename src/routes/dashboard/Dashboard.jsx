import React from 'react'
import './dashboard.css'
import { MdCheckCircleOutline, MdPersonAdd } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';
import TaskMinimized from '../../components/task-minimized/TaskMinimized';
import TaskList from '../../components/task-list/TaskList';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard-welcome">
        <h1 className='welcome-msg'>Welcome Back, Piastri! 👋</h1>
        <div className="invite-btn"><MdPersonAdd /> Invite</div>
      </div>
      <div className="dashboard-content">
        <TaskList />
        <div className="task-status">
          <div className="task-status-graph">
            <span className="to-do-list-header">
              <AiOutlinePieChart className='dashboard-header-icons' />
              Task Status
            </span>
          </div>
          <div className="completed-task-list">
            <span className="to-do-list-header">
              <MdCheckCircleOutline className='dashboard-header-icons' />
              Completed Tasks
            </span>
            <TaskMinimized /> 
            <TaskMinimized />
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Dashboard