const inputs = document.querySelectorAll("input");



function timmer(endDate)
{
    
    const end = new Date(endDate);  //Date object is use provide the total time from that date
    const now = new Date();
    const diff = (end-now)/1000;

    if(diff<0) 
    {
        clearInterval(timerInterval);
        return;
    }

    const diffInsec = Math.floor(diff % 60);
    inputs[3].value=diffInsec;

    const min = Math.floor((diff / 60) % 60);
    inputs[2].value=min;

    const hour = Math.floor((diff / 3600) % 24);
    inputs[1].value=hour;

    const day = Math.floor(diff / 3600 /24);
    inputs[0].value=day;

}






let timmerintrval;
function showTime()
{ 
    clearInterval(timmerintrval);
    const endDate = inputs[4].value;
    document.querySelector("[end-date]").innerText = endDate;
    timmer(endDate);
    timmerintrval=setInterval(()=>{
        timmer(endDate);
        },1000);

}
