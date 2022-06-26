const express = require("express")

const app = express();

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Web server is listening on port 3000`)
})