var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try{
        var query = "select * from usuarios where usuario = ? limit 1";
        var rows = await pool.queryI(query, [user, md5(password) ]);
        return rows[0];
    } catch (error){
        throw error;
    }
}

module.exports = {getUserByUsernameAndPassword}