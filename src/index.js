module.exports = function solveEquation(equation) {
  let D;
  let newstring = equation.split(" ");
  let numbers = new Array;
  let increment_for_numbers = 0;
  let increment_for_operators = 0;
  let xmass = new Array;
  let operators = new Array;
  for(let i = 0; i<newstring.length;i++){
    if(parseInt(newstring[i])){
    numbers[increment_for_numbers] = Math.round(parseInt(newstring[i]));
    increment_for_numbers++;
    }
    if((newstring[i] == '+')||(newstring[i] == '-')||(newstring[i] == '*')){
     operators[increment_for_operators] = newstring[i];
     increment_for_operators++;
     }// your implementation
}
if(operators[3] == '+')
D = numbers[1]*numbers[1] - 4*numbers[0]*numbers[2];
else if(operators[3] == '-')
D = numbers[1]*numbers[1] + 4*numbers[0]*numbers[2];
if(operators[1] == '+'){
xmass[0] = Math.round(((-1*numbers[1])+Math.sqrt(D))/(2*numbers[0]));
xmass[1] = Math.round(((-1*numbers[1])-Math.sqrt(D))/(2*numbers[0]));
}
else if(operators[1] == '-'){
xmass[0] = Math.round((numbers[1]+Math.sqrt(D))/(2*numbers[0]));
xmass[1] = Math.round((numbers[1]-Math.sqrt(D))/(2*numbers[0]));
}
if(xmass[0]>xmass[1]){
  let temp = xmass[0];
  xmass[0] =xmass[1];
  xmass[1] = temp;
}
return xmass;
}