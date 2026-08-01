const express = require("express");
const cors = require("cors");
const {createItem, readItem, updateItem, deleteItem} = require("./crud");
const db = require("./db");



const app = express();

app.use(cors());
app.use(express.json());




app.get('/users', (req, res) => {
    readItem((err, rows) => {
        if(err){
            res.status(500).send(err.message )
        }else {
            res.status(200).json(rows)
        }
    })
})


app.post('/users', (req,res) => {
    const {username, password, email} = req.body
    createItem(username, password, email, (err, data) => {
        if(err) {
            res.status(500).send(err.message)
        }else {
            res.status(200).send(`admin is created with username: ${data.username}`)
        }
    })
})

app.put('/users/:id', (req, res) => {
    const {username, password, email} = req.body;
    updateItem(req.params.id, username, password, email, (err) => {
        if(err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).send("Updated Item")
        }
    })

})

app.delete('/users/:id', (req, res) => {
    deleteItem(req.params.id, (err) => {
        if(err){
            res.status(500).send(err.message)
        } else {
            res.status(200).send("deleted admin")
        }
    })
})


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

 
app.listen(3000, () => {
    console.log("server is on")
})