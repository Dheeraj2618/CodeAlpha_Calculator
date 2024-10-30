
let v = document.getElementById('res');
  let num1 = document.getElementById('res').value;

function Solve(val) {
    v.value += val;
}
function Result() {
   let x=v.value
   let y=eval(x);
  v.value=y
   return y
}
function Clear() {
    v.value=''
}
function Back() {
   
    v.value = v.value.substring(0, v.value.length - 1);
}