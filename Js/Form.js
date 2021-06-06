class Form{
    constructor(){

    }
    display(){
  // DOM : document object model
  var title = createElement("h1")
  title.html("Race Car")
  title.position(600,100)
  title.style("backgroundColor","aqua")

  var input = createInput("Enter Your Name")
  input.position(650,300)
  input.size(200,40)

  var button = createButton("Play")
  button.position(630,400)
  button.size(100,30)
  button.style("backgroundColor","yellow")
  button.style("fontSize","20px")
  button.style("color","blue")
  button.mousePressed(function(){
      input.hide()
      button.hide()
      var name = input.value()
      playerCount+=1
      var greeting = createElement("h2")
      greeting.html("Hello Welcome To The Game "+ name )
      greeting.position(500,300)
      
  })
    }
}