var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req)
    res.send({
        code: 200,
        data: [
            {
                name: 'rxx',
            },
            {
                name: 'yjr',
            }
        ],
        message: '操作成功'
    });
});

module.exports = router;
