import React, { useEffect, useState } from 'react'
import { getUserID } from '../helpers/getUserID';

export const useFetchGetUserID = (id) => {
    const [user, setUser] = useState({
        dataUser:[]
    });
  
    useEffect(()=>{
      getUserID(id)
     .then(item=>{
         setUser({
            dataUser:item
         })
     })
    },[])

    
 return user; 
}
