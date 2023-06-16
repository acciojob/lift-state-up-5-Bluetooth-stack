import React from "react";

const Child = ({setStatus})=>{
    
    return(
        <div>
            <label>Username:</label>
            <input type="text" ></input>
            <br></br>
            <br></br>
            <label>Password:</label>
            <input type="password" ></input>
            <br></br>
            <br></br>
            <button onClick={()=>{setStatus()}}>Login</button>
        </div>
    )
}

export default Child;