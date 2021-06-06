let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    d = new Date();
    date = d.toLocaleDateString('en-US', options);
    time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById('timer').innerHTML = time + " on " + date;

}, 1000);