
export function convertToUrl (string){
    if(!string){
        return string
    }
    const regex = / /gi;
    const urlReplace = string.trim().replace(regex,'-');  
        if(urlReplace.includes('?')){
            const regexInterrogation = /\?\w*/g;
            const formated = urlReplace.replace(regexInterrogation,'&')
            return formated
        }
    return urlReplace
}
