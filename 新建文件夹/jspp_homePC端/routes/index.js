const router = require('koa-router')(),
      controller = require('../controllers/Home');

router.get('/', controller.index);
router.get('/list/:kw?', controller.list);
router.get('/error', controller.error);
router.get('*', controller.error);

module.exports = router
