var test=process.argv.slice(2)
{


var a=async;
async.series({
    one:function(done){
      done(null, '1');
    },
    two: function(done){
      done(null, '2');
    }
  }, function(err, results){
    console.log(results);
    // results will be {one: 1, two: 2}
  });
}
console.log('Myargs:',test)
