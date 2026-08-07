const sqlite3 = require("sqlite3").verbose();

//Creates our New Database with All our Tables
const db = new sqlite3.Database("./users.db", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Database Created")
        db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT NOT NULL,password TEXT NOT NULL,email TEXT NOT NULL UNIQUE)", (err) => {
            if (err){
                console.error(err.message)
            }else {
                console.log("Table created or exists")
            }
        } ),
        db.run(`INSERT OR IGNORE INTO users (username, password, email)
                VALUES ("admin", "1234", "admin@g.com")`, (err) => {
                    if (err){
                        console.error(err.message)
                        console.log("error is in users")
                    } else {
                        console.log("admin created")
                    }
                });
        db.run(`CREATE TABLE IF NOT EXISTS donations(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, card_no TEXT NOT NULL, expiry_date TEXT NOT NULL, secur_code TEXT NOT NULL, amount INT NOT NULL)`, (err) => {
            if (err){
                console.error(err.message)
                console.log("the error is here")
            }else {
                console.log("donation Table created or exists")
            }
        });
        db.run(`CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, response TEXT NOT NULL)`, (err) => {
            if (err){
                console.error(err.message)
                console.log("the error is here")
            }else {
                console.log("contacts Table created or exists")
            }
        });
        db.run(`CREATE TABLE IF NOT EXISTS volunteers(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phone TEXT NOT NULL, email TEXT NOT NULL, preferred TEXT NOT NULL, town TEXT NOT NULL, info TEXT NOT NULL )`, (err) => {
            if (err){
                console.error(err.message)
                console.log("the error is here")
            }else {
                console.log("volunteers Table created or exists")
            }
        });
        db.run(`CREATE TABLE IF NOT EXISTS corporate(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, company TEXT NOT NULL, position TEXT NOT NULL, email TEXT NOT NULL, postcode TEXT NOT NULL, info TEXT NOT NULL)`, (err) => {
             if (err){
                console.error(err.message)
                console.log("the error is here")
            }else {
                console.log("volunteers Table created or exists")
            }
        });
    }



});


module.exports = db;