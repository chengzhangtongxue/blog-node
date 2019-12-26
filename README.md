## 博客项目

### 项目初始化
    1. nodemon 自启动修改的node服务
    npm install -g nodemon
    
    2. cross-env 跨平台地设置及使用环境变量
    npm install --save-dev cross-env
    说明: 
    当您使用NODE_ENV =production, 来设置环境变量时，大多数Windows命令提示将会阻塞(报错)。 
    （异常是Windows上的Bash，它使用本机Bash。）同样，Windows和POSIX命令如何使用环境变量也有区别。 
    使用POSIX，您可以使用：$ ENV_VAR和使用％ENV_VAR％的Windows。 
    说人话：windows不支持NODE_ENV=development的设置方式。会报错

    3. mysql 最流行的关系型数据库管理系统

### 注意
    下载最新的 mysql, 并安装的时候，密码可能会选择第一种形式。这是mysql 5.0版本以后的新的密码加密方式
    下载可视化工具 mysqlworkbench 可以链接数据库
    但是在node中通过 
    mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'xxx',
        database: 'blog',
    });
    链接却报错了。
    因为安装的时候选择的是第一种新的加密方式。需要修改加密方式。
    进入mysql数据库(可以 mysqlworkbench 进入，也可以命令行进入执行下面的语句)
    更改加密方式
    ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
    更改密码： 如修改为 123
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';