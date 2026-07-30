const db = require("./db");

//Create

const createItem = (username, password, email, callback) => {
    const sql = `INSERT INTO users (username, password, email) VALUES (?,?,?)`
    db.run(sql, [username, password, email], function(err) {
        callback(err, {id: this.lastID})
    })
}

const readItem = (callback) => {
    const sql = `SELECT * FROM users`;
    db.all(sql, [], callback)
}


const updateItem = (id, username, password, email, callback) => {
    const sql = `UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?`
    db.run(sql, [username, password, email, id], callback)
}

const deleteItem = (id, callback) => {
    const sql = `DELETE FROM users WHERE id = ?`
    db.run(sql, id, callback)
}

module.exports = {createItem, readItem, updateItem, deleteItem}