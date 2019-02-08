'use strict'

document.addEventListener('DOMContentLoaded', ()=>{
    let jokerHeader = document.getElementById('joke-text');
    let jokeButton = document.getElementById('joke-button');

    jokeButton.addEventListener('click',() => {
        //well write a get joke to make a request ot the joke api
        let jokeText = getJoke();

        jokerHeader.textContent = jokeText;
    })
});

function getJoke(){
    //this object is provided by the broswer to let us do AJAX
    //AJAX stands for Asynchronus JavaScript and XML
    //but what it means in practice is,  HTTPs requests vis JAvaScript
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () =>{
        console.log(`readyState: ${xhr.readyState}`);

        //readyState starts at 0 and counts upwards
        if(xhr.readyState === 4)
        {
            //4 means weve received a response
            let responseJSON = xhr.response;
            console.log(responseJSON);
            
        }
        //http respinse status 200-299 indicates success
        if(xhr.status >= 2000 && xhr.status < 300){
            console.log('success');
        }

        //JSON.parse to deserialize JSON
        //JSON.stringify to serialize JSON
        
        else{
            //some kind of error(eg 404 not found)
            console.log('failure');
        }
    });

    //set up request to be made
    xhr.open('get', 'http://api.icndb.com/jokes/random/');

    //send the request
    xhr.send();
}