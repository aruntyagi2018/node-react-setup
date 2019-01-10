const Router = require('koa-router');
const flights = require('../utils/common.js');

const router = new Router();

router.get('/api',async (ctx) =>{
     console.log('before file read');
    const data = await flights.getData();
    console.log('after file read');
    ctx.body =data;
});

module.exports =router;