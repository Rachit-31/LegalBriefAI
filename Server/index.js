const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors');
const mongoose = require('mongoose');
const app=express();
const cookieParser = require('cookie-parser')

// database conneciton
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Database Connected"))
.catch((err)=>console.log('Database not connected',err))


// middle ware
app.use(express.json());
// for json webtoken these 2 middle ware are used
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use('/',require('./routes/authRoutes'))

const port=8000;
app.listen(port,()=>console.log(`server is running on port ${port}`))