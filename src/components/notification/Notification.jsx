import './notification.css'
import { MdClose, MdNotifications } from 'react-icons/md'

const Notification = () => {
  return (
    <div className="notification">
        <MdNotifications size={24}/>
        <p className="message">The task <b className='high'>"Complete the project report"</b> has been completed.</p>
        <MdClose size={24} className="delete-notification"/>
    </div>
  )
}

export default Notification