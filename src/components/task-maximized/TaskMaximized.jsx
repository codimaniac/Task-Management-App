import React from 'react'
import './task-maximized.css'
import BirthdayPics from '../../assets/birthday.jpg'

const TaskMaximized = () => {
  return (
    <div className='task-maximized-container'>
      <div className="task-maximized-header">
        <img src={ BirthdayPics } alt="Birthday Picture" />
        <div className="key-details">
          <h2>Attend Nischal’s Birthday Party</h2>
          <div className="task-meta">
            <p className="priority">Priority: <span className="moderate">Moderate</span></p>
            <p className="status">Status: <span className="not-started">Not Started</span></p>
            <p className="created">Created on: 20/06/2023</p>
          </div>  
        </div>
      </div>
      <div className="task-detailed-description">
        Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)

        A cake, with candles to blow out. (Layer cake, cupcake, flat sheet cake)
        The birthday song.
        A place to collect gifts.

        Optional:
        Paper cone-shaped party hats, paper whistles that unroll.
        Games, activities (carry an object with your knees, then drop it into a milk bottle.)
        Lunch: sandwich halves, or pizza slices, juice, pretzels, potato chips…THEN cake & candles and the song.
      </div>
    </div>
  )
}

export default TaskMaximized