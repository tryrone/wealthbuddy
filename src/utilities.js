export const getHumanDate = (isoFormat) => {
  let readable = new Date(isoFormat);
  let m = readable.getMonth();
  let d = readable.getDate();
  let y = readable.getFullYear();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let mLong = months[m];
  return mLong + " " + d + ", " + y;
};

export const getDesiredTime = (time) => {
  let newDate = new Date(time);
  newDate.setHours(newDate.getHours() + 1);
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
};
