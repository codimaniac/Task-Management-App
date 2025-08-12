// import React, { useEffect, useState } from "react";
import "./task-list.css";
import { MdToday } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SortedTask from "../SortedTask";

const TaskList = ({ sortby, value }) => {
  const location = useLocation();
  const path = location.pathname;
  const showAddTask = path === "/tasks";

  return (
    <div className="to-do-list">
      <div className="to-do-list-header">
        <div className="to-do-list-header-title">
          <MdToday className="dashboard-header-icons" />
          To-Do List
        </div>
        {showAddTask && (
          <Link to="/addtask">
            <div className="add-task">
              <FaPlus className="add-task-icon" />
              <span className="add-task-text">Add Task</span>
            </div>
          </Link>
        )}
      </div>
      <SortedTask sortby={ sortby } value={ value }/>
    </div>
  );
};



export default TaskList;
