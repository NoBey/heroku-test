const koa = require('koa')
const App = new koa()

App.use(async(ctx) =>{
    ctx.body = 'nobey'
})

App.listen(5000)