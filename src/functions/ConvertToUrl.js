
export function convertToUrl (cadena){
    if(!cadena){
        return cadena
    }
    const regex = / /gi;
    const urlReplace = cadena.trim().replace(regex,'-');  
        if(urlReplace.includes('?')){
            const regexInterrogation = /\?\w*/g;
            const formated = urlReplace.replace(regexInterrogation,'&')
            return formated
        }
    return urlReplace
}
