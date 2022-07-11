const Pool = require("pg").Pool;

const pool = new Pool({
    user: "kpbbbwikheciwl",
    password: "235a9d4120b10deb4bcc42fcec7a1fe10404d38fb5a6cd15dacd50969b815bde",
    host: "ec2-52-30-67-143.eu-west-1.compute.amazonaws.com",
    port: "5432",
    database: "ds2rqf87k070k",
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;
