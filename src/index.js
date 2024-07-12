const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//http loger
app.use(morgan('combined'))

//cấu hình tempalte engine
app.engine('hbs', handlebars({
    extname: '.hbs',
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/news', (req, res) => {
    return res.render('news')
})
app.get('/', (req, res) => {
    return res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})