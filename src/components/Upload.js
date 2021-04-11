import React from 'react'
import { useState } from 'react';

export const Upload = () => {
        const [file, setFile] = useState(null);
        const handleSubmit = (e)	=> {
            const formData = new FormData();
            formData.append("imagen", file);
            fetch('http://localhost:3100/upload', {
                method: "POST",
                body: formData
            })
                .then((res) => res.json()).
                then(res => console.log(res))
            e.preventDefault();
        }
    
        return (
        <>
        <img src="https://intesla.s3.sa-east-1.amazonaws.com/Captura%20de%20pantalla%20de%202021-04-07%2010-06-35.png?AWSAccessKeyId=AKIAWLHEZRD4LAWUJRTC&Expires=1740263061&Signature=hs%2B%2BDPHF2mdXgG7sxvQcPyGj11A%3D"></img>
         <form id="form" onSubmit={handleSubmit}>
                <input id="upload" onChange={e => setFile(e.target.files[0])} name="file" type="file" ></input>
                <button type="submit">subir</button>
         </form>
       </>
    )
}
