const moment = require("moment");

// const formatDate = (date) => {
//   date.text(moment().format("dddd MMMM Do YYYY"));
// };

module.exports = {
  formatDate: function (date) {
    return moment(date).format("dddd MMMM Do YYYY");
  },

  routineLength: function (time1, time2) {
    time1 = moment(time1, "hh:mm:ss");
    console.log(time1);
    time2 = moment(time2, "hh:mm:ss");
    console.log(time2);
    return moment(time2.diff(time1, "minutes"));
  },

  checkUserId: (userId, userSessionId) => userId == userSessionId,
};
