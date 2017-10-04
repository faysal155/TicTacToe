
var turn = false;
function play (event){
console.log(event);
event.target.innerHTML=turn?"0":"x";
turn=!turn;
}
