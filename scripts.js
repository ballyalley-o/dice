
  
  let images = [
    "dice-svg/dice-one.svg",
    "dice-svg/dice-two.svg",
    "dice-svg/dice-three.svg",
    "dice-svg/dice-four.svg",
    "dice-svg/dice-five.svg",
    "dice-svg/dice-six.svg"];
    let dice = document.querySelectorAll("img");


   function roll(){
        dice.forEach(function(die){
            die.classList.add("shake");
        });
        setTimeout(function(){
            dice.forEach(function(die){
                die.classList.remove("shake");
            });
            let dieOneValue = Math.floor(Math.random()*6)
            ;
            let dieTwoValue = Math.floor(Math.random()*6)
            ;
            console.log(dieOneValue,dieTwoValue);
            document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
            document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
            document.querySelector("#total").innerHTML = "Dude, your ROLL is " + 
            ( (dieOneValue +1) + (dieTwoValue +1) );
        },
        1000
        );
    
    }

