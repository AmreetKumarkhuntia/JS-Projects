const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays=[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

let futuredate=new Date(2022,1,26,12,30,00,00,00);
const giveawaydate=document.getElementById("GiveawayDate");

const day=futuredate.getDay();
const month=futuredate.getMonth();
const date=futuredate.getDate();
const year=futuredate.getFullYear();
const hour=futuredate.getHours();
const min=futuredate.getMinutes();

giveawaydate.innerHTML=`${weekdays[day]} ${date} ${months[month-1]} ${year} ${hour}:${min} am `;

setInterval(function update(){
    const CurrentTime=new Date();
    if(CurrentTime<=futuredate)
    {
        const Diff=futuredate-CurrentTime;
        //Future usage
        const OneDay=24*60*60*1000;
        const OneHour=60*60*1000;
        const OneMin=60*1000;
        let days=parseInt(Diff/OneDay);
        let hours=parseInt((Diff%OneDay)/OneHour);
        let mins=parseInt(((Diff%OneDay)%OneHour)/OneMin);
        let secs=parseInt((((Diff%OneDay)%OneHour)%OneMin)/1000);


        document.getElementById("days").innerHTML=days;
        document.getElementById("hours").innerHTML=hours;
        document.getElementById("mins").innerHTML=mins;
        document.getElementById("secs").innerHTML=secs;

    }
},1000);