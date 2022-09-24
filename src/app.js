const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
require("./db/conn");
const Register = require("./models/register");
const Contact = require("./models/contactus");
const { resourceLimits } = require("worker_threads");



app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"../public//")));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"));
});



app.post("/", async(req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
        
        console.log(useremail.password === password);

        if(useremail.password === password){
            //res.status(201).render("hello");
            res.sendFile(path.join(__dirname,"../public/index3.html"));
        } else{
            res.send("Invalid Login");
        }

    }  catch(error) {
        res.status(400).send("Invalid Login Details");
    }
})

app.get("/registertion", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/registeration.html"));
});

app.post("/registertion", async(req,res) => {
     try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password === cpassword){
            const registerEmployee = new Register({
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                password : req.body.password,
                cpassword : req.body.cpassword
            }) 

            const registered = await registerEmployee.save();
            res.redirect("/");
           
        }
        else{
            res.send("Password unmatched");
        }
     }

     catch(error) {
        res.status(400).send(error);
     }
})

//product
app.get('/product', (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index2.html"));
})

// contact 

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index4.html"));
})


app.post('/contact',(req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        //res.send("This item saved to the database")
     
        res.sendFile(path.join(__dirname,"../public/index4.html"));
    }).catch(()=>{
        res.status(400).send("Item not saved")
    });

});




app.listen(port, () =>{
    console.log(`server running ${port}`);
})
