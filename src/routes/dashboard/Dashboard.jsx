import React from 'react'
import './dashboard.css'
import { MdCheckCircleOutline, MdPersonAdd, MdToday } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import TaskMinimized from '../../components/task-minimized/TaskMinimized';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard-welcome">
        <h1 className='welcome-msg'>Welcome Back, Piastri! 👋</h1>
        <div className="invite-btn"><MdPersonAdd /> Invite</div>
      </div>
      <div className="dashboard-content">
        <div className="to-do-list">
          <span className="to-do-list-header">
            <div className="to-do-list-header-title">
              <MdToday className='dashboard-header-icons' />
              To-Do List
            </div>
            <div className="add-task">
              <FaPlus className='add-task-icon' />
              <span className='add-task-text'>Add Task</span>
            </div>
          </span>
          <TaskMinimized />
          <TaskMinimized />
        </div>
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