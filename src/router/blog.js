const { getBlogList } = require('../controller/blog');
const { SuccessModel, FailModel } = require('../model/model');

function blogRouter(req, res) {
    if(req.method === 'GET' && req.path === '/api/blog/list') {
        const list = getBlogList(req, res);
        return new SuccessModel(list);
    }
}

module.exports = blogRouter;