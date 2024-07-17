class NewsController {
    //GET news
    index(req, res) {
         res.render('news')
    }

    //GET Detail news/:slug
    show (req, res) {
        res.send('NEW ACCCCCCCCCCCCCCCC')
    }
    
}
module.exports = new NewsController