const quotes = [    
        {quote : "It's a lack of faith that many people afriad of meeting  challenges, and I belive in myself",
        auther :"Muhammad Ali"
        },
        {quote : "Hard work beats talent when talent doesn't work hard",
            auther :"Tim Notke"
        },
        {quote :"It's hard beat a person who never gives up" ,
            auther :"Babe Ruth"
        },
        {quote : "Don't quit. suffer now and live the rest of your life as a champion",
            auther :"Muhammad Ail"
        },
        {quote : "The harder the battle, the sweeter the victory",
            auther :"Les Brown"
       },
       {quote : "You miss 100% of the shots you don't take",
        auther : "Wayne Gretzky"
       },
       {quote : "You can't put a limit on anything. The more you dream, the farther you get",
        auther : "Michael Phelps"
       },
       {quote : "Make each day your masterpieace",
        auther : "John Wooden"
    
       },
       {quote : "Toay, you have 100% of your life left",
        auther : "Tom Landry"
    
       },
       {quote : "You have to expect things of yourself before you can do them",
        auther : "Michael Jordan"
    
       },
       {quote : "A champion is someone who gets up when he can't ",
        auther : "Jack Dempsey"
    
       },
       {quote : "To all my doubters, thank you very much beacause you guys have also pushed me",
        auther : "Usain Bolt" }
    ]   
      const quotes1 = document.querySelector("#quotes span:first-child"   ) ;
      const quotes2 = document.querySelector("#quotes span:last-child"   ) ;
   
      const todayQoute =  quotes [Math.floor(Math.random()*quotes.length)];
      quotes1.innerText = todayQoute.quote;
      quotes2.innerText = todayQoute.auther;















