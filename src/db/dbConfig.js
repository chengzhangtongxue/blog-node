const dbConfig = process.env.NODE_ENV === 'development' ? {
    // 开发环境
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'blog',
}:{
    // 生产环境
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'blog',
}

module.exports = dbConfig;