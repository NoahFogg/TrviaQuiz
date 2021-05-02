require('./models/db')

const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')

const studentRoute = require('./Routes/studentRoute')

var app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    /*res.send(
        `<h2>Welcome to Student Database!!</h2>
        <h3>Click here to get started <b>
        <a href = "/student/list">Database</a></b></h3>`
    )*/

    res.send(
        `<h2>Welcome to the Monty Python Quiz!<h2>
        <h3>Get started and login below</h3>
        <Label>Username</Label>
        <input type = "text" id = "Username">
        <br>
        <Label>Password</Label>
        <input type = "text" id= "Password">
        <br>
        <Label>New User</Label>
        <input type ="radio" id="NewUser">
        <Button>Login<Button>
        `
        
    )
});

app.set('views', path.join(__dirname, "/views/"))

app.engine(
    'hbs', 
    exphbs ({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}))

app.set("view engine", "hbs");

app.listen(3000, () => {
console.log("Server started at port 3000");
});

app.use("/student", studentRoute);