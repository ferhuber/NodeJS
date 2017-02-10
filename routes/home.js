const Express = require('express');
const router = Express.Router();
const faker = require('faker');

router.get('/', function (request, response) {
  response.render('home/index');
})

router.get('/quiz', function (request, response) {
  let tweets = request.cookies.tweet;
  if (tweets == undefined){
    tweets = [];
    response.cookie('tweet',tweets);
  }
  response.render('home/quiz', {faker, tweets});
})

router.post('/', function(request, response) {
  const params = request.body;
  let tweets = request.cookies.tweet;
  tweets.push(params);
  response.cookie('tweet',tweets);
  response.render('home/quiz',{faker, tweets});
});

module.exports = router;
