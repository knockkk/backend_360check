const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const router = require("./routes");
//连接数据库
const dbConnect = require("./mongodb");
dbConnect(require("./config").dbUrl);

const app = express();
//添加中间件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//路由
router(app);

module.exports = app;
