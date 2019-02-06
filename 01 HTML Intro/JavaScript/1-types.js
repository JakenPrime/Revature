'use strict';

console.log('Hello JS');

//type undefined
var x; //undefined
x = undefined; //undefined
x = {}.name; // uninitialized variable or object

//type number
x=1;
X= 3.14;
// in JS, integers and decimals have the same type out internal representation is basically "double"
//(64-bit IEEE floating point)
x = Infinity;
x = -Infinity;
x = 4/0; //Infinity
x = 5 / 'abc'; //NaN (not a number)

//type string

x = 'abc';
x = "abc";  //single or double quotes exactly the same
x = "abc"[0]; //also a string

//type boolean
x = true;
x = false;
x = (3===3) || false; //true

//type object
x = {}; //empty object
x = {
    //fields
    name = 'Bill',//properties
    age: 30    
};

x.height = 120;
//x = x.name;  //access properties with dot(.)
x = x['height']; //access properties with indexing[]

//functions (still type object, even though typeof says differnt )
//in JS, funstions are first-class objects
x = function(n){
    return n;
}
// ^^^^^^^^^^^^^^^^^
//"function expression"

//type null
//typeof lies and says it's an object
x = null;
//undefined meand "non-initialized variable"
//null means "no object here"

//type symbol (new in ES6), used for unique identifiers

// JS only has these types: number, string, boolean, object, undefined, null, symbol


console.log(x);
console.log('value of x: ' + x);
console.log('type of x: ' + typeof(x));

/* in javascript you don't actually have to end lines with a semicolon
(but sometimes in inferrs the end of the line wrongly)
*/

/*
JavaScript has familiar control structures from C, Java
*/

if('abc'.length > 1)
{
    console.log('true');
}

/*
we have if, else, else if
we have switch statements
switch(key)
case value;
break;
default;
break;
*/

//we have loos, while loops and do-while loops
for (var i = 0; i<a0; i++)
{
    console.log(i);
}

//we have arrays
x = []; //empty array
x = [1,2,3,4,5, 'abc', null]
console.log(x)
x.forEach(function(e){
    console.log(e);   
});

//we have seen funtion expressions we can also declare functions variables this way:

function add(a,b,c){
    console.log(a,b,c);
    //this is a breakpoint
    debugger;
    return a+b+c;
}

//if you don't pass enough parameters, it's undefined
add(1,2);
//if you pass too many they are ignored
add(1,2,3,4);

function print(x)
{
    console.log(x);
}

//without any return what will this do
console.log(print(3));
//void functions (no return statements) return undefined

console.log(ass('a' + 'b' + 'c'));