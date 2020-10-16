import React,{useState,useEffect} from 'react'
import axios from '../axios'
import './rewards.css'

function Rewards({user}) {
    const [reward,setreward]=useState([]);
    useEffect(()=>{
        const current={
            params:{
            user:user.gmail
            }
        }
        axios.get('/habits',current)
        .then((response)=>{
            const array=response.data;
            const temporary=[];
            for(var i=0;i<array.length;i++){
                const temp={
                    habit:array[i].name,
                    amount:Math.floor(array[i].countdone/array[i].target)
                }
                temporary.push(temp)
            }
            setreward(temporary)
        })
        .catch((err)=>console.log(err))
    },[])
    return (
        <div>
            <h3>Hi {user.name}</h3>
            <h3>have a look at your hard earned rewards</h3>
            <table className="rewardstable">
                <thead>
                <tr>
                <th>Habit Name</th>
                <th>Reward earned</th>
                </tr>
                </thead>
                <tbody>
                {reward.map(each=>{
                return (
                    <tr key={each.habit}>
                        <td>{each.habit}</td>
                        <td>{each.amount}</td>
                    </tr>
                )
            })}
                </tbody>
            </table>
        </div>
    )
}

export default Rewards
