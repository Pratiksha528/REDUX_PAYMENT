import React from 'react'
import { useSelector } from 'react-redux';

function Friends() {

  let friend = useSelector((state) =>state.friend);

  let friends = useSelector((state)=>state.friends);
  
  return (
    <div>
      <hr />

       <h2> Friends </h2>

      <div>
        <b>Name:{friend.name}</b><br />
        <b>Balance:{friend.balance}</b><br />
      </div>

      <div>
      <table>

<thead>
    <tr>
        <th>No</th>
        <th>Name</th>
        <th>Balance</th>
    </tr>
</thead>
<tbody>
    {
        friends.map((f,i)=>{
            return(
             <tr key={i}>
                <td>{i+1}</td>
                <td>{f.name}</td>
                <td>{f.balance}</td>
             </tr>
            )
        })
    }
</tbody>

</table>
      </div>
    </div>
  )
}

export default Friends