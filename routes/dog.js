var express = require('express');
var router = express.Router();
const request = require('request');

// GET リクエスト時に犬の画像を取得する
router.get('/', function(req, res, next) {
  request('https://api.thedogapi.com/v1/images/search', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      const dogImageUrl = data[0].url;  // 画像URLを取得
      console.log(dogImageUrl);  // URLをコンソールに表示
      res.send(`<img src="${dogImageUrl}" alt="Random Dog Image">`);  // 画像をHTMLとして返す
    } else {
      res.status(500).send('Error fetching dog image');
    }
  });
});

module.exports = router;
