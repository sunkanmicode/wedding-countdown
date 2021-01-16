const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector('.give-away');
  const deadline = document.querySelector('.deadline');
  const countDown = document.querySelectorAll('.countdown h4')

//Ending Date...
const futureDate = new Date(2021, 1, 26, 10, 30, 0)
console.log(futureDate);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes(); 
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
let weekday  = futureDate.getDay();
weekday = weekdays[weekday]


giveaway.innerHTML = ` <h3>Date: 
    ${weekday} ${date}th, ${month} ${year}  ${hour}:${min}am </h3> `


    const futureTime = futureDate.getTime();
    

    const getCountDown = ()=>{
        const today = new Date().getTime();
        const countTime = futureTime - today;
        // 1s = 1000
        // 1m = 60s
        // 1hr = 60m
        // 1d = 24hrs

        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMins = 60 * 1000;
        const oneSec = 1000;

        const days = Math.floor(countTime / oneDay);
        const hours = Math.floor((countTime % oneDay) / oneHour);
        const mins = Math.floor((countTime % oneHour) / oneMins);
        const secs = Math.floor((countTime % oneMins) / 1000);

        const format = (count)=>{
            if(count < 10){
                return (count= `0${count}`)
            }
            return count
        }

        const values = [days, hours, mins, secs]

        countDown.forEach((count, index)=>{
            count.innerHTML = format(values[index])
        })

       

        if(countTime < 0){
            clearInterval(counter)
            deadline.innerHTML = `<h1>Congraduations</h1>`
        }

    }
    const counter = setInterval(getCountDown, 1000)
    getCountDown();