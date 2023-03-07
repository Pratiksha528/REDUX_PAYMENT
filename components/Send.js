import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBalance } from '../state/friends/friendsSlice';

function Send() {

  let friends = useSelector((state) =>state.friends);
  const dispatch = useDispatch();

  let [friend, setFriend] = useState({
    name:"",
    amount:0
  });
    
  
  function handleChange(e){
    e.preventDefault();
    setFriend({...friend,[e.target.id]:e.target.value});
}

function addAmount(e){
  e.preventDefault();
  dispatch(updateBalance(friend));
}

  return (
  
    <div>
      <h2>  Send </h2>
      <div>
        <br />
        
        <select id="name" onChange={(e)=>{ handleChange(e) }}>
          <option value="">Select Friend</option>
          {
            friends.map((friend,i)=>{
              return<option key={i} value={ friend.name }> {friend.name}</option>

            })
          }
            
        </select>

<br />

<label>Amount</label>

<br />

<input  value={friend.amount} id='amount'  onChange={(e)=>{ handleChange(e)}} />

<br />

<button  onClick={(e)=>{ addAmount(e) }}>Send</button>

<br />

       </div>

    </div>
    
  )
}

export default Send;