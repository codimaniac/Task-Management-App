import React from 'react'
import './dashboard.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdCheckCircleOutline, MdCircle, MdPersonAdd } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';
import TaskList from '../../components/task-list/TaskList';
// import InviteUsers from '../../components/invite-users/InviteUsers';
import SortedTask from '../../components/SortedTask';
import { useFetchTasks } from '../../hooks/useFetchTasks';
import { countTaskByValue } from '../../utils/taskManager';

const Dashboard = () => {
  const [tasks, loading, error] = useFetchTasks()
  const [numOfTaskCompleted] = countTaskByValue(tasks, "status", "Completed")
  const [numOfTaskInProgress] = countTaskByValue(tasks, "status", "In-progress")
  const [numOfTaskNotStarted] = countTaskByValue(tasks, "status", "Not Started")
  const completedPercentage = Math.round((numOfTaskCompleted/tasks.length) * 100)
  const inProgressPercentage = Math.round((numOfTaskInProgress/tasks.length) * 100)
  const notStartedPercentage = Math.round((numOfTaskNotStarted/tasks.length) * 100)

  

  return (
    <section className="container">
      <div className="dashboard-welcome">
        <h1 className='welcome-msg'>Welcome Back, Piastri! 👋</h1>
        <div className="invite-btn"><MdPersonAdd /> Invite</div>
        {/* <InviteUsers /> */}
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
              <div className="not-started">
                <span className="progress-bar">
                  <CircularProgressbar value={notStartedPercentage} text={`${notStartedPercentage}%`}
                    styles={buildStyles({
                      textSize: '1rem',
                      pathColor: '#ff3b30',
                      textColor: '#290000',
                      trailColor: '#d6d6d6',
                    })} />
                </span>
                <span className="progress-bar-title"><MdCircle /> Not Started</span>
              </div>
              <div className="in-progress">
                <span className="progress-bar">
                  <CircularProgressbar value={inProgressPercentage} text={`${inProgressPercentage}%`}
                    styles={buildStyles({
                      textSize: '1rem',
                      pathColor: '#007aff',
                      textColor: '#290000',
                      trailColor: '#d6d6d6',
                    })} />
                </span>
                <span className="progress-bar-title"><MdCircle /> In-progress</span>
              </div>
              <div className="completed">
                <span className="progress-bar">
                  <CircularProgressbar value={completedPercentage} text={`${completedPercentage}%`}
                    styles={buildStyles({
                      textSize: '1rem',
                      pathColor: '#4cd964',
                      textColor: '#290000',
                      trailColor: '#d6d6d6',
                    })} />
                </span>
                <span className="progress-bar-title"><MdCircle /> Completed</span>
              </div>
            </div>
          </div>
          <div className="completed-task-list">
            <span className="to-do-list-header">
              <MdCheckCircleOutline className='dashboard-header-icons' />
              Completed Tasks
            </span>
            <SortedTask sortby="status" value="Completed" />
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Dashboard