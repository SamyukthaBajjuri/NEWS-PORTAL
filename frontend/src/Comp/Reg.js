
import React,{ useState } from 'react'
import axios from 'axios'
const Reg = () => {
  let [user,setUser]=useState({"_id":"","name":"","dob":"","phno":"","pwd":"","gen":"","state":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/reg",user).then((res)=>{
      setMsg(res.data.msg)
      setUser({"_id":"","name":"","dob":"","phno":"","pwd":"","gen":"","state":""})
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <h2>Login</h2>
        <input type='text' placeholder='enter email' name='_id' value={user._id} onChange={fun}/>
        <input type='text' placeholder='enter name' name='name' value={user.name} onChange={fun}/>
        <input type='text' placeholder='enter phno' name='phno' value={user.phno} onChange={fun}/>
        <input type='password' placeholder='enter password' name='pwd' value={user.pwd} onChange={fun}/>
        <input type='date'  name='dob' value={user.dob} onChange={fun}/>
        <select name='state' onChange={fun} value={user.state}>
        <option selected disabled value=''>select the state</option>
        <option value='ts'>Telangana</option>
        <option value='ap'>Andhrapradesh</option>
        <option value='mh'>Maharashtra</option>
        <option value='mp'>Madhyapradesh</option>
        </select>
        <div className='radio'>
          Gender: <br/> <input type='radio' value='male' onChange={fun} name='gen' checked={user.gen=='male'}/>Male<br/>
          <input type='radio' value='female' onChange={fun} name='gen' checked={user.gen=='female'}/>Female
        </div>
        <button onClick={add}>Register</button>
      </div>
    </div>
  )
}
export default Reg
