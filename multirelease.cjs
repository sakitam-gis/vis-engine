const multirelease = require('multi-semantic-release');

multirelease([
  `${__dirname}/adapters/mapbox/package.json`,
  `${__dirname}/adapters/maptalks/package.json`,
]);
