const express = require('express');
const app = express();

app.get("/add", (req, res) => {
    res.send("Hello express users from backend")
})

const port = 5000;



app.listen(port, () => {
    console.log(`server is running on ${port}`);
})