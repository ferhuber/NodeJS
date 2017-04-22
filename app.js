const path = require('path');
const Express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const Faker = require('Faker');

const home = require('./routes/home');
const app = Express();

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use('/', Express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'))
app.use('/', home);

// const PORT = 6969;
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// app.listen(PORT, function() {console.log("Server is listening on PORT: " + PORT);
// });
