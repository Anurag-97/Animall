import React,{useState} from 'react'
import axios from '../axios'
import './createHabit.css'

function CreateHabit({user}) {
    const [habit,sethabit]=useState({
        habitname:"",
        duration:"",
        target:"",
        countdone:0
    })
    function handlename(e){
        sethabit({...habit,habitname:e.target.value})
    }
    function handleduration(e){
        sethabit({...habit,duration:e.target.value})
    }
    function handletarget(e){
        sethabit({...habit,target:e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault();
        const newhabit={
            user:user.gmail,
            name:habit.habitname,
            duration:Number(habit.duration),
            target:Number(habit.target),
            countdone:0
        }
        axios.post('habits/add',newhabit)
        .then(res=>alert('Habit Added'))
        .catch(err=>console.log(err))
        sethabit({
            habitname:"",
            duration:"",
            target:"",
            countdone:0})
    }
    return (
        <div>
           <form onSubmit={handlesubmit}>
            <div className="name">
                <label className='inputhead'>Habit Name :  </label>
                <input required name='habitname' value={habit.habitname} className='input' type='text' placeholder='A name for the habit please!' onChange={handlename} />
            </div>
            <div className="name">
                <label className='inputhead'>Duration(in minutes) :  </label>
                <input required name='duration' value={habit.duration} className='input' type='number' placeholder='How long in each sitting!' onChange={handleduration} />
            </div>
            <div className="name">
                <label className='inputhead'>Target Frequency:  </label>
                <input required name='target' value={habit.target} className='input' type='number' placeholder='For how many days you want to do it' onChange={handletarget} />
            </div>
            <div className="name">
                <input className="submit" type="submit" />
            </div>
           </form>
        </div>
    )
}

export default CreateHabit
