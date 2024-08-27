//import dotenv

require('dotenv').config() //loads the environments

// import express

const express = require('express')

// import cors

const cors = require('cors')
// import router
const router = require('./routes')

// import mongoDB connection file
require('./connection')

// create server
const pfServer=express()

// to connect with frontend
pfServer.use(cors())

// parse json formate to js - json()

pfServer.use(express.json())

//router
pfServer.use(router)

// static - method is used to export a folder/file from serverside
// first argument - the name in which other applicatation(frontend) should use this file/folder
// sec argument - path of the file which need to be exported
pfServer.use('/uploads',express.static('./uploads'))

// port

const PORT = 4000 || process.env.PORT

// Server checking the request received at port

pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})

// logic
/*
pfServer.get('/get',(req,res)=>{
    res.send('get request received')
})

pfServer.post('/post',(req,res)=>{
    res.send('post request received')
})

pfServer.put('/put',(req,res)=>{
    res.send('put request received')
})

pfServer.delete('/delete',(req,res)=>{
    res.send('delete request received')
})
*/