console.log("Hello world");
let today = new Date() ;

function getDate(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDate()];
  let date = d.getDate();
  let month = months[d.getDate()];
  let year = d.getFullYear();

  return `${day}  ${date} ${month} ${year} `;

}

const date = document.querySelector(".date");

date.innerHTML = getDate(today) ;

// Get time 

function showTime () {
  let date =new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session ="AM";

  if ( hour == 0 ) {
      hour = 12 ;
  } else if ( hour > 12 ) {
    hour -= 12 ;
    session ="PM";
  }

  // If it's a single digit append 0 
  hour = hour < 10 ? "0"+ hour : hour ;
  minute = minute < 10 ? "0"+ minute : minute ;
  second = second < 10 ? "0"+ second : second ;
  let time =  `${hour}:${minute}:${second}:${session} `;

  document.querySelector(".time").innerHTML = time ;
   
}
setInterval(showTime,1000);