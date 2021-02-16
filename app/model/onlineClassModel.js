'user strict';
var pool = require('./db.js');
var User = function(task){
};

User.getAllStudentsEnrolled = function (reqdata, result) {
    //Getting pool connection
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("Select * from enrollment;", function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();  
                result(null, res);
            }
                })  
            }       
    })
};

User.getAllLectures = function (reqdata, result) {
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("Select * from lecture_sheduler",function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();  
                result(null, res);
            }
                })  
        }
    })
};

User.enrollNewStudent = function (reqdata, result) {
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("INSERT into enrollment (`fullname`,`father_name`,`class`,`email`,`contact_no`,`address`) VALUES (?,?,?,?,?,?)", [reqdata.fullname,reqdata.father_name,reqdata.class,reqdata.email,reqdata.contact_no,reqdata.address], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();
                // console.log(res);
                result(null, 'New Student Enrolled with enrollment ID:'+res.insertId);
            }
                })  
            }
    })
};
User.sheduleNewLecture = function (reqdata, result) {
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("INSERT into lecture_sheduler (`class`,`subject`,`topic`,`lecturer_name`,`lecturer_contact`,`start_datetime`,`end_datetime`) VALUES (?,?,?,?,?,?,?)", [reqdata.class,reqdata.subject,reqdata.subject,reqdata.lecturer_name,reqdata.lecturer_contact,reqdata.start_datetime,reqdata.end_datetime], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();  
                result(null, 'New Lecture sheduled with Lecture ID:'+res.insertId);
            }
                })  
        }
    })
};

User.markStudentAttendance = function (reqdata, result) {
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("INSERT into attendance (`student_id`,`lecture_id`) VALUES (?,?)", [reqdata.student_id,reqdata.lecture_id], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();  
                result(null, 'Attendance Has been marked for the Lecture ID:'+reqdata.lecture_id + ' of Student ID:'+reqdata.student_id+ ' with Attendance ID:'+res.insertId);
            }
                })  
        }
    })
};


User.lastFiveAttendedLectureByStudent = function (studentID, result) {
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("SELECT A.attendance_id,A.student_id,A.lecture_id,A.time_stamp,E.fullname,E.class,E.email, L.subject,L.topic, L.lecturer_name, L.start_datetime, L.end_datetime FROM attendance A inner join enrollment E on A.student_id=E.id_enrollment inner join lecture_sheduler L on A.lecture_id = L.lecture_id where A.student_id=? order by A.time_stamp desc LIMIT 5;",[studentID],function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();  
                result(null, res);
            }
                })  
        }
    })
};

User.allAttendedLectureinGivenMonth = function (monthNo, result) {
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("SELECT A.attendance_id,A.student_id,A.lecture_id,A.time_stamp,E.fullname,E.class,E.email, L.subject,L.topic, L.lecturer_name, L.start_datetime, L.end_datetime FROM attendance A inner join enrollment E on A.student_id=E.id_enrollment inner join lecture_sheduler L on A.lecture_id = L.lecture_id where month(A.time_stamp)=?;",[monthNo],function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();  
                result(null, res);
            }
                })  
        }
    })
};


User.learnersBelowEightyFivePercent = function (monthNo, result) {
    pool.getConnection(function(errorC,conn)
    {
        if(errorC){
            result(null,'Error occured while connecting to database')
        }
        else{           
            conn.query("select * from (select E.id_enrollment, E.fullname,E.class, SUM(IF(L.lecture_id is not null,1,0))  as class_attended, (select count(*) from lecture_sheduler where class=E.class ) as total_sheduled_classes, round(SUM(IF(L.lecture_id is not null,1,0))*100/(select count(*) from lecture_sheduler where class=E.class ),1) as percent_attended, E.father_name, E.contact_no, E.email, E.address from enrollment E left outer join attendance A ON E.id_enrollment=A.student_id left outer join lecture_sheduler L ON A.lecture_id = L.lecture_id group by id_enrollment) as innerTable where percent_attended<85;",function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                conn.release();  
                result(null, res);
            }
                })  
        }
    })
};

module.exports= User;