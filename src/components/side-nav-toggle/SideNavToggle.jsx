import './sidenavtoggle.css'
import { MdMenu, MdClose } from 'react-icons/md'

const SideNavToggle = ({isOpen, toggleSideNav}) => {
  return (
    <div className="hamburger" onClick={toggleSideNav}>
        {isOpen ? <MdClose className='md-close' /> : <MdMenu className='md-menu'/> }
    </div>
  )
}

export default SideNavToggle