const projectName = "random-quote-machine";
localStorage.setItem('example_project', 'Randowm Quote Machine');


var colors = ['#7F6BC5', '#343043', '#1B53BE', '#1BBEA1', '#1BBE5A', '#A7DCBB', '#92E71D','#24360A', '#E1611B', '#8F4F2C', '#6F6E6E', '#E13157', '#964E5D', '#C919E7', '#691179', '#19041C']

var quotes = []

var quote = ''
var author = ''

var getRandomIntInRange = (min, max) => {
  return Math.floor(Math.random()*(max - min + 1)) + min
}
var getQuote = () => {
  return quotes[getRandomIntInRange(0, quotes.length - 1)]
}
var getColor = () => {
  return colors[getRandomIntInRange(0, colors.length)]
}

function getQuotesContainerFromURL() {
  let req = new XMLHttpRequest()
  req.open("GET", 'https://raw.githubusercontent.com/Nordask/front/master/workspace_js/projects/random-quote-machine/quotes.json', false)
  req.send(null)
  if (req.status === 200) {
    let json = JSON.parse(req.responseText)
    quotes = json.quotes
  }
}

function showQuote() {
  if(quotes.length === 0)
    getQuotesContainerFromURL()
  let randomQuote = getQuote()
  quote = randomQuote.quote
  author = randomQuote.author
  $('#forText').text(quote)
  $('#forAuthor').text("-" + author)
  
  let color = getColor()
 
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '"' + author))
  $('#main').css('background-color', color)
  $('.button').css('background-color', color)
  
}

$(document).ready(function() {
  showQuote()
  $("#new-quote").on('click', showQuote)
})

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}