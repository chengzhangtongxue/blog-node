const { getBlogList } = require('../controller/blog');

function blogRouter(req, res) {
    if(req.method === 'GET' && req.path === '/api/blog/list') {
        return getBlogList(req, res);
    }
}

module.exports = blogRouter;