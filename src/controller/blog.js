const { exec } = require('../sql/mysql');

const getBlogList = (req, res) => {
    return exec(`select * from users`).then((data) => {
        return data;
    })
}

module.exports = {
    getBlogList,
}