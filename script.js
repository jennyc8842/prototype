// alert("Welcome to a place where you can relax/study! Click start whenever you're ready.")



// window. = makes to a global variable

// start button
document.querySelector("button").addEventListener("click", function() {

  function userMinsInput () {

  window.userMins = prompt("How many minutes do you want to relax/study for?");
  

  // if user input is negative
  if(window.userMins < 0){
     alert("Type a positive number!")
  }

  // timer that will work every 1 min
  window.makeTimer = setInterval(timer, 60000);


  document.querySelector("#timer").innerHTML = userMins + " minutes remaining...";


  }


// displays mins on screen + prompts user
 userMinsInput();

 
 // dropdown menu for music
   var userPickMusic = document.querySelector("#music").value;
  

  if(userPickMusic == "hiphop"){
  

          if(window.userMins > 0){
            var hiphop = new Audio('hiphop (1).mp3');
            hiphop.loop = true;
            hiphop.play();
          }
          if(window.userMins <=0) {
            hiphop.loop = false;

            
           
           
          } 
       }


 if(userPickMusic == "rnb"){

         if(window.userMins > 0){
            var rnb = new Audio('RNBfunk.mp3');
            rnb.loop = true;
            rnb.play();
        }
    
        if(window.userMins ==0){
            rnb.loop = false;
           
        }
 }
 if(userPickMusic == "cafe"){
   
         if(window.userMins > 0){
            var cafe = new Audio('cafe.mp3');
            cafe.loop = true;
            cafe.play();
        }
          if(window.userMins <=0){
            cafe.loop = false;
           
        }
 }
 
  if(userPickMusic == "electro"){
   
         if(window.userMins > 0){
            var electro = new Audio('electro.mp3');
            electro.loop = true;
            electro.play();

         }
         if(window.userMins <=0){
            electro.loop = false;
           
         }
}


  

});
 

// timer decreases and stops at 0 
 function timer (){
    // var userPickMusic = document.querySelector("#music").value;
    
    
   if (window.userMins > 0){
     
        window.userMins--;
        // updates per minute
        document.querySelector("#timer").innerHTML = window.userMins + " minutes remaining...";
  

        console.log(window.userMins); // to see mins go down


   } 


   if (window.userMins <= 0){
        document.querySelector("#timer").innerHTML = window.userMins + " minutes remaining...";
        clearInterval(window.makeTimer);
       
        alert("BEEP BEEP BEEP!")
        alert("Click the start button again to restart!")

         
        

        }


    

        } 
      
 
 
  //  window.convertSecs = Math.floor(window.userMins*60);
  //  if (window.convertSecs > 0){
  //       window.convertSecs--;
  //       console.log(window.convertSecs); // to see secs go down

  //  } else {
        
  //       clearInterval(window.makeTimer);
  //       alert("BEEP BEEP BEEP!")
  //       }
  //    } 
   
  

    






















// https://www.w3schools.com/jsref/met_audio_play.asp

// timer using for loop?
















