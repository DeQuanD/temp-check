
/*const promise1 = new Promise((res, rej) =>{
    setInterval(()=>{
        res("dead")

    }, 2000)
});

promise1.then((val)=>
{console.log(val)}
)*/

let map =[]
const apiKey = "0831a42d48d2ee1ba71303e69ff51f50"
var repoList = document.querySelector('ul');
const locInput = document.querySelector("input");
const btn = document.querySelector("button")
const temp = document.querySelector("#Temp")
const vid = document.querySelector("video")
const locale = document.querySelector("#locale")
vid.playbackRate = 0.40;
    


//Onload
navigator.geolocation.getCurrentPosition((position)=>{
 let currLat =  position.coords.latitude;
 let currLon =  position.coords.longitude;

 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currLat}&lon=${currLon}&appid=${apiKey}&units=imperial`)
          .then((cityData)=>cityData.json())
          .then((data)=>{
            console.log(data)
            var weatherCond= document.querySelector("#weatherCond")
            locale.textContent=data.name + ", " + data.sys.country
            temp.textContent = "Current Temperature: " + data.main.temp + "°F"
            weatherCond.textContent = data.weather[0].main
              temp.animate([
               { color: "white"},
               { color: "white"},
              ],
            {
                duration:500,
                iterations: Infinity,
            })
           /* temp.style.animationPlayState = "paused";*/
           
          })

,(error)=>{console.log(error)}})

//Search
btn.addEventListener('click',()=>{
   let location = locInput.value
   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`)
   
   
/*weather.then((value)=>value.json())
.then((json)=>JSON.stringify(json[0].lat))
.then((value)=>{console.log(value)})*/

/*let weather2 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`)*/
.then((value)=>
     value.json())
.then((data)=> {
    console.log(data)

    while(repoList.firstChild){
    repoList.firstChild.remove()
   }

    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        var coordLat = document.createElement("p")
        var coordLon = document.createElement("p")
    
        listItem.textContent = data[i].name +", "+data[i].state+ ", " + data[i].country;
        coordLat.textContent = data[i].lat; 
        coordLon.textContent = data[i].lon;
        repoList.appendChild(listItem);
        listItem.appendChild(coordLat)
        listItem.appendChild(coordLon)
        console.log(data)
      }
      
      const item = document.querySelectorAll('li');
      for(const key of item.keys()){
       item[key].addEventListener('click', (e)=>{
            console.log(key)
           let lat =data[key].lat
           let lon = data[key].lon
           console.log(lat, lon)
           
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
          .then((cityData)=>cityData.json())
          .then((data)=>{
            console.log(data)
            var weatherCond= document.querySelector("#weatherCond")
            locale.textContent=data.name + ", " + data.sys.country
            temp.textContent = "Current Temperature: " + data.main.temp + "°F"
            weatherCond.textContent = data.weather[0].main
          }
          
         )
    
       })
      }

})


})





/*let weather = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`)*/

/*var j= 0; j < item.length; j++*/

  