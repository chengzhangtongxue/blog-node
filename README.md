## 博客项目

### 项目初始化
    1. nodemon 自启动修改的node服务
    `npm install -g nodemon`
    
    2. cross-env 跨平台地设置及使用环境变量
    `npm install --save-dev cross-env`
    说明: 
    当您使用NODE_ENV =production, 来设置环境变量时，大多数Windows命令提示将会阻塞(报错)。 （异常是Windows上的Bash，它使用本机Bash。）同样，Windows和POSIX命令如何使用环境变量也有区别。 使用POSIX，您可以使用：$ ENV_VAR和使用％ENV_VAR％的Windows。 
    说人话：windows不支持NODE_ENV=development的设置方式。会报错