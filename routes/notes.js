varexpress= require('express');
varrouter= express.Router();
// 接続情報を設定
const{ MongoClient} = require("mongodb");
consturi= "mongodb+srv://2201100146jm:abcd@cluster0.jrl0b.mongodb.net/tests?retryWrites=true&w=majority&appName=Cluster0 ";
constclient= newMongoClient(uri);
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