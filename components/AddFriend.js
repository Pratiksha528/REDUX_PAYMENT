import React, { useEffect, useState } from 'react'
import { addFriends } from '../state/friends/friendsSlice';
import { changeVal } from '../state/friends/friendSlice';
import { useDispatch, useSelector } from 'react-redux';

function AddFriend() {
    
    let friend = useSelector((state) =>state.friend);

    let friends = useSelector((state)=>state.friends);

    let [myFriend,setMyFriend] = useState(friend);

    const dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        setMyFriend({...myFriend,[e.target.id]:e.target.value});
        
    }

    useEffect(()=>{
        dispatch(changeVal(myFriend));
    }, [myFriend]);

    function addNewFriend(e){
        e.preventDefault();
        dispatch(addFriends(myFriend));
}

    console.log(friend);
    console.log(friends);
    return (
        <div>
            <h2> Add-Friend</h2>
            <div>
                <label> <b> Name </b></label>
                <br />
                <input value={friend.name} type='text' id='name' onChange={(e)=>{ handleChange(e)}} />
                <br />
                <input value={friend.balance} type='text' id='balance' onChange={(e)=>{ handleChange(e)}}/>
                <button onClick={(e)=>{ addNewFriend(e) }}>Add Friend</button>
            </div>
        </div>
    )
}

export default AddFriend