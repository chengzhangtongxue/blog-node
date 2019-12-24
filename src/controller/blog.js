const getBlogList = (req, res) => {
    return [
        {
            id: 1,
            name: '博客1',
            content: '博客内容1',
            createTime: 1577168119395
        },
        {
            id: 2,
            name: '博客2',
            content: '博客内容2',
            createTime: 1577168137352
        },
    ]
}

module.exports = {
    getBlogList,
}