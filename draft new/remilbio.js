
var quotes=new Array()

//change the quotes if desired. Add/ delete additional quotes as desired.

quotes[0]='bio1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a volutpat ex. Donec vitae diam accumsan, congue mauris nec, auctor augue. Cras malesuada ut risus quis egestas. In aliquam sollicitudin tellus, vel consectetur massa gravida eu. Fusce massa tellus, pretium vel sagittis ac, semper eget massa. </br> <a href="www.twitter.com/ihaveargyles">twitter</a>/
<a href="www.twitter.com/ihaveargyles">instagram</a>'

quotes[1]='bio2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a volutpat ex. Donec vitae diam accumsan, congue mauris nec, auctor augue. Cras malesuada ut risus quis egestas. In aliquam sollicitudin tellus, vel consectetur massa gravida eu. Fusce massa tellus, pretium vel sagittis ac, semper eget massa.</br> <a href="www.twitter.com/ihaveargyles">twitter</a>/
<a href="www.twitter.com/ihaveargyles">instagram</a>'

quotes[2]='bio3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a volutpat ex. Donec vitae diam accumsan, congue mauris nec, auctor augue. Cras malesuada ut risus quis egestas. In aliquam sollicitudin tellus, vel consectetur massa gravida eu. Fusce massa tellus, pretium vel sagittis ac, semper eget massa. </br> <a href="www.twitter.com/ihaveargyles">twitter</a>/
<a href="www.twitter.com/ihaveargyles">instagram</a>'

quotes[3]='<img  class="center" src="https://unsubstantiatedpod.github.io/images/idiot.jpg" alt="idiot" width="200" height="200"> </br> <a href="www.twitter.com/ihaveargyles">twitter</a>/
<a href="www.twitter.com/ihaveargyles">instagram</a>'

var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
