var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

// 接続情報を設定
const{ MongoClient} = require("mongodb");
const uri= process.env.MONGODB_URI;
const client= new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async(req, res) =>{
// データベース、コレクションを指定
constdatabase= client.db('notes');
constnotes= database.collection('notes');
// idが１のドキュメントを取得
constquery= { id:2};
constnote= awaitnotes.findOne(query);
res.json(note);
})
module.exports= router;