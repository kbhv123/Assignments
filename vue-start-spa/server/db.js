const sqlite3 = require("sqlite3").verbose();

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
                    } else {
                        console.log("admin created")
                    }
                });
    }



});


module.exports = db;