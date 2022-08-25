var i = 0;
var w = new Audio('sounds/tom-1.mp3');
var a = new Audio('sounds/tom-2.mp3');
var s = new Audio('sounds/tom-3.mp3');
var d = new Audio('sounds/tom-4.mp3');
var j = new Audio('sounds/snare.mp3');
var k = new Audio('sounds/crash.mp3');
var l = new Audio('sounds/kick-bass.mp3');

for(i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click", ply);
}

function ply(){
  animation(this.innerHTML)
  switch(this.innerHTML){
    case "w":
       w.play();
       break;

     case "a":
        a.play();
        break;

      case "s":
         s.play();
         break;

      case "d":
         d.play();
         break;

      case "j":
         j.play();
         break;

      case "k":
          k.play();
          break;

      case "l":
          l.play();
          break;

      default: console.log(this.innerHTML);
  }}

  document.addEventListener("keypress", function(){
    sound(event.key)
    animation(event.key)
  });

  function sound(key){
    switch(key){
      case "w":
         w.play();
         break;

       case "a":
          a.play();
          break;

        case "s":
           s.play();
           break;

        case "d":
           d.play();
           break;

        case "j":
           j.play();
           break;

        case "k":
            k.play();
            break;

        case "l":
            l.play();
            break;

        default: console.log(this.innerHTML);
    }
  }

  function animation(key){
  var g = document.querySelector("."+key)
  g.classList.add("pressed");
  setTimeout(function(){
    g.classList.remove("pressed")
   },100);
  }
