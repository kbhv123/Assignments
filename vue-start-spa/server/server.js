
//Imports for database related functionality
const express = require("express");
const cors = require("cors");
const db = require("./db");



const app = express();

app.use(cors());
app.use(express.json());




//Login Check with Exact Email and Password
app.post("/login", (req, res) => {

    const {password, email} = req.body;
    console.log("password: ", password);
    console.log("email: ", email);
    db.get(
        "SELECT * FROM users WHERE password = ? AND email = ?",
        [password, email],
        (err, user) => {
            if (err) {
                res.status(500).send(err.message)
            } else {
                if (user) {
                    res.json({
                        success: true,
                        message: "logged in",
                        user: user
                    })
                } else {
                    res.status(401).json({
                        success: false,
                        message: "Wrong email or password"
                    });
                }
            }
        }
    );
});

//Donations Post Request to Add New Donations
app.post("/donations", (req, res) => {
    const {name, email, card_no, expiry, security_code, amount} = req.body;
    

    db.run(

        `INSERT INTO donations (name, email, card_no, expiry_date, secur_code, amount) VALUES (?,?,?,?,?,?)`,
        [name, email, card_no, expiry, security_code, amount],

        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    
                });
            }
        }

    );

});

//Get Request For Donations to Display Donations to Admins
app.get("/donations", (req, res) => {


    const page = Number(req.query.page) || 1;
    const limit = 5;
    const offset = (page-1) * limit;

    db.all(
        "SELECT * FROM donations LIMIT ? OFFSET ?", 
        [limit, offset],
        (err, rows) => {
            if (err) {
                res.status(500).send(err.message)
            } else {
                res.json(rows);
            }
        }
    )

});

//Delete Request for Donations
app.delete("/donations/:id", (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM donations WHERE id = ?", [id], 
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    
                });
            }
        }

    );
    
});

//Post Request to Add more Admins
app.post("/admin", (req, res) => {
    const {username, password, email} = req.body;


    db.run(
        `INSERT INTO users (username, password, email) VALUES (?,?,?)`,
        [username, password, email],
        function (err) {
            if (err) {
                if (err.message.includes("UNIQUE")) {
                    return res.status(400).json({
                        success: false, 
                        message: "Email Already Exists"
                    });
                }
                return res.status(500).json({
                    success: false, 
                    message: err.message
                })
            }
            res.json({
                success: true,
                id: this.lastID
            })
        }
    );
});


//Get Request to See All Admins
app.get("/admin", (req, res) => {


    const page = Number(req.query.page) || 1;
    const limit = 5;
    const offset = (page-1) * limit;

    db.all(
        "SELECT * FROM users LIMIT ? OFFSET ?", 
        [limit, offset],
        (err, rows) => {
            if (err) {
                res.status(500).send(err.message)
            } else {
                res.json(rows);
            }
        }
    )

});


//Delete Request for admin
app.delete("/admin/:id", (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM users WHERE id = ?", [id], 
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    
                });
            }
        }

    );
    
});



//Post Request to Add new Contact Information from Users
app.post("/contact", (req, res) => {
    const {name, email, response} = req.body;


    db.run(
        `INSERT INTO contacts (name, email, response) VALUES (?,?,?)`,
        [name, email, response],
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    id: this.lastID
                });
            }
        }
        
    )

});



//Get Request to Display all Contact Messages
app.get("/contact", (req, res) => {


    const page = Number(req.query.page) || 1;
    const limit = 5;
    const offset = (page-1) * limit;

    db.all(
        "SELECT * FROM contacts LIMIT ? OFFSET ?", 
        [limit, offset],
        (err, rows) => {
            if (err) {
                res.status(500).send(err.message)
            } else {
                res.json(rows);
            }
        }
    )

});


//Delete Request for contact
app.delete("/contact/:id", (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM contacts WHERE id = ?", [id], 
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    
                });
            }
        }

    );
    
});


//Post Request to Add New Volunteer Requests
app.post("/volunteer", (req, res) => {
    const {name, phone, email, preferred, town, info} = req.body;


    db.run(
        `INSERT INTO volunteers (name, phone, email, preferred, town, info) VALUES (?,?,?,?,?,?)`,
        [name, phone, email, preferred, town, info],
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    id: this.lastID
                });
            }
        }
        
    )

});

//Get Request to display Volunteer Requests to Admins
app.get("/volunteer", (req, res) => {


    const page = Number(req.query.page) || 1;
    const limit = 5;
    const offset = (page-1) * limit;

    db.all(
        "SELECT * FROM volunteers LIMIT ? OFFSET ?", 
        [limit, offset],
        (err, rows) => {
            if (err) {
                res.status(500).send(err.message)
            } else {
                res.json(rows);
            }
        }
    )

});


//Delete Request for volunteer
app.delete("/volunteer/:id", (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM volunteers WHERE id = ?", [id], 
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    
                });
            }
        }

    );
    
});

//Post Request to Add New Corporate Requests
app.post("/corporate", (req, res) => {
    const {name, company, position, email, postcode, info} = req.body;


    db.run(
        `INSERT INTO corporate (name, company, position, email, postcode, info) VALUES (?,?,?,?,?,?)`,
        [name, company, position, email, postcode, info],
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    id: this.lastID
                });
            }
        }
        
    )

});

//Get Request for Corporate Messages so Admins Can See
app.get("/corporate", (req, res) => {


    const page = Number(req.query.page) || 1;
    const limit = 5;
    const offset = (page-1) * limit;

    db.all(
        "SELECT * FROM corporate LIMIT ? OFFSET ?", 
        [limit, offset],
        (err, rows) => {
            if (err) {
                res.status(500).send(err.message)
            } else {
                res.json(rows);
            }
        }
    )

});


//Delete Request for corporate
app.delete("/corporate/:id", (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM corporate WHERE id = ?", [id], 
        function(err){
            if (err) {
                res.status(500).json({success: false, message:err.message})
            } else {
                res.json({
                    success: true,
                    
                });
            }
        }

    );
    
});


//Allows our Server to Listen to Requests 
app.listen(3000, () => {
    console.log("server is on")
});