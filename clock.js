const clock = document.querySelector("#clock") ;

const date = new Date() ;



function getClock (){ const date = new Date() ; 
    let hour = String(date.getHours()).padStart(2,"0");
    //let hour = String(date.getHours()).padStart(2,"0"); 
    //글자수는 2글자로 부족한 부분은 0으로 채우는 함수 
    let minute = String(date.getMinutes()).padStart(2,"0");
    let second = date.getSeconds();
   if (second <10){second = "0"+second };
    clock.innerText= hour +" : "+ minute +" : " +second };
setInterval(getClock,0);