import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="habittracker">
            <Link to="/" className="individual">HabitTracker</Link>
            <Link to="/create" className="individual">Create New Habit</Link>
            <Link to="/rewards" className="individual">Check Rewards</Link>   
        </div>
    )
}

export default Navbar
