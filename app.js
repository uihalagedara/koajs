import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import postsRouter from './router/posts.router.js';

const app = new Koa();

app.use(bodyparser());

app.use(postsRouter.routes())
    .use(postsRouter.allowedMethods());

app.use(ctx => {
    ctx.set('Content-Type', 'text/html')
    ctx.body = '<h3>Not found</h3';
})

app.listen(3000, () =>{
    console.log("Application runnig on port 3000");
});