const newsRouter = require('../routes/news.')
const siteRouters = require('../routes/site')

const router = (app) => {
    app.use('/news', newsRouter)
    
    app.use('/', siteRouters)
}

module.exports = router