class SiteController {
    //GET tìm kiếm
    search (req, res) {
        res.render('search')
    }
    
    //GET home
    index(req, res) {
        res.render('home')
    }
    
}
module.exports = new SiteController