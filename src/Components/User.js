import React, { useEffect, useState } from 'react'

const User = (props) => {

    const [count, setCount] = useState(0);
    const {fname, location} = props;

  
  return (
    <div className='user-card'>
        <h1>Count : {count}</h1>
        <button className='extra' onClick={()=>{
            setCount(count+1);
        }}>
            Extra
        </button>
        <h2>First Name : {fname}</h2>
        <h2>Last Name : Marthala</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @rohini_reddy30</h4>
    </div>
  )
}

export default User;