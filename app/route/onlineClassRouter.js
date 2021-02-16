'use strict';
module.exports = function(app) {
  var UserController = require('../controller/onlineClassController.js');

  //Route to get and creating student/ learner
  app.route('/student')
  .get(UserController.getAllStudentsEnrolled)
  .post(UserController.enrollNewStudent);

  // Route to get and post lecture
  app.route('/lecture')
  .get(UserController.getAllLectures)
  .post(UserController.sheduleNewLecture);

  // Route to Mark attendance
  app.route('/attendance')
  .post(UserController.markStudentAttendance);

  //Route to Get last five attended lecture of particular student
  app.route('/lastFiveAttended/:studentID')
  .get(UserController.lastFiveAttendedLectureByStudent);

  //Route to get all Lectures attended during the given month
  app.route('/allAttendedMonth/:monthNo')
  .get(UserController.allAttendedLectureinGivenMonth);

  //Route to get all the students/learners who has attendance less than 85 percent
  app.route('/learnersBelowEightyFive')
  .get(UserController.learnersBelowEightyFivePercent);

  };