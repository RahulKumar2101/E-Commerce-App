const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000; 
const path = require('path');

const employeeList = [
  {
    first_name: "ramesh",
    Last_name: "fadrate",
    Email_id: "ram@gmail.com",
  },
  {
    first_name: "john",
    Last_name: "cena",
    Email_id: "cena@gmail.com",
  },
  {
    first_name: "tom",
    Last_name: "cruice",
    Email_id: "tom@gmail.com",
  },
  {
    first_name: "abhay",
    Last_name: "singh",
    Email_id: "abhay@gmail.com",
  },
  {
    first_name: "rahul",
    Last_name: "kumar",
    Email_id: "rahul@gmail.com",
  },
  {
    first_name: "soni",
    Last_name: "kapoor",
    Email_id: "soni@gmail.com",
  },
];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

/** 
 * root route
 */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Accounted created");
});


/** 
 * employee route
 */
  app.get('/employee',(req,res)=>{
    res.json(employeeList)
  })
  
  app.post('/employee',(req,res)=>{
    console.log(req.body)
  })

app.listen(PORT, () => {

  console.log(`server is running on port: ${PORT}`);
});
