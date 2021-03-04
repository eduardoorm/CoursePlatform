
 import '../App.js';
 const d= document;


  const getFecha =() =>{

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

  const countdown = (id,limitDate,finalMessage) => {
    const $countdown = d.getElementById(id);
    console.log("deberia imprimir" ,$countdown);
   let countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countdownDate-now,
        days=Math.floor(limitTime/(1000*60*60*24)),
        hours = (
            "0"+ Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))
            ).slice(-2),
        minutes=(
            "0"+ Math.floor((limitTime % (1000*60*60))/(1000*60))
            ).slice(-2),
        seconds=(
            "0"+ Math.floor((limitTime % (1000*60))/(1000))
            ).slice(-2);

            let Regresiva = `Faltan ${hours}h : ${minutes}m : ${seconds}s`
            $countdown.innerText = Regresiva;
            
        if(limitTime <= 0){
            clearInterval(countdownTempo);
            countdown("countdown",getFecha() , "Feliz cumpleaños");
        }

    }, (1000));
}


   countdown("countdown",getFecha(), "Feliz cumpleaños");
   




