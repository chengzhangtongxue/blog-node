const { getBlogList } = require('../controller/blog');
const { SuccessModel, FailModel } = require('../model/model');

function blogRouter(req, res) {
    if(req.method === 'GET' && req.path === '/api/blog/list') {
        const resPromise = getBlogList(req, res);
        return resPromise.then(data => {
            return new SuccessModel(data);
        })
    }
}

module.exports = blogRouter;