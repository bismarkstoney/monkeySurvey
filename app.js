const express=require('express')

const app=express()


const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.status(200).json({message: 'Hello world'})
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})