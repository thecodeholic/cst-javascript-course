// What is Postman
// https://www.postman.com/downloads/

// json placeholder - make requests with different methods

// Process login form using ajax

const form = document.getElementById('loginForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log("123 ", ev.target)

    const data = {};
    const fields = ev.target.querySelectorAll('[name]');
    fields.forEach(field => {
        data[field.name] = field.value;
    })
    console.log(data);

    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    fetch(ev.target.getAttribute('action'), {
        method: ev.target.getAttribute('method') || 'get',
        body: JSON.stringify(data),
        headers
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
})

// Reading data from input[type=file]
const file = document.querySelector('#imageUpload');
file.addEventListener('change',  ev => {
    console.log(ev.target.files);

    Array.prototype.forEach.call(ev.target.files, file => {
        readImage(file)
            .then(src => {
                const img = document.createElement('img');
                img.style.width = '100px'
                img.src = src;
                document.body.appendChild(img);
            })
    })
});

function readImage(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = function(){
            resolve(fileReader.result)
        }
        fileReader.onerror = reject;
        fileReader.readAsDataURL(file)
    })
}

// localStorage
localStorage.setItem('username', 'Zura');
localStorage.getItem('username'); //Zura
localStorage.removeItem('username');
localStorage.clear();
const user = {
    id: '11',
    username: 'Zura',
    email: 'Something',
    accessToken: 'anything'
}
localStorage.setItem('currentUser', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('currentUser')))

// sessionStorage
sessionStorage.setItem('username', 'Zura');
sessionStorage.getItem('username'); //Zura
sessionStorage.removeItem('username');
sessionStorage.clear();

sessionStorage.setItem('currentUser', JSON.stringify(user));
console.log(JSON.parse(sessionStorage.getItem('currentUser')))

// cookies
function setCookie(cname, cvalue, exseconds) {
    var d = new Date();
    d.setTime(d.getTime() + (exseconds * 1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

// window.location
window.location.hash = '#anything';
location.href = 'https://google.com';


// window.history
window.history.back();
window.history.forward();

// encodeURIComponent, decodeURIComponent

// desktop notifications
