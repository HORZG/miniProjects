const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');
//imoprt axios module
const axios = require('axios');

const multer = require('multer');
const path = require('path');
var sessionStorage= require('sessionstorage');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });


// Multer configuration
app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-education-" + "." + extension;
    cb(null, imgName);
  },
});


app.use(bodyParser.json());
// parse requests Objects
app.use(bodyParser.urlencoded({ extended: true }));

// import mongoose
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Education', { useNewUrlParser: true, useUnifiedTopology: true });
// import teacher Model
const Teacher = require('./models/teacher');

const Course = require('./models/course');
const User = require('./models/user');
const Event =require('./models/event');

const BookedCourse = require('./models/bookedCourses');

const iEvent = require('./models/iEvent');








  app.post('/teachers', (req,res)=> {
    console.log('this is the new teacher', req.body);
    let teacher = new User(
      {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.age,
        password : req.body.subject,
        phone : req.body.career
      }
    );
    teacher.save();
    res.json({
      message : ' teacher added with success'
    });
  });


app.post('/users',multer({ storage: storage }).single("img"),(req,res)=> {
 bcrypt.hash(req.body.password,10).then((cryptedpwd)=>
  {
    console.log('here crypted paw ', cryptedpwd);
    url = req.protocol + "://" + req.get("host");
   const user = new User (
    {
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      email : req.body.email,
      password : cryptedpwd,
      phone : req.body.phone,
      role : req.body.role,
      photo: url + "/images/" + req.file.filename,
 }
  )
  console.log(user);
  
  user.save((err,doc)=>
  {
    if (err) {
      console.log('erreur DB');
    } else {
      res.status(200).json({
        message : 'user added with success',
        
      })
    }
  })
})
});

// get User by ID ID ID ID 
app.get('/users/:id', (req,res)=> {
  let ID = req.params.id;
  console.log('here id', ID);
  User.findOne({_id : ID}).then((doc)=>{
      console.log('here finded teacher to Edit',doc);
      if (doc) {
        console.log('user trouvé',doc);
        res.status(200).json({
          userKey : doc
        })
      }
    })
 
})

// business logic LOGIN 
app.post('/users/login',(req,res) => {
  console.log('here into login',req.body);
  //serach user by email and pwd
  User.findOne({email : req.body.email}).then((emailResult)=>{
    if (!emailResult) {
      res.json({
        message : "0"
      })
    }
    return bcrypt.compare(req.body.password, emailResult.password)
  }).then((pwdResult)=>{
    if (!pwdResult) {
      res.json({
        message : '1',
        
      });
    }

    // send message 2 | object user (emailand pwd  arre correct)
    User.findOne({email : req.body.email}).then((finalResult)=>
    {
      let userToSend = {
        fName : finalResult.firstName,
        lName : finalResult.lastName,
        id: finalResult._id,
        role : finalResult.role
      };
     
      res.json({
        user : userToSend,
        message : '2'
      });
    });
    
  });
 
})
;

//businessLogic get all TEACHERS only
app.get('/teachers', (req,res) => {
  console.log(req.body);
  let teacher = 'teacher';

 User.find({role :teacher}).then((docs)=>
 {
  
   if (docs){
     console.log('here all teachers', docs);
     res.status(200).json({
       teachersKey : docs
    
     })
   }
  }
)
}
)

//businessLogic get all Students only
app.get('/students', (req,res) => {
  console.log(req.body);
  let student = 'student';
  
 User.find({role :student}).then((docs)=>
 {
  
   if (docs){
     console.log('here all Students', docs);
     res.status(200).json({
       studentsKey : docs
    
     })
   }
  }
)
}
);

app.get("/students/:id", (req,res)=> {

  let idUser = req.params.id;
  User.findOne({_id:idUser}).then((doc)=>
  {
   res.status(200).json({
    student : doc
   })})});


   app.put('/students/edit/:id',(req,res)=>{
    bcrypt.hash(req.body.password,10).then((cryptedPassword)=>{
let newInfo = {
  firstName : req.body.firstName,
  lastName : req.body.lastName,
  email : req.body.email,
  password : cryptedPassword,
  phone : req.body.phone
}
let idStudent = req.body._id;
console.log('here id Studnet ', idStudent);
User.findOneAndUpdate({_id:idStudent},newInfo).then((data)=>
res.status(200).json({
  message : 'Student updated'
}))

    })


   });


   app.delete('/students/delete/:id',(req,res)=>{
console.log('here Student to delete', req.params.id);
User.findByIdAndDelete({_id: req.params.id}).then((result)=>
{
  if (result) {
    res.status(200).json({
      message : 'object deleted'
    })
  }
})

   })


app.get('/teachers/:id', (req,res)=> {
    let ID = req.params.id;
    console.log('here id', ID);
    User.findOne({ _id:ID}).then(
      (doc)=>
      {
        if (doc) {
          console.log('teacher trouvé', doc);
          res.status(200).json({
            teacherKey : doc
          })
        }
      })
    
    
});

app.put('/teachers/:id', (req,res)=>
{console.log('New teacher ', req.body);
User.updateOne({_id:req.body}, req.body).then((data)=>
{
  res.status(200).json({
    message : ' teacher Updated',
    
  })
  console.log(data);
})
})


app.put('/users/profile/:idConnectedUser', (req,res)=>
{
  bcrypt.hash(req.body.password,10).then((cryptedPassword)=>{
    let newInfo = {
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      email : req.body.email,
      password : cryptedPassword,
      phone : req.body.phone
    }
  console.log('New User ', req.body);
User.updateOne({_id:req.body._id}, newInfo).then((data)=>
{
  res.status(200).json({
    message : 'teacher Updated',
    
  })
  console.log(data);
})
})})

app.delete('/teachers/:id', (req,res)=>
{let IdTeacher = req.params.id
console.log(req.body);
  User.deleteOne({_id:IdTeacher}).then((data)=>
  {
  console.log('teacher deleted');
  res.status(200).json({
    Message : 'teacher deleted'
  })
  })
}
)

app.delete('/courses/:id', (req,res)=>
{
let ID = req.params.id
console.log(ID);
console.log('course to delete', req.body);
Course.deleteOne({_id:ID}).then((data)=>
{
 
console.log('Course deleted');

res.status(200).json({
  Message : 'Course deleted'
})

})

})

app.get('/courses', (req,res)=> {   
  // parcour de la collections courses
  Course.find((err,docs)=>
  {
    if (err) {
      console.log('erreur bd');
      
    } else {
      if (docs) {
        res.status(200).json({
          coursesKey : docs
        })
        console.log(docs);
      }
      
    }
  })
  
}
);

// businessLogicSearchby name 
app.post('/courses/:subject',(req,res) => {

  console.log('cours à chercher', req.body);
  Course.find({subject : req.body.subject}).then((doc)=>
  {
    
      if(doc){
      res.status(200).json({
        coursesKey: doc
    
        
      })
    }
    }
  )
  })

  //Business log join course 
  app.post('/courses/join/:id/:idConnectedUser', (req,res)=> {
    idConnectedUser = req.params.idConnectedUser;
let PlacesLeftAfterUpdate = req.body.placesLeft-1;
console.log('here', PlacesLeftAfterUpdate);
  let  filter = { _id: req.body._id };
  let update = { placesLeft : PlacesLeftAfterUpdate};
    Course.findOneAndUpdate(filter,update).then((data)=>{
res.status(200).json({
  message : data
})

const bookedCourse = new BookedCourse( {
  idStudent : idConnectedUser,
  idCourse : req.body._id,
  idTeacher : req.body.idTeacher,
  subject : req.body.subject,
  date : req.body.date,
  price : req.body.price,
  Lvl : req.body.lvl,
  statut : 'Not Confirmed'

}) 
bookedCourse.save();
    }
    )
}
);

//business logic participate to event 
app.post('/events/participate/:idConnectedUser', (req,res)=>{
  console.log('here event to participate', req.body);
  const ievent = new iEvent({
    title : req.body.title,
    date : req.body.date,
    description : req.body.description,
    idUser : req.params.idConnectedUser
  })

  ievent.save();
})

//businessLogic delete from bookedCourse and update placesleft number
app.delete('/bookedCourses/:id/:idCourse',(req,res)=>{
  console.log('here object to delete', req.body);

let filtreBookedCourse = {_id:req.params.id}; //pour la collection bookedCourses
let filtreCourse = {_id: req.params.idCourse}; // pour la collection courses

  console.log('here cours à supprimer', req.params.id , req.params.idCourse);
  BookedCourse.findOneAndDelete(filtreBookedCourse).then((data)=>
  {
res.status(200).json({
  result : 'reservation annulé '
})

Course.findOneAndUpdate(filtreCourse, {$inc: {placesLeft: +1}}).then((result)=>
{
  res.status(200).json({
    result2 : 'nmbre de place updated'
  })
})



  })

})

//business logic add course
app.post('/courses', (req,res)=>
{
console.log('this new course', req.body);
let course =  new Course ({
subject : req.body.subject,
duration : req.body.duration,
price : req.body.price,
lvl : req.body.lvl,
teacher : req.body.teacher,
idTeacher : req.body.idTeacher,
date : req.body.date,
placesLeft : req.body.placesLeft

});
course.save();
res.json({
  message : 'course added successfully'
})

})

app.get('/courses/:id', (req,res)=> {
  let ID = req.params.id;
  console.log('here id', ID);
  Course.findOne({ _id:ID}).then((doc)=>
    {
      if (doc) {
        console.log('cours trouvé', doc);
        res.status(200).json({
          courseKey : doc
        })
      }
    })
  
  
});
// bussinessLogic allmycourse
app.get('/courses/:idConnectedUser/mycourses',(req,res)=>
{
let idStudenttt = req.params.idConnectedUser;
console.log('user connecté',idStudenttt);
BookedCourse.find({idStudent:idStudenttt}).then((docs)=>
{
console.log('here my course', docs);
      res.status(200).json({
        myCoursesKey : docs
          })
})
});


app.get('/bookedCourses/myowncourses/:idConnectedUser',(req,res)=>
{
let idUser = req.params.idConnectedUser;

BookedCourse.find({idTeacher:idUser}).then((docs)=>
{
console.log('here my course', docs);
      res.status(200).json({
        myCoursesKey : docs
          })
})
});


// *****************************************************************participatedEvents*********************************************************************//
app.get('/events/:idConnectedUser/participatedEvent',(req,res)=>
{
let idConnectedUser = req.params.idConnectedUser;
console.log('here connected uSer id', idConnectedUser);
iEvent.find({idStudent:idConnectedUser}).then((docs)=>{
  res.status(200).json({
    result : docs
  })
})

})

// *****************************************************************ADD EVENT*****************************************************************************
app.post('/events',multer({ storage: storage }).single("img"), (req,res)=> {

  url = req.protocol + "://" + req.get("host");
console.log(req.body);
let event = new Event({
title : req.body.title,
date : req.body.date,
description : req.body.description,
price : req.body.price,
image: url + "/images/" + req.file.filename,
});
event.save();
res.json({
  message : 'Event Added'
})

});

app.get('/events',(req,res)=>
{
Event.find((err,docs)=>{
  if (err) {
    console.log('erreur Base de Données');
  } else {
    res.status(200).json({
      eventsKey : docs
    })
  }
  console.log(docs);
})

})

// getEventById for Dispaly
app.get('/events/:id', (req,res)=>{
  let ID = req.params.id;

  console.log('here id' ,ID);
  Event.findOne({_id:ID}).then((doc)=>
  {

  console.log('here document to show' ,doc);
  res.json({
    eventKey : doc
   })
}
   
  )
})

app.get('/events/byprice/:price',(req,res)=>{
  Event.find({price : { $lte: req.params.price}}).then((docs)=>
{
res.status(200).json({
  eventsKey : docs
})})});

app.put('/courses/confirm/:id/:newStatut',(req,res)=>{

 console.log(req.params.newStatut);
  BookedCourse.findOneAndUpdate({_id:req.params.id},{ $set: { statut:'confirmed' }}).then((data)=>{
res.status(200).json({
  message : 'reservation confirmée'
})

  })
})

// businessLogic Delete event by id

app.delete('/events/:id',(req,res)=> {

let id = req.params.id;
console.log('here event to delete',id);
Event.deleteOne({_id:id}).then((data)=>
{
  res.status(200).json({
message : "Event deleted"
  
  })
})

});

app.delete('/events/deleteimportantevent/:id', (req,res)=>{
  console.log('here event to delete', req.params.id);
  iEvent.findOneAndDelete({_id:req.params.id}).then((res)=>{
    res.status(200).json({
      message : 'event deleted from your list'
    })
  })
})

// businessLogic edit EVENT BY ID
app.put('/events', (req,res)=>{
  let ID = req.body._id;
console.log('here object to edit ' , req.body);
Event.updateOne({_id:ID}, req.body).then((data)=>
{
  res.status(200).json({
    message : 'Update Done Succesfully'
  })
})


})






//business logic update course by id 
app.put('/courses', (req,res)=>
{console.log('New Course ', req.body);
Course.updateOne({_id:req.body._id}, req.body).then((data)=>
{
  res.status(200).json({
    message : ' Course Updated',
    
  })

}
)

})



app.post('/users/weather', (req,res)=>
{
  console.log('here weather for:', req.body.city);
  let city = req.body.city;
var actualTime = new Date();
console.log(actualTime);

  const apiKey = "6a95b19ee095088e5e02acd250b19e2b";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" + 
    apiKey+ "&units=metric";

    axios.get(apiUrl).then((response) => {
      
      console.log('weather details',response.data.weather);
       
      let weather = response.data.weather;
      let weatherResult ={
        
        icon : response.data.weather.icon,
        desciption : weather.desciption,
        temp : response.data.main.temp,
        hum : response.data.main.humidity,
        windSpeed : response.data.wind.speed,
        cityy : city,
        time : actualTime
        // sunrise :time(response.data.sys.sunrise).format("DD-MM-YYYY h:mm:ss"),
        // sunset : time(response.data.sys.sunset ).format("DD-MM-YYYY h:mm:ss")

      }
  

      res.json({
        result : weatherResult
      })
   
    });
});

// BUSINESS LOGIC BOOK A COURSE



module.exports = app;
