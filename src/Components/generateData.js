import moment from "moment";

const generateDate = (length = 30) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    let rand1 = Math.random() * 15 + 5;
    let rand2 = Math.random() * 15 + 5;
    let date = moment()
      .subtract(i, "day")
      .toDate();

    arr.unshift({
      date: moment(date).format("MMMM D, YYYY"),
      index: i,
      spent: Math.ceil(rand1),
      items: Math.ceil(rand2)
    });
  }

  return arr;
};

export default generateDate;
