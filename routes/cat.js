var express = require('express');
var router = express.Router();
const request = require('request');

// GET リクエスト時に猫の画像を取得する
router.get('/', function(req, res, next) {
  request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      const catImageUrl = data[0].url;  // 画像URLを取得
      console.log(catImageUrl);  // URLをコンソールに表示
      res.send(`<img src="${catImageUrl}" alt="Random Cat Image">`);  // 画像をHTMLとして返す
    } else {
      res.status(500).send('Error fetching cat image');
    }
  });
});

module.exports = router;
