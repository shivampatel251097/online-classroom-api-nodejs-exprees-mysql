"use strict";

var User = require("../model/onlineClassModel.js");

//Getting all the students enrolled for online classes
exports.getAllStudentsEnrolled = function (req, res) {
  User.getAllStudentsEnrolled(req.body, function (err,Student) {
    if (err) res.send(err);
    res.json(Student);
  });
};

//Getting all the  Sheduled Lectures
exports.getAllLectures = function (req, res) {
  User.getAllLectures(req.body, function (err,Lecture) {
    if (err) res.send(err);
    res.json(Lecture);
  });
};

//Enrolling new student for online classes
exports.enrollNewStudent = function (req, res) {
  User.enrollNewStudent(req.body, function (err,Student) {
    if (err) res.send(err);
    res.send({Student});
  });
};

//Sheduling new Lecture 
exports.sheduleNewLecture = function (req, res) {
  User.sheduleNewLecture(req.body, function (err,Lecture) {
    if (err) res.send(err);
    res.send({Lecture});
  });
};

//Marking the student attendance with the help of student ID and Lecture ID
exports.markStudentAttendance = function (req, res) {
  User.markStudentAttendance(req.body, function (err,attendance) {
    if (err) res.send(err);
    res.send({attendance});
  });
};


//Getting Last Five Attended Lectures by Given Student(ID)
exports.lastFiveAttendedLectureByStudent = function (req, res) {
  User.lastFiveAttendedLectureByStudent(req.params.studentID, function (err,Lecture) {
    if (err) res.send(err);
    res.send({Lecture});
  });
};

//Getting All Attended Lectures in Given Month(number)
exports.allAttendedLectureinGivenMonth = function (req, res) {
  User.allAttendedLectureinGivenMonth(req.params.monthNo, function (err,Lecture) {
    if (err) res.send(err);
    res.send({Lecture});
  });
};


//Getting all the :Learners/ Students who have attendance less than 85 percent
exports.learnersBelowEightyFivePercent = function (req, res) {
  User.learnersBelowEightyFivePercent(req.params.monthNo, function (err,student) {
    if (err) res.send(err);
    res.send({student});
  });
};