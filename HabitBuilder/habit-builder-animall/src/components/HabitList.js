import React,{useState,useEffect} from 'react'
import Habit from './Habit'
import axios from '../axios'
import './habitList.css'


function HabitList({user}) {
    const [list,setlist]=useState([]);
    useEffect(()=>{
        const current={
            params:{
            user:user.gmail
            }
        }
        axios.get('/habits',current)
        .then((response)=>{
            //console.log(response.data)
            setlist(response.data)
        })
        .catch((err)=>console.log(err))
    },[])
    function deletehabit(id){
        axios.delete(`/habits/delete/${id}`)
        .then(console.log("Habit Deleted"))
        .catch(err=>console.log(err))
        setlist(list.filter(res=>res._id!==id))
    }
    function increment(id){
        const array=[];
        axios.put(`/habits/update/${id}`)
        .then(()=>{
            for(var i=0;i<list.length;i++){
                if(list[i]._id===id)
                    list[i].countdone=list[i].countdone+1;
                array.push(list[i]);
            }
            setlist(array);
        })
        .catch((err)=>console.log(err));
    }
    return (
        <div>
        <br />
        <h2>Habits logged</h2>
        <table className='table'>
            <thead className='tablehead'>
            <tr>
            <th>Habitname</th>
            <th>Duration</th>
            <th>Target</th>
            <th>CountDone</th>
            <th></th>
            </tr>
            </thead>
            <tbody className='tablebody'>
                {
                    list.map(lst=>{
                        return <Habit habit={lst} key={lst._id} deletehabit={deletehabit} increment={increment} />
                })
                }
            </tbody>

        </table>
    </div> 
    )
}

export default HabitList
