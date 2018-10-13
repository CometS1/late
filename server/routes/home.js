const Router = require('koa-router');
const router = new Router();

const Ctrl = require('../controllers/home');

// Match specific routes to their controllers
router.get('/', Ctrl.index);
router.get('about', Ctrl.about);
router.get('honorable', Ctrl.honorable);
router.get('dashboard', Ctrl.dashboard);

module.exports = router.routes();
