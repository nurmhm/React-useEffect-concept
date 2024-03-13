import { useEffect } from "react";
import { useState } from "react"
import Persons from './AllEffect'



export default function UseEff(){

   const [user , setUser] = useState([]);
    
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
   }
      ,[])

   return (
      <div className="box">
         <h1>This is UseEffect: {user.length}</h1>
         {
            user.map(firend => <Persons person = {firend}> </Persons>
         
            )
         }
      </div>
   )
}