'use strict'

//this wont worj unless the script is loaded after the body mode is created

//there is a load event that runs on everything, whe  the window is loaded,
//everthing is loaded

//for every event you can register a event handler with a property
//named "on<event-name>" a event handler is a function
window.onload = function(){
    document.body.style.backgroundColor = "#eeeeee";

};

//javascript has a special object called the global aka "window"
//every variable in global scope is actually stored on the window

//a more flexible way to do this
window.addEventListener('load', ()=>{
    let header = document.body.firstElementChild;
    header.textContent = 'DOM Changed this';
});

//ideally we don't wait all the way until windoe loads
//that means all images, etc. have downloaded

//all we really need is the elements to exist in the DOM and not be null
//DOMContentLoader event fires sooner
window.addEventListener('DOMContentLoader', ()=> {
    let header = document.getElementById('header-text');
    let colA = document.getElementById('colA');

    //we have getElementsbyId, getElements, getElementsByClassName, getElementsByTagname
    //we also have querySelector (to get first mathing element)
    //..according to CSS selector syntax
    //and querySelectorAll (to get all matching elements)
    document.querySelector('#header-text');
    let clickerCounter = 0;
    header.addEventListener('click', ()=> {
        clickerCounter++;
        header.textContent = `DOM changed this (clicked ${clicker} time )`;

        //we can also use textContent property to get and set the text element

        colA.innerHTML = '<em>Col</em> <u>A</u>';
    })
    header.addEventListener('mouseover', () => {
        //well create an element
        let footer = document.createElement('h2');
        //well add some text inside it
        footer.textContent = '© 2019 Revature';
        //well insert is into the DOM tree (specfically at the end of the body)
        document.body.appendChild(footer);
    });

    //let table = document.getElementById('the-table');

    //a listener on the first cell
    //table.rows[0].cells[0].addEventListener('click', printEventDetails);
    //pass the third parameter true (overriding the default false)
    //.. to set the handler to capturing mode
    //a second listener on the whole table(capturing)
    //table.addEventListener('click', printEventDetails, true);
});

function printEventDetails(event){
    //if your event handlers take an arguement it will be set to the event object

    //type is the name of the event, eg 'click'
    console.log(`event.target: ${event.type}`);
    //target is the element that fired th event originally
    console.log(`event.target: ${event.target}`);
    //currenttarget is the element that this event handler is registered
    console.log(`event.currenttarget: ${event.currentTarget}`);
    //"this" is bound to the same as currentTarget(unless this is an arrow function)
    console.log(`this: ${this}`);
    console.log('');

    //methods availible on the event object:
        //- preventfault()
        //-----browser had default event handlers - egclick on a form button submits,
        //pressing enter on a form field also submits
        //clicking on a link navigates to that page
    //prevent default lets you stop that default behavior from occurring

    //stopPropagation()
        //this switches off all future event handlers in the sequence of capturing
        //target, bubbling phase, etc.

    //stopImmediatePropagation()
        //this switches off all subsequent handlers of this event,
        //even ones on the same element( currentTarget)

    //using these stopPropagation ones is generally bad practice
        
}
