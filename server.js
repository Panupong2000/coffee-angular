const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/my-first'));

ngApp.listen(process.env.PORT || 8080);
