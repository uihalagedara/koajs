import Router from '@koa/router';

import {getAll, createProfile, addToCart, getAllCartItems, addToWhishlist, getAllWishlist, addPurchase, getAllPurchase} from '../api/customer.api.js';

const customerRouter = new Router({
    prefix: '/customer'
});

customerRouter.get('/items', (ctx)=>{
    ctx.body = getAll();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

customerRouter.post('/', (ctx)=>{
    const data = ctx.request.body;
    const post = createProfile(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

customerRouter.post('/addToCart', (ctx)=>{
    const data = ctx.request.body;
    const post = addToCart(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

customerRouter.get('/CartItems', (ctx)=>{
    ctx.body = getAllCartItems();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

customerRouter.post('/addToWishlist', (ctx)=>{
    const data = ctx.request.body;
    const post = addToWhishlist(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

customerRouter.get('/WishlistItems', (ctx)=>{
    ctx.body = getAllWishlist();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

customerRouter.get('/getPurchase', (ctx)=>{
    ctx.body = getAllPurchase();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

customerRouter.post('/addPurchase', (ctx)=>{
    const data = ctx.request.body;
    const post = addPurchase(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})



export default customerRouter;