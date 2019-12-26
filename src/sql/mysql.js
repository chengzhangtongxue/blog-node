const mySql = require('mysql');
const dbConfig = require('../db/dbConfig');

/**
 * 
 * 每次都会重新链接db
 */
const exec = (sql) => {
    const con = mySql.createConnection(dbConfig);
    con.connect();
    return new Promise((reslove, reject) => {
        con.query(sql, (err, result) => {
            if(err) {
                console.log(err);
                reject();
                return;
            }
            reslove(result);
        })
        con.end();
    });

}

module.exports = {
    exec
};