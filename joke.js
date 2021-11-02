function getJoke(){
    var req = new XMLHttpRequest();
    req.open('GET','jokes.json')
    req.onload = function(){
    var data = JSON.parse(req.responseText);
    htmlRender(data)
       };
    req.send()

    function htmlRender(data){

       let i = Math.floor(Math.random()*300)
       console.log(i)
        document.getElementById("demo").innerHTML=data[i].setup + "<br>"+ data[i].punchline;

    }
}

