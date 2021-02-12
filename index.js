const dotenv = require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 6969

app.use(cors());
app.use(express.json());
app.use('/api/*',(_, res)=>{
    res.json({  data: "The api data. Wooooow.",
                message:"It worked."})
}); 
app.listen(port, ()=>{
    console.log(`server is alive on port ${port}`)
});