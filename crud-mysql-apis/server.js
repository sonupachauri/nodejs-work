import express from "express";
const app = express();
const port = 3000;
import db from './db.js';
import cors from 'cors'
import bodyParser  from "body-parser";

app.use(cors());
app.use(bodyParser.json());
app.listen(port,(err)=>{
    try {
        console.log(`server is running on port: ${port}`);
    } catch (err) {
        console.log("something went wrong!!")
    }
})

app.get('/',(req,res)=>{
 res.send("one test url!!")
})

// post API ---- Create a new user
app.post('/users',(req,res)=>{
    
    const {name,email,age} = req.body;

    const sql = 'INSERT INTO users (name,email,age) VALUES (?,?,?)';

    db.query(sql, [name, email, age], (err, result) => {
        if (err) return res.status(500).json({ "error": err.message });
        res.status(201).json({ message: 'User added', id: result.insertId });
    });

    // res.status(201).json({message:'post api called!!'})
});

app.get('/users/:id',(req,res)=>{
   const sql = 'SELECT * from users where id=?';
   const {id}= req.params;
   db.query(sql,id,(err,result)=>{

    if (err) return res.status(500).json({ "error": err.message });
    res.json({result});

   })
})


app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});


app.put('/users/:id',(req,res)=>{
    const sql = 'UPDATE users SET name=?,email=?,age=? WHERE id=?';
    const {name,email,age}= req.body;
    const {id}= req.params;
    db.query(sql,[name,email,age,id],(err)=>{
 
        if (err) return res.status(500).json({ error: err.message });
        res.json({message:"User updated!!"});

    })
 })


 app.delete('/users/:id',(req,res)=>{
    const sql = 'DELETE from users WHERE id=?';
    const {id}= req.params;
    db.query(sql,id,(err)=>{
 
        if (err) return res.status(500).json({ error: err.message });
        res.json({message:"User Deleted!!"});

    })
 })