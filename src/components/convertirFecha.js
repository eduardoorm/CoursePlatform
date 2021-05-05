export const convertirFecha=(date)=>{
    const fecha_respuesta= `${date.getUTCFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    return fecha_respuesta;
 }
