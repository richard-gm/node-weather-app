const weatherForm = document.querySelector("form");
const UserNameValue = document.getElementById("firsNameID");
const searchValue = document.getElementById("locationID");
const messageOne = document.getElementById("p1ID");
const messageTwo = document.getElementById("p2ID");
const messageThree = document.getElementById("p3ID");

weatherForm.addEventListener("submit", e => {
    e.preventDefault();
    const location = searchValue.value
    const userName = UserNameValue.value

    //messageOne.textContent = 'Loading data...'
    messageOne.textContent = ''
    messageTwo.textContent = ''
    messageThree.textContent = ''


    const url = "http://localhost:3000/weather?address=?" + location;
    fetch(url).then(responde => {
        responde.json().then(data => {
            if (data.error) {
                messageTwo.textContent = data.error
                messageThree.textContent = 'Sorry ' + userName + '. please try again...'
                console.log(userName.value)
            } else {
                messageOne.textContent = 'Hey! ' + userName + ' this is what I found: '
                messageTwo.textContent = 'Location: ' + data.location
                console.log(data.location)
                messageThree.textContent = 'Forecast: ' + data.forecast
            }
        });
    });
});
