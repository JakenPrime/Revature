'using strict'

let Theid = 'admin';
let Thepass = 'superpassword';



document.addEventListener('submit', ()=>{

    let idInput = document.getElementById('id-input').value;
    let passInput = document.getElementById('pass-input').value;

    let button = document.getElementById('submitButton');

    if(idInput === Theid && passInput === Thepass ){
        window.location = "Welcome.html";
    }
    else {
        return;
    }

    // window.location = "Welcome.html";

    event.preventDefault();
});


