// My Custom Function 
function Mygreeting() {
    // Greeting ON deffirent period of days
    let d = new Date();
    let getH = d.getHours();
    let greet = document.getElementById('greeting');
    const period = document.createElement('h2');

    // Condition for each period
    if (getH < 12) {
        period.textContent = 'Good Morning!';
    } else if (getH === 12 || getH < 16) {
        period.textContent = 'Good Afternoon!';
    } else if (getH < 21) {
        period.textContent = 'Good Evening!'
        //period.style.fontSize = "1rem";
    } else {
        period.textContent = 'Good Night!'
    }

    greet.appendChild(period);
    console.log(period);
}
Mygreeting();