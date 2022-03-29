function calculateDaysBetweenDates(begin, end) {
  var date1 = new Date(begin);
  var date2 = new Date(end);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays + " days";
}

console.log(calculateDaysBetweenDates("01/01/2018", "01/05/2018"));

// Output:  4 days

function calculateMonthsBetweenDates(begin, end) {
  var date1 = new Date(begin);
  var date2 = new Date(end);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  var diffMonths = Math.ceil(diffDays / 30);
  if (diffMonths == 0) {
    return "Less than a month";
  } else if (diffMonths == 1) {
    return "1 month";
  } else {
    return diffMonths + " months";
  }
}

console.log(calculateMonthsBetweenDates("01/01/2018", "06/05/2018"));
// Output:  6 months
