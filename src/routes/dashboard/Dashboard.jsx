import React from 'react'
import './dashboard.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdCheckCircleOutline, MdPersonAdd } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';
import TaskMinimized from '../../components/task-minimized/TaskMinimized';
import TaskList from '../../components/task-list/TaskList';

const Dashboard = () => {
  const completedPercentage = 10
  const inProgressPercentage = 40
  const notStartedPercentage = 60

  return (
    <section className="container">
      <div className="dashboard-welcome">
        <h1 className='welcome-msg'>Welcome Back, Piastri! 👋</h1>
        <div className="invite-btn"><MdPersonAdd /> Invite</div>
      </div>
      <div className="content">
        <TaskList />
        <div className="task-status">
          <div className="task-status-graph">
            <div className="task-status-header">
              <AiOutlinePieChart className='dashboard-header-icons' />
              Task Status
            </div>
            <div className="graph">
              <span className="completed" style={{width: "6.5rem", height: "auto", color: "var(--primary-color)" }}>
                <CircularProgressbar value={completedPercentage} text={`${completedPercentage}%`} />
              </span>
              <span className="completed" style={{width: "6rem", height: "6rem" }}>
                <CircularProgressbar value={inProgressPercentage} text={`${inProgressPercentage}%`} />
              </span>
              <span className="completed" style={{width: "6rem", height: "6rem" }}>
                <CircularProgressbar value={notStartedPercentage} text={`${notStartedPercentage}%`} />
              </span>
            </div>
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