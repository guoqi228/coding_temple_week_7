const FRONTEND_DEV_URLS = ['http://localhost:3000'];

const FRONTEND_PROD_URLS = [
  'http://wwww.domain.com',
  'http://domain.com'
]

module.express = process.env.NODE_ENV === 'production'
? FRONTEND_PROD_URLS : FRONTEND_DEV_URLS;
