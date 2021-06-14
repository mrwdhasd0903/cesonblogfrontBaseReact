//格式化时间
function changeDateFormat(date) {
  var arr = date.split("T");
  var d = arr[0];
  var darr = d.split('-');
  var t = arr[1];
  var tarr = t.split('.000');
  var marr = tarr[0].split(':');
  var dd = parseInt(darr[0]) + "/" + parseInt(darr[1]) + "/" + parseInt(darr[2]) + " " + parseInt(marr[0]) + ":" + parseInt(marr[1]) + ":" + parseInt(marr[2]);
  return formatDateTime(dd);
}
/**
 * 将time 转为 n小时前\天前\月前\年前
 */
function formatDistance(time) {
  var dateTimeStamp = new Date(time).getTime()
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var month = day * 30;
  var year = month * 12;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  var result = ""
  if (diffValue < 0) {
    return;
  }


  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  var yearC = diffValue / year
  if (yearC >= 1) {
    return "" + parseInt(yearC) + "年前";
  }
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "个月前";
  } else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else {
    result = "刚刚";
  }

  return result;
}

function formatDateTime(date) {
  let time = new Date(Date.parse(date));
  time.setTime(time.setHours(time.getHours() + 8));
  let Y = time.getFullYear() + '-';
  let M = addZero(time.getMonth() + 1) + '-';
  let D = addZero(time.getDate()) + ' ';
  let h = addZero(time.getHours()) + ':';
  let m = addZero(time.getMinutes()) + ':';
  let s = addZero(time.getSeconds());
  return Y + M + D + h + m + s;
}

function addZero(num) {
  return num < 10 ? '0' + num : num;
}
//将date转为获取x月x日
function changeDateFormatMMDD(date) {
  let arr = date.split("T");
  let d = arr[0];
  let darr = d.split("-");
  let mmdd = parseInt(darr[1]) + "月" + parseInt(darr[2]) + "日";
  return mmdd;
};

//获取day天前的日期
function getDate(day) {
  var date = new Date();
  date.setTime(date.getTime() - 24 * 60 * 60 * 1000 * day);
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

//获取两个日期之间的天数
function getDaysBetween(dateString1, dateString2) {
  var startDate = Date.parse(dateString1);
  var endDate = Date.parse(dateString2);
  var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
  // alert(days);
  return days;
}
export { changeDateFormat, changeDateFormatMMDD, getDate, getDaysBetween,formatDistance }