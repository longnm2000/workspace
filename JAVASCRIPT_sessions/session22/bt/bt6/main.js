function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0;
}

function isValidDate(date, month, year) {
  if (
    Number.isInteger(date) &&
    Number.isInteger(month) &&
    Number.isInteger(year)
  ) {
    return false;
  }
  if (date < 1 || date > 31) {
    return false;
  }
  if (month < 1 || month > 12) {
    return false;
  }
  if (year < 0) {
    return false;
  }
  if (
    (month === 4 || month === 6 || month === 9 || month === 11) &&
    date > 30
  ) {
    return false;
  }

  if (month === 2) {
    if (isLeapYear(year)) {
      return date <= 29;
    } else {
      return date <= 28;
    }
  }
  return true;
}

function getNextDate(date, month, year) {
  var nextdate = date + 1;
  var nextMonth = month;
  var nextYear = year;
  if (nextdate > 31) {
    nextdate = 1;
    nextMonth++;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  } else if (
    (month === 4 || month === 6 || month === 9 || month === 11) &&
    nextdate > 30
  ) {
    nextdate = 1;
    nextMonth++;
  } else if (month === 2) {
    if (isLeapYear(year) && nextdate > 29) {
      nextdate = 1;
      nextMonth++;
    } else if (!isLeapYear(year) && nextdate > 28) {
      nextdate = 1;
      nextMonth++;
    }
  }

  return {
    date: nextdate,
    month: nextMonth,
    year: nextYear,
  };
}

function formatDate(date, month, year) {
  return ("0" + date).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + year;
}

var date = +prompt("Nhập ngày:");
var month = +prompt("Nhập tháng:");
var year = +prompt("Nhập năm:");

if (isValidDate(date, month, year)) {
  console.log("Ngày " + formatDate(date, month, year) + " là ngày hợp lệ.");
  var nextDate = getNextDate(date, month, year);
  console.log(
    "Ngày tiếp theo là: " +
      formatDate(nextDate.date, nextDate.month, nextDate.year)
  );
} else {
  console.log("Ngày " + formatDate(date, month, year) + " không hợp lệ.");
}
