const button = document.getElementById('myButton');
const headline = document.getElementById('myHeadline');


button.addEventListener('click', function() {
    if (headline.innerText === 'Hej Hej') {
     
        headline.innerText = 'Javascript funkade!';
        button.style.backgroundColor = "#782611"
    } else {
        headline.innerText = 'Hej Hej';
    }

});