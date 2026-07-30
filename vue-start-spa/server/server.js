const express = require("express");
const db = require("./db");


const app = express();

app.use(express.json());

db.run(`
    CREATE TABLE IF NOT EXISTS admin(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    
    
    )


`);


app.listen(3000, () => {
    console.log("Database Created + Server Test")
});
