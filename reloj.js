const clock=document.getElementById('clock');

function updateClock(){
    const fecha=new Date();

    let hora=fecha.getHours();
    let minutos=fecha.getMinutes();
    let segundos=fecha.getSeconds();

    const ampm=hora>=12 ? 'PM' :'AM';

    hora=hora%12;
    hora=hora === 0 ? 12:hora;

    hora=String(hora).padStart(2,'0');
    minutos=String(minutos).padStart(2,'0');
    segundos=String(segundos).padStart(2,'0');

    const timeString=`${hora}:${minutos}:${segundos} ${ampm}`;

    clock.textContent=timeString
}
setInterval(updateClock, 1000);

updateClock();