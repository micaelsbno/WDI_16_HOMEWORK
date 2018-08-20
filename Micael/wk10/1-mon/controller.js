const _ = require('lodash')

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
function home(req, res){
  console.log(req)
  res.render('home', {compliment: _.sample(compliments), color: _.sample(colors), name: req.params.name})
}

module.exports = {
  home
}