const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var abc = 123;
    var b = 2;
    var d = abc + b;
    return res.send('Hello World!fdfdfdf lồn acb ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})