# online-classroom-api-nodejs-exprees-mysql

Endpoint 1: This endpoint is responsible for getting all the Students enrolled for online classes.

Method: GET

Link: http://localhost:3307/student

Response: The format will be in JSON

[
    {
        "id_enrollment": 1,
        "fullname": "Shivam Patel",
        "father_name": "Bhoopendra Singh",
        "class": "10",
        "email": "shivampatel251097@gmail.com",
        "contact_no": "7355362257",
        "address": "Village/Post- Sadupura, Konch, Jalaun, UP",
        "time_stamp": "2021-02-03T19:20:51.000Z"
    },
    {
        "id_enrollment": 2,
        "fullname": "Satyam Patel",
        "father_name": "Balveer Singh",
        "class": "10",
        "email": "satyampatel@gmail.com",
        "contact_no": "9712345678",
        "address": "Village Sadupura Konch",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 3,
        "fullname": "Sumit Kumar",
        "father_name": "Baldev Singh",
        "class": "10",
        "email": "sumit123@gmail.com",
        "contact_no": "6231549877",
        "address": "Vanarasi, UP",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 4,
        "fullname": "Aseem ",
        "father_name": "Jeeshan",
        "class": "10",
        "email": "aseem.jeeshan123@gmail.com",
        "contact_no": "9765481230",
        "address": "Kanpur, UP",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 5,
        "fullname": "Priya Sharma",
        "father_name": "Sushil Sharma",
        "class": "10",
        "email": "priya.sharma@gmail.com",
        "contact_no": "7894561230",
        "address": "Bnagalore, Karnataka",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 6,
        "fullname": "Sai Koushik",
        "father_name": "Shailendra Koushik",
        "class": "10",
        "email": "sai.koushik@gmail.com",
        "contact_no": "7894561230",
        "address": "Telangana",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 7,
        "fullname": "Arshi Pandey",
        "father_name": "Sunil Pandey",
        "class": "10",
        "email": "arshi.pandey@gmail.com",
        "contact_no": "7893216540",
        "address": "Kolkata, WB",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 8,
        "fullname": "Varsha Nigam",
        "father_name": "Suresh Nigam",
        "class": "10",
        "email": "varsha.nigam456@gmail.com",
        "contact_no": "6789521301",
        "address": "Jaipur, Rajasthan",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 9,
        "fullname": "Rohit Kumar",
        "father_name": "Badal Kumar",
        "class": "10",
        "email": "rohit.kumar2@gmail.com",
        "contact_no": "9874563120",
        "address": "Orai, UP",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 10,
        "fullname": "Virat Kumar",
        "father_name": "Abhishek Kumar",
        "class": "10",
        "email": "virat.kumar@gmail.com",
        "contact_no": "9451178933",
        "address": "Jammu, JK",
        "time_stamp": "2021-02-03T19:32:14.000Z"
    },
    {
        "id_enrollment": 11,
        "fullname": "Hemlata Yadav",
        "father_name": "Saurabh Yadav",
        "class": "9",
        "email": "hemlata.yadav@gmail.com",
        "contact_no": "8574961237",
        "address": "Hyderabad",
        "time_stamp": "2021-02-06T10:58:33.000Z"
    }
]



Endpoint 2: This endpoint is responsible for enrolling new student for online classes.
Method: POST
Link: http://localhost:3307/student
Body: {
        "fullname": "Hemlata Yadav",
        "father_name": "Saurabh Yadav",
        "class": "9",
        "email": "hemlata.yadav@gmail.com",
        "contact_no": "8574961237",
        "address": "Hyderabad"
    }
Response: {
    "Student": "New Sudent Enrolled with enrollment ID:16"
}



Endpoint 3: This endpoint is responsible for getting all the scheduled lectures.
Method: GET
Link: http://localhost:3307/lecture
Response: [
    {
        "lecture_id": 1,
        "class": "10",
        "subject": "Maths",
        "topic": "Geometry",
        "lecturer_name": "Abhijit Kashyap",
        "lecturer_contact": "9876541230",
        "start_datetime": "2021-02-04T05:30:00.000Z",
        "end_datetime": "2021-02-04T06:30:00.000Z"
    },
    {
        "lecture_id": 2,
        "class": "10",
        "subject": "Physics",
        "topic": "Thermo-1",
        "lecturer_name": "Sashank Sharma",
        "lecturer_contact": "6985741230",
        "start_datetime": "2021-02-04T06:30:00.000Z",
        "end_datetime": "2021-02-04T07:30:00.000Z"
    },
    {
        "lecture_id": 3,
        "class": "10",
        "subject": "Chemistry",
        "topic": "Alkaline Reactions",
        "lecturer_name": "Nilesh Gupta",
        "lecturer_contact": "6895744531",
        "start_datetime": "2021-02-04T08:30:00.000Z",
        "end_datetime": "2021-02-04T09:30:00.000Z"
    },
    {
        "lecture_id": 4,
        "class": "10",
        "subject": "Bilology",
        "topic": "Plants",
        "lecturer_name": "Pradum Pathak",
        "lecturer_contact": "9456784516",
        "start_datetime": "2021-02-04T09:30:00.000Z",
        "end_datetime": "2021-02-04T10:30:00.000Z"
    },
    {
        "lecture_id": 5,
        "class": "10",
        "subject": "English",
        "topic": "Tenses",
        "lecturer_name": "Anjana Srivatava",
        "lecturer_contact": "6879538712",
        "start_datetime": "2021-02-04T10:30:00.000Z",
        "end_datetime": "2021-02-04T11:30:00.000Z"
    },
    {
        "lecture_id": 6,
        "class": "10",
        "subject": "Maths",
        "topic": "Geometry Cont.",
        "lecturer_name": "Abhijit Kashyap",
        "lecturer_contact": "9876541230",
        "start_datetime": "2021-02-05T05:30:00.000Z",
        "end_datetime": "2021-02-05T05:30:00.000Z"
    },
    {
        "lecture_id": 7,
        "class": "10",
        "subject": "Physics",
        "topic": "Kinematics-1",
        "lecturer_name": "Sashank Sharma",
        "lecturer_contact": "6985741230",
        "start_datetime": "2021-02-05T05:30:00.000Z",
        "end_datetime": "2021-02-05T05:30:00.000Z"
    },
    {
        "lecture_id": 8,
        "class": "10",
        "subject": "Chemistry",
        "topic": "Alkaline Reactions Cont.",
        "lecturer_name": "Nilesh Gupta",
        "lecturer_contact": "6895744531",
        "start_datetime": "2021-02-05T05:30:00.000Z",
        "end_datetime": "2021-02-05T05:30:00.000Z"
    },
    {
        "lecture_id": 9,
        "class": "10",
        "subject": "Bilology",
        "topic": "Animals",
        "lecturer_name": "Pradum Pathak",
        "lecturer_contact": "9456784516",
        "start_datetime": "2021-02-05T05:30:00.000Z",
        "end_datetime": "2021-02-05T05:30:00.000Z"
    },
    {
        "lecture_id": 10,
        "class": "10",
        "subject": "English",
        "topic": "Passage ",
        "lecturer_name": "Anjana Srivatava",
        "lecturer_contact": "6879538712",
        "start_datetime": "2021-02-05T05:30:00.000Z",
        "end_datetime": "2021-02-05T05:30:00.000Z"
    },
    {
        "lecture_id": 11,
        "class": "10",
        "subject": "Maths",
        "topic": "Algebra",
        "lecturer_name": "Abhijit Kashyap",
        "lecturer_contact": "9876541230",
        "start_datetime": "2021-02-06T05:30:00.000Z",
        "end_datetime": "2021-02-06T06:30:00.000Z"
    },
    {
        "lecture_id": 12,
        "class": "10",
        "subject": "Physics",
        "topic": "Kinematics-2",
        "lecturer_name": "Sashank Sharma",
        "lecturer_contact": "6985741230",
        "start_datetime": "2021-02-06T06:30:00.000Z",
        "end_datetime": "2021-02-06T07:30:00.000Z"
    },
    {
        "lecture_id": 13,
        "class": "10",
        "subject": "Chemistry",
        "topic": "Acidic Reactions",
        "lecturer_name": "Nilesh Gupta",
        "lecturer_contact": "6895744531",
        "start_datetime": "2021-02-06T08:30:00.000Z",
        "end_datetime": "2021-02-06T09:30:00.000Z"
    },
    {
        "lecture_id": 14,
        "class": "10",
        "subject": "Bilology",
        "topic": "Human Evolution",
        "lecturer_name": "Pradum Pathak",
        "lecturer_contact": "9456784516",
        "start_datetime": "2021-02-06T09:30:00.000Z",
        "end_datetime": "2021-02-06T10:30:00.000Z"
    },
    {
        "lecture_id": 15,
        "class": "10",
        "subject": "English",
        "topic": "Active Passive Voice",
        "lecturer_name": "Anjana Srivatava",
        "lecturer_contact": "6879538712",
        "start_datetime": "2021-02-06T10:30:00.000Z",
        "end_datetime": "2021-02-06T11:30:00.000Z"
    },
    {
        "lecture_id": 29,
        "class": "9",
        "subject": "English",
        "topic": "English",
        "lecturer_name": "Anjana Srivatava",
        "lecturer_contact": "6879538712",
        "start_datetime": "2021-02-06T10:30:00.000Z",
        "end_datetime": "2021-02-06T11:30:00.000Z"
    }
]


Endpoint 4: This endpoint is responsible for posting/ sheduling new lecture.
Method: POST
Link: http://localhost:3307/lecture
Body:  JSON FORMAT
{
        "class": "9",
        "subject": "English",
        "topic": "Pronouns",
        "lecturer_name": "Anjana Srivatava",
        "lecturer_contact": "6879538712",
        "start_datetime": "2021-02-06 16:00:00",
        "end_datetime": "2021-02-06 17:00:00"
    }


Endpoint 5: This endpoint is responsible for marking students attendance for particular lecture of a student.
Method: POST
Link: http://localhost:3307/attendance
Body:  JSON FORMAT
{
    "student_id":"11",
    "lecture_id":"29"
}
Response: {
    "attendance": "Attendance Has been marked for the Lecture ID:29 of Student ID:11 with Attendance ID:17"
}


Endpoint 6: This endpoint is responsible for getting last five attended lecture of any student.
Method: GET
Link: http://localhost:3307/lastFiveAttended/1
(Here 1 is representing the StudentID)
Response: {
    "Lecture": [
        {
            "attendance_id": 15,
            "student_id": 1,
            "lecture_id": 3,
            "time_stamp": "2021-02-06T08:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Chemistry",
            "topic": "Alkaline Reactions",
            "lecturer_name": "Nilesh Gupta",
            "start_datetime": "2021-02-04T08:30:00.000Z",
            "end_datetime": "2021-02-04T09:30:00.000Z"
        },
        {
            "attendance_id": 14,
            "student_id": 1,
            "lecture_id": 2,
            "time_stamp": "2021-02-06T06:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Physics",
            "topic": "Thermo-1",
            "lecturer_name": "Sashank Sharma",
            "start_datetime": "2021-02-04T06:30:00.000Z",
            "end_datetime": "2021-02-04T07:30:00.000Z"
        },
        {
            "attendance_id": 13,
            "student_id": 1,
            "lecture_id": 1,
            "time_stamp": "2021-02-06T05:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Maths",
            "topic": "Geometry",
            "lecturer_name": "Abhijit Kashyap",
            "start_datetime": "2021-02-04T05:30:00.000Z",
            "end_datetime": "2021-02-04T06:30:00.000Z"
        },
        {
            "attendance_id": 12,
            "student_id": 1,
            "lecture_id": 5,
            "time_stamp": "2021-02-05T10:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "English",
            "topic": "Tenses",
            "lecturer_name": "Anjana Srivatava",
            "start_datetime": "2021-02-04T10:30:00.000Z",
            "end_datetime": "2021-02-04T11:30:00.000Z"
        },
        {
            "attendance_id": 11,
            "student_id": 1,
            "lecture_id": 4,
            "time_stamp": "2021-02-05T09:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Bilology",
            "topic": "Plants",
            "lecturer_name": "Pradum Pathak",
            "start_datetime": "2021-02-04T09:30:00.000Z",
            "end_datetime": "2021-02-04T10:30:00.000Z"
        }
    ]
}


Endpoint 7: This endpoint is responsible to get all the lectures attended in the given month.
Method: GET
Link: http://localhost:3307/allAttendedMonth/2
(Here 2 is representing the MonthNo)
Response: {
    "Lecture": [
        {
            "attendance_id": 1,
            "student_id": 1,
            "lecture_id": 1,
            "time_stamp": "2021-02-04T05:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Maths",
            "topic": "Geometry",
            "lecturer_name": "Abhijit Kashyap",
            "start_datetime": "2021-02-04T05:30:00.000Z",
            "end_datetime": "2021-02-04T06:30:00.000Z"
        },
        {
            "attendance_id": 2,
            "student_id": 1,
            "lecture_id": 2,
            "time_stamp": "2021-02-04T06:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Physics",
            "topic": "Thermo-1",
            "lecturer_name": "Sashank Sharma",
            "start_datetime": "2021-02-04T06:30:00.000Z",
            "end_datetime": "2021-02-04T07:30:00.000Z"
        },
        {
            "attendance_id": 3,
            "student_id": 1,
            "lecture_id": 3,
            "time_stamp": "2021-02-04T08:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Chemistry",
            "topic": "Alkaline Reactions",
            "lecturer_name": "Nilesh Gupta",
            "start_datetime": "2021-02-04T08:30:00.000Z",
            "end_datetime": "2021-02-04T09:30:00.000Z"
        },
        {
            "attendance_id": 4,
            "student_id": 1,
            "lecture_id": 4,
            "time_stamp": "2021-02-04T09:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Bilology",
            "topic": "Plants",
            "lecturer_name": "Pradum Pathak",
            "start_datetime": "2021-02-04T09:30:00.000Z",
            "end_datetime": "2021-02-04T10:30:00.000Z"
        },
        {
            "attendance_id": 5,
            "student_id": 1,
            "lecture_id": 5,
            "time_stamp": "2021-02-04T10:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "English",
            "topic": "Tenses",
            "lecturer_name": "Anjana Srivatava",
            "start_datetime": "2021-02-04T10:30:00.000Z",
            "end_datetime": "2021-02-04T11:30:00.000Z"
        },
        {
            "attendance_id": 6,
            "student_id": 2,
            "lecture_id": 1,
            "time_stamp": "2021-02-04T05:30:00.000Z",
            "fullname": "Satyam Patel",
            "class": "10",
            "email": "satyampatel@gmail.com",
            "subject": "Maths",
            "topic": "Geometry",
            "lecturer_name": "Abhijit Kashyap",
            "start_datetime": "2021-02-04T05:30:00.000Z",
            "end_datetime": "2021-02-04T06:30:00.000Z"
        },
        {
            "attendance_id": 7,
            "student_id": 2,
            "lecture_id": 2,
            "time_stamp": "2021-02-04T06:30:00.000Z",
            "fullname": "Satyam Patel",
            "class": "10",
            "email": "satyampatel@gmail.com",
            "subject": "Physics",
            "topic": "Thermo-1",
            "lecturer_name": "Sashank Sharma",
            "start_datetime": "2021-02-04T06:30:00.000Z",
            "end_datetime": "2021-02-04T07:30:00.000Z"
        },
        {
            "attendance_id": 8,
            "student_id": 1,
            "lecture_id": 1,
            "time_stamp": "2021-02-05T05:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Maths",
            "topic": "Geometry",
            "lecturer_name": "Abhijit Kashyap",
            "start_datetime": "2021-02-04T05:30:00.000Z",
            "end_datetime": "2021-02-04T06:30:00.000Z"
        },
        {
            "attendance_id": 9,
            "student_id": 1,
            "lecture_id": 2,
            "time_stamp": "2021-02-05T06:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Physics",
            "topic": "Thermo-1",
            "lecturer_name": "Sashank Sharma",
            "start_datetime": "2021-02-04T06:30:00.000Z",
            "end_datetime": "2021-02-04T07:30:00.000Z"
        },
        {
            "attendance_id": 10,
            "student_id": 1,
            "lecture_id": 3,
            "time_stamp": "2021-02-05T08:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Chemistry",
            "topic": "Alkaline Reactions",
            "lecturer_name": "Nilesh Gupta",
            "start_datetime": "2021-02-04T08:30:00.000Z",
            "end_datetime": "2021-02-04T09:30:00.000Z"
        },
        {
            "attendance_id": 11,
            "student_id": 1,
            "lecture_id": 4,
            "time_stamp": "2021-02-05T09:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Bilology",
            "topic": "Plants",
            "lecturer_name": "Pradum Pathak",
            "start_datetime": "2021-02-04T09:30:00.000Z",
            "end_datetime": "2021-02-04T10:30:00.000Z"
        },
        {
            "attendance_id": 12,
            "student_id": 1,
            "lecture_id": 5,
            "time_stamp": "2021-02-05T10:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "English",
            "topic": "Tenses",
            "lecturer_name": "Anjana Srivatava",
            "start_datetime": "2021-02-04T10:30:00.000Z",
            "end_datetime": "2021-02-04T11:30:00.000Z"
        },
        {
            "attendance_id": 13,
            "student_id": 1,
            "lecture_id": 1,
            "time_stamp": "2021-02-06T05:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Maths",
            "topic": "Geometry",
            "lecturer_name": "Abhijit Kashyap",
            "start_datetime": "2021-02-04T05:30:00.000Z",
            "end_datetime": "2021-02-04T06:30:00.000Z"
        },
        {
            "attendance_id": 14,
            "student_id": 1,
            "lecture_id": 2,
            "time_stamp": "2021-02-06T06:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Physics",
            "topic": "Thermo-1",
            "lecturer_name": "Sashank Sharma",
            "start_datetime": "2021-02-04T06:30:00.000Z",
            "end_datetime": "2021-02-04T07:30:00.000Z"
        },
        {
            "attendance_id": 15,
            "student_id": 1,
            "lecture_id": 3,
            "time_stamp": "2021-02-06T08:30:00.000Z",
            "fullname": "Shivam Patel",
            "class": "10",
            "email": "shivampatel251097@gmail.com",
            "subject": "Chemistry",
            "topic": "Alkaline Reactions",
            "lecturer_name": "Nilesh Gupta",
            "start_datetime": "2021-02-04T08:30:00.000Z",
            "end_datetime": "2021-02-04T09:30:00.000Z"
        },
        {
            "attendance_id": 16,
            "student_id": 4,
            "lecture_id": 1,
            "time_stamp": "2021-02-04T05:30:00.000Z",
            "fullname": "Aseem ",
            "class": "10",
            "email": "aseem.jeeshan123@gmail.com",
            "subject": "Maths",
            "topic": "Geometry",
            "lecturer_name": "Abhijit Kashyap",
            "start_datetime": "2021-02-04T05:30:00.000Z",
            "end_datetime": "2021-02-04T06:30:00.000Z"
        },
        {
            "attendance_id": 17,
            "student_id": 11,
            "lecture_id": 29,
            "time_stamp": "2021-02-06T11:44:44.000Z",
            "fullname": "Hemlata Yadav",
            "class": "9",
            "email": "hemlata.yadav@gmail.com",
            "subject": "English",
            "topic": "English",
            "lecturer_name": "Anjana Srivatava",
            "start_datetime": "2021-02-06T10:30:00.000Z",
            "end_datetime": "2021-02-06T11:30:00.000Z"
        }
    ]
}



Endpoint 8: This endpoint is responsible for getting last five attended lecture of any student.
Method: GET
Link: http://localhost:3307/learnersBelowEightyFive
Response: {
    "student": [
        {
            "id_enrollment": 2,
            "fullname": "Satyam Patel",
            "class": "10",
            "class_attended": 2,
            "total_sheduled_classes": 15,
            "percent_attended": 13.3,
            "father_name": "Balveer Singh",
            "contact_no": "9712345678",
            "email": "satyampatel@gmail.com",
            "address": "Village Sadupura Konch"
        },
        {
            "id_enrollment": 3,
            "fullname": "Sumit Kumar",
            "class": "10",
            "class_attended": 0,
            "total_sheduled_classes": 15,
            "percent_attended": 0,
            "father_name": "Baldev Singh",
            "contact_no": "6231549877",
            "email": "sumit123@gmail.com",
            "address": "Vanarasi, UP"
        },
        {
            "id_enrollment": 4,
            "fullname": "Aseem ",
            "class": "10",
            "class_attended": 1,
            "total_sheduled_classes": 15,
            "percent_attended": 6.7,
            "father_name": "Jeeshan",
            "contact_no": "9765481230",
            "email": "aseem.jeeshan123@gmail.com",
            "address": "Kanpur, UP"
        },
        {
            "id_enrollment": 5,
            "fullname": "Priya Sharma",
            "class": "10",
            "class_attended": 0,
            "total_sheduled_classes": 15,
            "percent_attended": 0,
            "father_name": "Sushil Sharma",
            "contact_no": "7894561230",
            "email": "priya.sharma@gmail.com",
            "address": "Bnagalore, Karnataka"
        },
        {
            "id_enrollment": 6,
            "fullname": "Sai Koushik",
            "class": "10",
            "class_attended": 0,
            "total_sheduled_classes": 15,
            "percent_attended": 0,
            "father_name": "Shailendra Koushik",
            "contact_no": "7894561230",
            "email": "sai.koushik@gmail.com",
            "address": "Telangana"
        },
        {
            "id_enrollment": 7,
            "fullname": "Arshi Pandey",
            "class": "10",
            "class_attended": 0,
            "total_sheduled_classes": 15,
            "percent_attended": 0,
            "father_name": "Sunil Pandey",
            "contact_no": "7893216540",
            "email": "arshi.pandey@gmail.com",
            "address": "Kolkata, WB"
        },
        {
            "id_enrollment": 8,
            "fullname": "Varsha Nigam",
            "class": "10",
            "class_attended": 0,
            "total_sheduled_classes": 15,
            "percent_attended": 0,
            "father_name": "Suresh Nigam",
            "contact_no": "6789521301",
            "email": "varsha.nigam456@gmail.com",
            "address": "Jaipur, Rajasthan"
        },
        {
            "id_enrollment": 9,
            "fullname": "Rohit Kumar",
            "class": "10",
            "class_attended": 0,
            "total_sheduled_classes": 15,
            "percent_attended": 0,
            "father_name": "Badal Kumar",
            "contact_no": "9874563120",
            "email": "rohit.kumar2@gmail.com",
            "address": "Orai, UP"
        },
        {
            "id_enrollment": 10,
            "fullname": "Virat Kumar",
            "class": "10",
            "class_attended": 0,
            "total_sheduled_classes": 15,
            "percent_attended": 0,
            "father_name": "Abhishek Kumar",
            "contact_no": "9451178933",
            "email": "virat.kumar@gmail.com",
            "address": "Jammu, JK"
        },
        {
            "id_enrollment": 16,
            "fullname": "Hemu Gupta",
            "class": "9",
            "class_attended": 0,
            "total_sheduled_classes": 1,
            "percent_attended": 0,
            "father_name": "Prashanth Gupta",
            "contact_no": "96687451239",
            "email": "hemu.gupta12@gmail.com",
            "address": "Mumbai"
        }
    ]
}
 
