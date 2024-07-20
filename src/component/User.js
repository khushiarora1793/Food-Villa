import { useState } from "react";

const User=({name})=>{
      const [count]=useState(0);
      const [count2]=useState(2);
    return(
        <div className="user_card">
              <h1>count:{count}</h1>
              <h1>count2:{count2}</h1>
            <h1>name:{name}</h1>
            <h2>address: goraul</h2>
             <h1>team-name:loded_groupe</h1>
        </div>
    )
}
export default User;