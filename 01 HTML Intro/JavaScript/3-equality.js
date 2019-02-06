'use strict'

function compare(a, b)
{
    //another things ES6 added, string interpolation
    console.log("a: " + a + "b: " + b);
    console.log(`a:${a}, b: ${b}`);
    //you use backticks (`) instead of quotes and put JS expression inside ${}

    console.log(`a==b:${a==b}`);
    console.log(`a===b: ${a===b}`);

}

//== double equals or loose equals (negations !=)
//=== tripel equals or strict equals(negation !==)
//compare(1, 1);
//compare(0, 1);
//compare(5, "5");
compare({}, {}); // not equal - were comparing reference equality for objects not value equality
compare(NaN, NaN); //not equal by floating point value rules
//we do have a function isNaN() to check that

//double equals tried to compare vaule without comparing type
//triple equals compares both value and type
//always use triple equals unles you have a good reason to use double