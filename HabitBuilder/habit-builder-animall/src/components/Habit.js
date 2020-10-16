import React from 'react';
import './Habit.css'

function Habit({habit,deletehabit,increment}) {
    function buttontext(){
        if(habit.countdone===0)
        return <button className="butt" onClick={()=>{increment(habit._id)}} >Lets Start</button>
        else return <button className="butt"  onClick={()=>{increment(habit._id)}} >I did it one more time</button>
    }
    return (
            <tr>
                <td>{habit.name}</td>
                <td>{habit.duration}</td>
                <td>{habit.target}</td>
                <td>{habit.countdone}</td>
                <td>
                 {buttontext()}  |  <button onClick={()=>{deletehabit(habit._id)}}  >delete</button> 
                </td>
            </tr>
    )
}

export default Habit
