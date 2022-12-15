const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const profileRoutes = require('./profileRoutes.js');
const searchRoutes = require('./searchRoutes.js');
const collectionRoutes = require('./collectionRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/search', searchRoutes);
router.use('/collection', collectionRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;