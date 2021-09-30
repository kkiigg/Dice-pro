var router = require('koa-router')();

router.prefix('/users');

router.get('/', function *(next) {
  this.body = 'this is a users response!';
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

router.get('/login', function *(next) {
  this.body = {
  	status:200,
  	data:{
  		username:'ajck',
  		id:'nnnn'
  	}
  };
});

module.exports = router;
