// http 是node 自带的 模块
const http = require('http');
// querystring 是 node 自带模块
const querystring = require('querystring');
const blogRouter = require('./src/router/blog');
const userRouter = require('./src/router/user');
const ejs = require('ejs');

const PORT = 3000;

const getPostData = (req, res) => {
    const promise = new Promise((reslove, reject) => {
        try {
            if(req.method === 'GET') {
                reslove({});
            } else if(req.method === 'POST') {
                let postData = '';
                req.on('data', (data) => {
                    postData += data;
                });
                req.on('end', () => {
                    reslove(JSON.parse(postData));
                });
            }
        } catch(err) {
            reslove({});
        }
    });
    return promise;
}
    

const createServerHandler = (req, res) => {
    const url = req.url.split('?');
    req.query = querystring.parse(url[1]);
    req.path = url[0];

    if(req.path === '/') {
        ejs.renderFile('./ejs/index.ejs',{
            arr: [
                {title: '标题1', content: '内容1'},
                {title: '标题2', content: '内容2'},
                {title: '标题3', content: '内容3'},
            ]
        },(err,data) => {
            if(err) {
                console.log(err, '编译失败');
                return;
            }
            res.writeHeader(200, {
                'Content-type':'text/html;chartset=utf-8'
            });
            res.end(data);
        })
        return;
    }

    /**
     * 设置返回数据类型为 application/json 类型 返回状态码为 200
     */
    res.writeHeader(200, {
        'Content-type':'application/json'
    });

    getPostData(req, res).then((postData) => {
        req.body = postData;
        const resultBlog = blogRouter(req, res);
        resultBlog.then(data => {
            res.end(JSON.stringify(data));
            return;
        })
        // const userData = userRouter(req, res);
        // if(userData) {
        //     res.end(JSON.stringify(userData));
        //     return;
        // }
    
        // res.writeHeader(404, {
        //     'Content-type':'text/html;charset=utf-8'
        // });
        // res.end(`404 您访问的页面不存在`);
    })
}

const app = http.createServer(createServerHandler);
app.listen(PORT, () => {
    console.log(`server is starting in ${PORT}...`);
});

/**
 * 跨域解决
 * res.header("Access-Control-Allow-Origin", '*');
 * res.header("Access-Control-Allow-Headers", "Content-Type");
 * res.header("Access-Control-Allow-Methods","*");//允许访问的方式
 * res.header("Content-Type", "application/json;charset=utf-8");
 */