var koa = require('koa');
var app = koa();
var port = process.env.PORT || 3000;
app.use(function *(){
  this.body = 'Hello World';
});

app.listen(port);