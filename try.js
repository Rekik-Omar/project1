/*
document.getElementById("demo").addEventListener("keypress",myfunction)

function myfunction(){
    document.getElementById("demo").style.backgroundColor="red"
    document.getElementById("demo").style.color="yellow"
}

function mouseup(){
document.getElementById("myP").style.color="blue"
}
function mouseup(){
document.getElementById("myP").style.color="green"
}

function miFunction(){
    alert("the video has started to play");
}

function TrackSize(){
    var x =window.outerWidth;
    var y = window.outerHeight;
    var z = "window size : width"+ x +",height"+ y;
document.getElementById("size").innerHTML = z;    

}
*/

const name = document.getElementById("nameof")
const eyecolor = document.getElementById("eyecolor")
const birthyear = document.getElementById("birthyear")


const button = document.querySelector(".getRandomCharacter")
button.addEventListener('click',(e) =>{
    e.preventDefault() //if it's a part of the form it's not going to submit
    const randomnumber = Math.ceil(Math.random( ) * 83)
fetch(`https://swapi.py4e.com/api/people/${randomnumber}/`)
    .then(response => response.json())
    .then(charactor => {
        console.log(charactor)
        nameof.innerHTML = charactor['name']
        eyecolor.innerHTML = charactor['eye_color']
        birthyear.innerHTML = charactor['birth_year']
    
    })
})































