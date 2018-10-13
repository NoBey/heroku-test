const koa = require('koa')
const App = new koa()
const PORT = process.env.PORT || 5000
App.use(async(ctx) =>{
    ctx.body = 'nobey' + PORT
})

App.listen(PORT)