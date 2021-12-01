'use strict';

///Scope in practice

function calcAge (birthyear) {
    const age = 2021 - birthyear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthyear}`;
        console.log(output);

        if (birthyear >= 1981 && birthyear <= 1996) {
          var millenial = true;
          //Create new variable with same name as outer scope's variable
          const firstName = 'steven';

          //Reassigning outer scope's variable
          output = 'New Output'
          const str = `Oh, and you are a millenial, ${firstName}`
          console.log(str)

          function add (a, b) {
              return a + b
          }
          console.log(add(2, 5))
        }
       // console.log(str)
        console.log(millenial)
        //console.log(add(2, 5))
        console.log(output)
    }
    printAge();
    return age;
}
const firstName = 'Nishank'
calcAge(1989);
//console.log(age)
//printAge();