export default function extractDate(timestamp) {
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // add 1 because getMonth() returns 0-based index (0 for January)
  const day = dateObj.getDate();
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  return formattedDate;
}
