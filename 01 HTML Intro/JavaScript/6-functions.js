'using strict'

//call back functions

function add(a, b, onSuccess){
    let result = a+b;
    onSuccess(result);
    //instead of returning a result, ill pass it to a function given me by the caller

}

add(1,2, function(result){
    console.log(result);
});

//my add function allows me to inject any behavior i want into it,
//for it too apply to the result

//that third parameter is called a callback function because the add function call backs to the 
//calling code

//makeHTTPRequest(url, function(){
    //when operation is done run this fuction
//});

//but not yet i can still run code in the meantime

//in ES6 we got a new syntax for function expressions called arrow functions
add(1,2, result => console.log(result));
//we can do zero arguements arrow functions like this:
let func = () => 3; //takes zero arguemtns returns 3

//many arguments like this
let multiply =(x, y) => x*y; //takes 2 paramters return products
//you can also block body arrow functions
let max =(x, y) => {
    if(x>y) return x;
    return y;
};

//with block body (ie braces{}) i use statements separated by semicolons without
//braces i provide one expression

//the way this works is different with arow functions

//regular functions "this" always refers to whatever object left of the dot when
//the function is being called

let obj = {
    name: 'bob',
    func1: function(){
        console.log(this.name);
    },
    func2: () => console.log(this.name)
}

/*let obj2 = {
    name: 'bill',
    func1: objfunc1,
    func2: objfunc2,
}
obj2.func1();
obj2.func2();*/

//the arrow function is copies "this" from the surrounding context

//


function newCounter()
{
    let a = 0;
    return function(){
        a++
        return a;
    }
}

let counter = newCounter();

console.log(counter());
console.log(counter());
console.log(counter());

//using this is a behavior of closure
//i have n ability to directly access "a" but the variable is kept alive

//the inner function (that newCounter returns) "closes over" all the varialbes it references
//i.e closes over the "a"

//sometimes we call the inner functions themselves "closures"

//IIFE immediately invoked function expression
let library = (function() {
    let privateData = 0;

    function privateFunction()
    {
        return privateData;
    }
    return {
        libraryMethod(){
            return privateFunction() + 1;
        },
    };
})();
library.libraryMethod();

//anonymous function that we call as soon as we write it
(function() {console.log('immediately'); })();