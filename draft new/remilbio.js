
var quotes=new Array()

//change the quotes if desired. Add/ delete additional quotes as desired.

quotes[0]='bio1'

quotes[1]='bio2'

quotes[2]='bio3'

var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
