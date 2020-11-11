import React from 'react';

function AddFriends(){
    const friends=[{id:1,name: 'Aswathi'},{id:2,name:'Ramya'},{id:3,name:'Nethravathi'},{id:4,name:'Stafny'}]
    //const names=['a','b','c']
    const ADD=()=>{
        console.log(friends.name)
    }
    
   const friendlList=friends.map(friend=>
    <h2 className="add">
        {friend.name}
        <button onClick={ADD}>Add</button>
    </h2>)
    
    return(
        <div className="add-friend">
          
           {friendlList}
        </div>
    )
}
export default AddFriends;