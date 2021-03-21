import React, { useEffect, useState } from 'react'

export const ClickModulo = (value) => {
    const [clickModulo, setClickModulo] = useState(false)
    useEffect(()=>{
        setClickModulo(value)
    },[])
    
    return clickModulo;
}
