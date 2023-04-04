// 1require express
const express = require ('express')


// 2 create INSTANCE 

const app = express() 
//3 middleware body-parser
app.use(express.json())

//4 create PORT 

const PORT = 5000 

5// create server 
app.listen(PORT,(error)=>{
    error 
    ? console.log(error)
    : console.log(`server is running on PORT ${PORT}`)
})
// simple route test 

app.get('/test',(req,res)=>{
    res.send('hello server ')
})

// statitc DB 

let users = [

    {
        name :'jihed',
        email: 'jihed@gmail.com',
        id:1
    },

    {
        name :'ahmed',
        email: 'ahmed@gmail.com',
        id:2
    },

    {
        name :'achref',
        email: 'achref@gmail.com',
        id:3
    }
]

//get users

app.get('/users/get_users',(req,res)=>{
    res.status(200).send({msg:'list of users ',users })
})



// add new user
app.post('/users/add_user',(req,res)=>{
    const newUser = req.body;
    users =[...users, newUser]
    res.status (200).send({msg:'user add seccsufully',newUser})
})

// view engine pug 

app.set('view engine', 'pug')
app.set('views','./views')


app.get('/',(req,res) => {
    res.render('home')
})

app.get('/service',(req,res) => {
    res.render('service')
})

app.get('/contact',(req,res) => {
    res.render('contact')
})
