export default function FirstFactorial(num) { 

  
var f=1;



    for (var i = 1; i <= num; i++) {
        f*= i;
    }
    console.log('The factorial of ',{num} ,'is', {f});

  return f; 

}
 