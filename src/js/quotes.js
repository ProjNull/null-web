console.log("ss")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



var randquote = async () => {
    var container = document.querySelector("div#random-quote")
    container.style.opacity = "0"
    var data = (await (await fetch("/assets/json/quotes.json")).json())
    var quote = data[getRandomInt(data.length)]
    container.style.opacity = "1"
    container.innerHTML = '"' + quote.quote +'" <br><code>- ' + quote.by + '<code>'    
}



randquote()
