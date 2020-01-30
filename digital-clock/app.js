function greeting() {
    const fullDate = new Date();
    const hours = fullDate.getHours();
    const min = fullDate.getMinutes();
    const sec = fullDate.getSeconds();
    
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec; 
}

setInterval(greeting, 1);
