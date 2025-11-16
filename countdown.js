const countdown = () => {
    const countDate = new Date ('April 23, 2024 12:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //The work of timing
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Time calculation
    const finalDay = Math.floor(gap / day);
    const finalHour = Math.floor (gap % day / hour);
    const finalMinute = Math.floor (gap % hour / minute);
    const finalSecond = Math.floor (gap % minute / second);

    //HTML updating
    document.querySelector("#day").innerHTML = finalDay;
    document.querySelector("#hour").innerHTML = finalHour;
    document.querySelector("#minute").innerHTML = finalMinute;
    document.querySelector("#second").innerHTML = finalSecond;
};
setInterval(countdown, 1000);