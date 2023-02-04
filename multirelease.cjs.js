const multirelease = require('multi-semantic-release');

multirelease([
  `${__dirname}/adapters/mapbox/package.json`,
]);
