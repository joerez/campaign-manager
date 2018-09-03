const express = require('express');
const app = express();
const port = process.env.PORT || '5000';

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/campaign-manager', () => {
  console.log("Connected to Campaign-Manager Database");
});


const authKeys = require('./config/keys');
const passport = require('passport');
require('./services/passport.js');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [authKeys.cookieKey]
  })
)
app.use(passport.initialize());
app.use(passport.session());

//Initalize the texting object
let texts = {};
module.exports = {texts};

//User Controller and Model
const User = require('./models/User.js');
const Email = require('./models/Email.js');
require('./controllers/user.js')(passport, app, User);
require('./controllers/email.js')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js or main.css file
  app.use(express.static('client/build'));
  // Express will serve up index.html file
  // if it doesnt recognize route
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log("lets send some campaigns on port " + port);
})
