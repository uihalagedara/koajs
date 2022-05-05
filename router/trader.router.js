import Router from '@koa/router';

import {addItem, update, getAllCustomers, getAllPromotions, addPromotions, getAllIventry} from '../api/trader.api.js';

const traderRouter = new Router({
    prefix: '/trader'
});

traderRouter.post('/', (ctx)=>{
    const data = ctx.request.body;
    const post = addItem(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

traderRouter.put('/:id', (ctx)=>{
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

traderRouter.get('/customers', (ctx)=>{
    ctx.body = getAllCustomers();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

traderRouter.get('/promotions', (ctx)=>{
    ctx.body = getAllPromotions();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

traderRouter.post('/addPromotion', (ctx)=>{
    const data = ctx.request.body;
    const post = addPromotions(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

traderRouter.get('/inventry', (ctx)=>{
    ctx.body = getAllIventry();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;
})

export default traderRouter;