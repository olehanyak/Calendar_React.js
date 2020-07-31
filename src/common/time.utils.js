import shmoment from './shmoment.js';

export const generateNumbers = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i += 1) {
    newList.push(i);
  }
  return newList;
};

export const getStartOfWeek = () => {
  const dayOfWeek = new Date();
  let monday = null;
  for (let i = 0; i <= 7; i++) {
    if (dayOfWeek.getDay() !== 1) {
      dayOfWeek.setDate(dayOfWeek.getDate() - 1);
    } else {
      monday = dayOfWeek;
    }
  }
  return monday;
};

export const generateWeekRange = startDate => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(
    new Date(withHours).setMinutes(Number(minutes)),
  );
  return withMinutes;
};

const monthsNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getDisplayedMonths = date => {
  const weekStart = getStartOfWeek(date);
  const weekEnd = shmoment(date).add('days', 6).result();
  const startMonth = weekStart.getMonth();
  const startYear = weekStart.getFullYear();
  const endMonth = weekEnd.getMonth();
  const endYear = weekEnd.getFullYear();
  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
    return `${monthsNames[startMonth]} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
    ? `${monthsNames[startMonth]} - ${monthsNames[endMonth]} ${startYear}`
    : `${monthsNames[startMonth]} ${startYear} - ${monthsNames[endMonth]} ${endYear}`;
};

export const getDisplayedMonth = (week) => {
  let displayedMonth = [];
  let displayedYear = [];
  let result;
  for (let i = 0; i < week.length; i++) {
    let month = week[i].toDateString().split(" ")[1];
    let year = week[i].toDateString().split(" ")[3];

    if (displayedMonth.indexOf(month) === -1) {
      displayedMonth.push(month);
    }
    if (displayedYear.indexOf(year) === -1) {
      displayedYear.push(year);
    }
  }
  if (displayedMonth.length === 1) {
    result = `${displayedMonth[0]} ${displayedYear[0]}`;
  }
  if (displayedMonth.length === 2) {
    result = `${displayedMonth[0]} - ${displayedMonth[1]} ${displayedYear[0]}`;
  }
  if (displayedYear.length === 2) {
    result = `${displayedMonth[0]} ${displayedYear[0]} - ${displayedMonth[1]} ${displayedYear[1]}`;
  }
  return result;
};

export const createNumbersArray = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};


export const filterEventsByDay = (events, day) => {
  return events.filter((event) => {
    return (
      new Date(day).getDate() === new Date(event.dateStart).getDate() &&
      new Date(day).getMonth() === new Date(event.dateStart).getMonth()
    );
  });
};

export const filterEventsByHour = (events, hour) => {
  const targetEvent = events.filter((event) => hour === new Date(event.dateStart).getHours());
  const [event] = targetEvent;
  return event;
};