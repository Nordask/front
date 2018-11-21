const projectName = "random-quote-machine";
localStorage.setItem('example_project', 'Randowm Quote Machine');


var colors = ['#7F6BC5', '#343043', '#1B53BE', '#1BBEA1', '#1BBE5A', '#A7DCBB', '#92E71D','#24360A', '#E1611B', '#8F4F2C', '#6F6E6E', '#E13157', '#964E5D', '#C919E7', '#691179', '#19041C']

var quotes = [{quote:'Each event is preceded by prophecy. But, without the hero, there is no event.', author: 'Zurin Arctus'}, {quote:'quote1', author: 'author1'}, {quote:'quote2', author: 'author2'}, {quote:'quote3', author: 'author3'}, {quote:'quote4', author: 'author4'}]

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

function showQuote() {
  //console.log(getQuote())
  let randomQuote = getQuote()
  quote = randomQuote.quote
  author = randomQuote.author
  //console.log(quote + "\n" + author )
  //text
  $('#forText').text(quote)
  $('#forAuthor').text("-" + author)
  
  //background color
  let color = getColor()
  /*
  $("#main").animate(
    {
      backgroundColor: color
    },
    1000
  )*/
 
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '"' + author))
  $('#main').css('background-color', color)
  $('.button').css('background-color', color)
  
}

$(document).ready(function() {
  showQuote()
  $("#new-quote").on('click', showQuote)
  /*
  if(!inFrame()) {
  $("#tweet-quote").on('click', () => {
    console.log("Tweet quote")
     openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '"' + author))
  });}*/
})
/*
var inIframe = () => {
  return window.self !== window.top
}*/

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}