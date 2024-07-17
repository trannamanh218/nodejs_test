const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const router = require('./routes')

const port = 3000


// cấu hình đường dẫn có thể path được ảnh /img/abc.jpg
app.use(express.static(path.join(__dirname, 'public')))

//sử dụng milldaware 
//Middleware express.urlencoded sẽ phân tích dữ liệu này và thêm nó vào đối tượng req.body, 
//cho phép bạn truy cập các giá trị trong form bằng cách truy cập vào các thuộc tính của req.body
app.use(express.urlencoded(
    {
        extended: true,
    }
))

app.use(express.json())


//http loger -> log trong teminal khi load lại trang
// app.use(morgan('combined'))

//cấu hình tempalte engine -> cấu hình đuôi file handlebar cho ngắn 
app.engine('hbs', handlebars({
    extname: '.hbs',
}));

// cấu hình hiển thị file index
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources/views'))

//khởi tạo route
router(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})