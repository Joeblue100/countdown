
//Set date we're counting down from
const countDownDate = new Date("Apr 19, 2022 12:00:00");
console.log(countDownDate);

 
//Update count every one second
const x = setInterval(function(){ 

    //Get Today's date
    const today = new Date()
    console.log(today);

    // Distance between now and the alotted time
    const difference = countDownDate - today;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(difference/(1000 * 60 * 60 * 24));
    const hours = Math.floor((difference %(1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60))/ 1000);

    

    //Display in the countdown tag in the html file

   const time = `${days}d : ${hours}h: ${minutes}m: ${seconds}s`;

   document.getElementById("countdown").innerHTML = time;

    //If the countdown is finished give a text
    
    if(difference < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "BLAST OFF!!!";
     }
}, 1000); 
