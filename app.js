// http 是node 自带的 模块
const http = require('http');
// querystring 是 node 自带模块
const querystring = require('querystring');
const blogRouter = require('./src/router/blog');
const userRouter = require('./src/router/user');

const PORT = 3000;

const getPostData = (req, res) => {
    const promise = new Promise((reslove, reject) => {
        if(req.method === 'GET') {
            reslove({});
        } else if(req.method === 'POST') {
            let postData = '';
            req.on('data', (data) => {
                postData += data;
            });
            req.on('end', () => {
                reslove(postData);
            });
        }
    });
    return promise;
}
    

const createServerHandler = (req, res) => {
    const url = req.url.split('?');
    req.query = querystring.parse(url[1]);
    req.path = url[0];

    /**
     * 设置返回数据类型为 application/json 类型 返回状态码为 200
     */
    res.writeHeader(200, {
        'Content-type':'application/json'
    });

    getPostData().then((postData) => {
        req.body = postData;
        const blogData = blogRouter(req, res);
        if(blogData) {
            res.end(JSON.stringify(blogData));
            return;
        }
        const userData = userRouter(req, res);
        if(userData) {
            res.end(JSON.stringify(userData));
            return;
        }
    
        res.writeHeader(404, {
            'Content-type':'text/html;charset=utf-8'
        });
        res.end(`404 您访问的页面不存在`);
    })
}

const app = http.createServer(createServerHandler);
app.listen(PORT, () => {
    console.log(`server is starting in ${PORT}...`);
});