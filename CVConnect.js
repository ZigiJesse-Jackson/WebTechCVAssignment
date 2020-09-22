//transferring data from IndexCV.html to CV.html via localStorage

const name = localStorage.getItem('name');
document.getElementById('name').innerHTML = `${name}`;

const gender = localStorage.getItem('gender');
document.getElementById('gender').innerHTML = `${gender}`;

const number = localStorage.getItem('phoneNumber');
document.getElementById('phone-number').innerHTML = `${number}`;

const email = localStorage.getItem('email');
document.getElementById('email').innerHTML = `${email}`;

const address = localStorage.getItem('address');
document.getElementById('address').innerHTML = `${address}`;