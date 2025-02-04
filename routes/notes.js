var express = require('express');
var router = express.Router();

// 接続情報を設定
const{ MongoClient} = require("mongodb");
const uri= "mongodb+srv://2201100146jm:abcd@cluster0.jrl0b.mongodb.net/tests?retryWrites=true&w=majority&appName=Cluster0 ";
const client= new MongoClient(uri);
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