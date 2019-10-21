window.addEventListener('load', ()=>{
    let long = 24.7037952;
    let lat = 59.4075648;
  /*   let long;
    let lat; */

  /*   if("geolocation" in navigator){
        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log("Long: ", long);
        console.log("Lat: ", lat);
    }
 */
    /* if(navigator.geolocation){
        navigator-geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log("Long: ", long);
            console.log("lat: ", lat);

        })
    }
 */
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api= `${proxy}https://api.darksky.net/forecast/69fb9727b4fbc09bc9578c7228de41ca/${lat},${long}`;
    
    fetch(api)
    .then(response => {
       console.log(response.json()); 
    });



});