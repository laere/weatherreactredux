const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(proxy('http://dataservice.accuweather.com/locations/va/search', { target: 'http://localhost:3000' }));
};
