'use strict'


//objects can have functions as properties too
//object oriented idea: encaosulate data and behavior together
let obj ={
    name: 'Nick',
    sayName: function(){
        console.log('Hello World');
    },
    sayName2: function(){
        //this refers to the object before the dot when this function is called
        console.log(this);
        console.log(this.name);
    }
};

let obj2 ={
    name: "bob",
    sayName2: obj.sayName2,
}

obj.sayName();
obj.sayName2();
obj2.sayName2();

//reminder on functions as values, dont' confuse these
function return3()
{
    return 3;
}
let theFunctionItself = return3; //a function
let theFunctionReturnValue = return3();//3


//ES5 has no classes but does have constructors
//weve used boolean, string
//name constructors with capital letters
class Person {
    constructor(name, age, finger) {
        //define data properties of a new person
        this.name = name;
        this.age = age;
        this.fingers = fingers;
        //define methods/functions of a new Person
        this.sayName = function () {
            console.log(this.name);
        };
    }
}

//we call constructors with the "new" keyword
let nick = new  Person('Nick', 26, 10);
console.log(nick);
nick.sayName();

//all the new does is 1. make a new empty object({}) 2. then call the function you put after
//this new with this set that new object

//ES5 uses protoypal inheritance to have something LIKE a class heirarchy without classes

//a Student will have everythingand also a "school property"
function Student(name, age, fingers, school)
{
    this.school = school;
    this.__proto__=new Person(name, age, fingers);
}

//the way property access works in JS is, if we try to access a property on an object
//and it's not defined on that object

//we fall back on that object prototype and on and on until we hit Object(which has no prototype)

let student = new Student('Bill', 50, 10, 'UW');
console.log(student);
console.log(student.name);

//In ES6 we can use classes instead of old-fashioned constructors and prototypes
class Person {
    constructor(name, age, finger) {
        //define data properties of a new person
        this.name = name;
        this.age = age;
        this.fingers = fingers;


        //define methods/functions of a new Person
        
    }
}

let x= {
    return3(){
        return 3;
    
    }
}

//Person will be the parent of the student class
class Student extends Person{
    constructor(name, age, fingers, school){
        //super means the parent class's constructor
        super(name, age, fingers);

        this.school = school;
    }
}


let student2 = new Student('Mehrab', 90, 5, 'UH');
console.log(student2);

//ES6 classes are essentially just syntatic sugar around prototypal inheritance