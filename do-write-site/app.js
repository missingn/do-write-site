
const but = document.querySelector("#login-form ");
const input = document.querySelector ("#login-form input");
const hiUsername = document.querySelector("#greeting");
const reset = document.querySelector("#reset");


function butclick (event){event.preventDefault();
   const username = input.value ;
      but.classList.add("hidden")   ; 
         hiUsername.classList.remove("hidden");
         hiUsername.innerText="Hello " + username ;
         localStorage.setItem("username",username);
};

function showLogin () {but.classList.remove("hidden") 
                     hiUsername.classList.add("hidden");
      };

but.addEventListener("submit" , butclick);

const savedUsername = localStorage.getItem("username");

if (savedUsername===null){ but.classList.remove("hidden")}
   else {but.classList.add("hidden"); 
      const username = input.value ;
      hiUsername.classList.remove("hidden");
      hiUsername.innerText="Hello " + savedUsername ;
      };

reset.addEventListener("click",showLogin)
   

//const age = parseInt(prompt("How old are you?")); //parseInt 222  문자 타입을 숫자 타입으로변경해주는거
//if (isNaN(age)) { ;console.log("오류입니다")}
   //else {console.log(age);};







// const a = document.querySelector("div.hi:first-child h1");


// function clickHi(){  if(a.style.color==="blue"){a.style.color="tomato";} 
//                      else {a.style.color="blue";} 
//                      }      

// a.addEventListener("click",clickHi);

// const ranColor = ["a", "b", "c", "d", "e", "f"];
// let num = Math.floor(Math.random() * ranColor.length); 숫자랜덤으로 뽑고 정수만 남게하는 것
// console.log(num); 
//h1.classlist.toggle("a클래스이름")  a클래스가 있다면 없애주고 a가없다면 a를 추가해주는 토글 