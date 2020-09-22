function submitted(event) {
    //accessing form by ID
    const indexForm = document.getElementById("CV-Data");
    //prevent default submit action
    event.preventDefault();

    //Values taken from form
    const fname = indexForm.elements["First_Name"].value;
    const lname = indexForm.elements["Last_Name"].value;
    const mname = indexForm.elements["Middle_Name"].value;
    let name = '';
    const gender = document.getElementById('gender-value').value;
    const number = indexForm.elements['phone-number'].value.trim();
    const email = indexForm.elements['email'].value;
    const address = indexForm.elements['address'].value;

    //+ 233 xx xxx xxx or 0xx xxx xxxx or xx xxx xxxx
    // regex used in phone number pattern excluding trailing spaces
    // Regex = /^\+?\(?((\d{3})[-.\s]?|[0])?\)?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$/;

    //handling of if middle name section is not filled
    if (mname === null) {
        name = `${fname} ${lname}`;
    } else {
        name = `${fname} ${mname} ${lname}`;
    }

    //storing values for transfer to next page
    localStorage.setItem('name', name);
    localStorage.setItem('phoneNumber', number);
    localStorage.setItem('gender', gender);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    //directing to CV.html page after all data is stored
    window.document.location = 'CV.html';
}


document.addEventListener('DOMContentLoaded', function() {
    let tester = document.getElementById("CV-Data");
    tester.addEventListener('submit', function(event) {
        submitted(event);
    });
});