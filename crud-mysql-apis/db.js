import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const conn= mysql.createConnection({
       
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,

});

conn.connect((err)=>{
    err?console.error("database connection failed:", err)
       :console.log("Connected to MYSQL DB");
});

export default conn;