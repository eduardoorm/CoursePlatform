const d= document;
export const getFecha =() =>{
    let getMonth = new Date().getMonth();
    const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
    let getDay = new Date().getDate();
    let getHour = new Date().getHours();
    let getAñio = new Date().getFullYear();
    getHour += 6;

    if(getHour>=24){
        getHour -=24;
        getDay +=1;
    } 

    let getMinute = "03";
    let getSecond = "10";
    const fecha = 
    `${months[getMonth]} ${getDay.toString()}, ${getAñio.toString()} ${getHour}:${getMinute}:${getSecond}` ;
     return (fecha);
  }

export const countdown =(limitDate,finalMessage) => {
    setTimeout(() => {
        let $countdown = d.getElementById("countdown");
        
        let countdownDate = new Date(limitDate).getTime();
        let countdownTempo = setInterval(() => {
            let now = new Date().getTime();
            let limitTime = countdownDate-now;
            let days=Math.floor(limitTime/(1000*60*60*24));
            let hours = (
                "0"+ Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))
                ).slice(-2);
            let minutes=(
                "0"+ Math.floor((limitTime % (1000*60*60))/(1000*60))
                ).slice(-2);
            let seconds=(
                "0"+ Math.floor((limitTime % (1000*60))/(1000))
                ).slice(-2);
    
                // let Regresiva = `Faltan ${hours}h : ${minutes}m : ${seconds}s`
                // // console.log(Regresiva);
                // $countdown.innerText = Regresiva;
                
            if(limitTime <= 0){
                clearInterval(countdownTempo);
                countdown("countdown",getFecha() , "Feliz cumpleaños");
            }
          
        }, (1000));
   
    }, 2000);
    
}
countdown(getFecha(), "Feliz cumpleaños")


