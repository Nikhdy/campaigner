import * as moment from 'moment';

export function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

  if (requestMethod) { // Native full screen.
    requestMethod.call(element);
  } else if (typeof (window as any).ActiveXObject !== "undefined") { // Older IE.
    var wscript = new (window as any).ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

export function getFromLS(val: string) {
  const layouts = JSON.parse(localStorage.getItem(val));
  return layouts;
}
export function saveToLS(val: string, data) {
  window.localStorage.setItem(val, JSON.stringify(data))
}


export function getNumberPostFix(val: number) {
  if (val === 2) {
    return 'nd';
  } else if (val === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}


export function getDateKeyValues(period: string, count?: number) {
  let multiplier = count || 0;
  let i = 0;
  switch (period) {
    case "week":
      i = 7;
      break;
    case "month":
      i = 30;
      break;
    case "half-month":
      i = 15;
      break;
    default:
      break;
  }
  const dates = [];
  for (let j = i; j >= 0; j--) {
    dates.push({
      key: moment().subtract(j * 1 + i * multiplier, "d").startOf("day").valueOf(),
      displayName: moment().subtract(j * 1 + i * multiplier, 'd').format('DD'),
      isSunday: moment().subtract(j * 1 + i * multiplier, "d").isoWeekday() === 7,
      month: moment().subtract(j * 1 + i * multiplier, 'd').format('MMM')
    });
  }

  return dates;
}

export function datePastDayStr(myDate) {
  var fromNow = moment(myDate).fromNow();
  return moment(myDate).calendar(null, {
    lastWeek: '[Last] dddd',
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    sameElse: function () {
      return "[" + fromNow + "]";
    }
  });
}

export function dateTimeStr(myDate) {
  return moment(myDate).format('HH:mmA');
}

export function apiSuccess(type: string){
  return type+'_SUCCESS';
}

export function apiFailure(type: string){
  return type+'_ERROR';
}

export function updateObjectAtIndex (array, index, newObject){
  const arrayCopy = [...array];
  arrayCopy[index] = newObject;
  return arrayCopy;
}