const Koa = require('koa');
const koaBodyparser = require('koa-bodyparser');
const apiRouter = require('./routes/api');
const app = new Koa();

app.use(koaBodyparser());

app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());




const port = process.env.PORT || 5000;
app.listen(port,function(){
const logger = console.log;
logger('server is listining on port : ',port);
});
