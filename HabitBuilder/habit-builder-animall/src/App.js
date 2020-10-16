import React,{useState} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import CreateHabit from './components/CreateHabit';
import HabitList from './components/HabitList';
import Navbar from './components/Navbar';
import Rewards from './components/Rewards';
import Login from './components/Login';
import axios from './axios'

function App() {
  const [user,setuser]=useState(null)
  const onsignin=(userin)=>{
    const current={
      name:userin.displayName,
      gmail:userin.email,
    }
    setuser(current);
    axios.post('/adduser',current);
  }
  return (
    <div className="App">
      {!user?
      <Login onsignin={onsignin} />
      :
      <Router>
        <Navbar />
        <Route path='/' exact  render={(props)=>(<HabitList {...props} user={user} />)} /> 
        <Route path='/create'  render={(props)=>(<CreateHabit {...props} user={user} />)} />
        <Route path='/rewards' render={(props)=>(<Rewards {...props} user={user} />)} />
      </Router>
    } 
    </div>
  );
}

export default App;
