const days = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun"
}

const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}


const utils = {
  formatDate: function(timestamp){
    const date = new Date(timestamp);


    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
}
export default utils
