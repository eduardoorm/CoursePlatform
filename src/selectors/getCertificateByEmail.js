import React from 'react'

export const getCertificateByEmail = (email='',certificados) => {
    if(email ===''){
        return [];
    }
    email = email.toLocaleLowerCase();
    return certificados.filter(item => item.email === email )
}
