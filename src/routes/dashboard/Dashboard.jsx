import React from 'react'
import './dashboard.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdCheckCircleOutline, MdCircle, MdPersonAdd } from 'react-icons/md';
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
              <div className="completed">
                <span className="progress-bar">
                  <CircularProgressbar value={completedPercentage} text={`${completedPercentage}%`} />
                </span>
                <span className="progress-bar-title"><MdCircle /> Completed</span>
              </div>
              <div className="in-progress">
                <span className="progress-bar">
                  <CircularProgressbar value={inProgressPercentage} text={`${inProgressPercentage}%`} />
                </span>
                <span className="progress-bar-title"><MdCircle /> In-progress</span>
              </div>
              <div className="not-started">
                <span className="progress-bar">
                  <CircularProgressbar value={notStartedPercentage} text={`${notStartedPercentage}%`} />
                </span>
                <span className="progress-bar-title"><MdCircle /> Not Started</span>
              </div>
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