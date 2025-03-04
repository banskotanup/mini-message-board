const pool = require("../db/pool");

exports.getAllMsgData = async () => {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
};

exports.insertNewMessage = async (messageUser, messageText) => {
    await pool.query("INSERT INTO messages (username, messages) VALUES ($1, $2)", [messageUser, messageText]);
}