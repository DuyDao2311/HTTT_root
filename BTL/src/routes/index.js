const { Router } = require('express');

const bookRoutes = require('./book.routes');
const readerRoutes = require('./reader.routes');
const statsRoutes = require('./stats.routes');

const router = Router();

router.use('/books', bookRoutes);
router.use('/readers', readerRoutes);
router.use('/stats', statsRoutes);

module.exports = router;

