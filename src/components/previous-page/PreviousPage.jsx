import React from 'react'
import './previouspage.css'
import { HiArrowLeft } from 'react-icons/hi'
import { Link, useNavigate} from 'react-router-dom'

const PreviousPage = ({ prevPathname }) => {
    const navigate = useNavigate()

    return (
        <div className="previous-page" onClick={() => navigate(-1)}>
            <HiArrowLeft className='md-arrow-left'/>
        </div>
    )
}

export default PreviousPage