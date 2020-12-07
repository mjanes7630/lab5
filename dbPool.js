const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "tz2yby52djmj50xl",
    password: "e56cmof0jzf0120o",
    database: "h67ratsd6oc2f9b2"
});

module.exports = pool;
