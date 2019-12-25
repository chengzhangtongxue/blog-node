const mySql = require('mysql');

const con = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'blog',
});

con.connect();

con.query(`select * from users;`, (err, result) => {
    console.log(result[0]);
})

con.end();