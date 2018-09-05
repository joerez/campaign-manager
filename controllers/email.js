var mailgun = require("mailgun-js");
var api_key = 'key-97e26a19d7f5fca62486b7d417534faf';
var domain = 'sandboxcacee8588d54497db4381ef2ff3023b1.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const User = require('../models/User.js');
const Email = require('../models/Email.js');


module.exports = (app) => {

  app.post('/api/emails/new', (req, res) => {

    var data = {
      from: 'Joe <' + req.body.email + '>',
      to: req.body.recipients,
      subject: req.body.subject,
      text: req.body.body,
      user: req.user.id
    };

    console.log(data);

    let email = new Email();

    email.user = data.user;
    email.to = data.to;
    email.subject = data.subject;
    email.from = data.from;
    email.text = data.text;
    email.title = req.body.title;

    email.save(function(err, email) {
      mailgun.messages().send(data, function (error, body) {
        if (error) {
          console.log('error: ' + error)
        }
        console.log(body);
        res.redirect('/dashboard')
      });
    })


  })


  app.get('/api/emails', (req, res) => {
    Email.find({ user: req.user.id }).then((emails) => {
      res.send(emails);
    })
  })

}
