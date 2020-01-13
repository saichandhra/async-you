var test=function(x,y)
{
var http = require('http')
, async = require('async');
async.each(['cat', 'meerkat', 'penguin'], function(item, done){
var opts = {
  hostname: 'http://httpbin.org',
  path: '/post',
  method: 'POST'
};
var req = http.request(opts, function(res){
  res.on('data', function(chunk){
  });
  res.on('end', function(){
   return done();
  });
});
req.write(item);
req.end();
},
function(err){
if (err) console.log(err);
});
}
test(process.argv(2))
