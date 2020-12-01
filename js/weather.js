function gettingJSON(){
    let APIID = 'a6ff91d429cbee7d0ccf6ca11e2a8d03';
    let location = 'Ann Arbor, US'
    if (document.querySelector("#location").value !== "") location = document.querySelector("#location").value
    console.log("Location is : " + location);

    let format = document.querySelector("#fahrenheit").value
    if (document.querySelector("#celcius:checked")) format = document.querySelector("#celcius:checked").value
    console.log("Format is " + format);

    let query = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${format}&appid=${APIID}';
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;

    $.getJSON(query,function(json){
        $("#tempImg").attr("src", 'http://openweathermap.org/img/wn/${json.weather[0].icon}.png')
        $("#tempImg").attr("alt", json.weather[0].description)
        $("#loc").text(json.name)
        $("#temp").text('${json.main.temp} with ${json.weather[0].description}')
        $("#forecast").css("display", "block")
    });
}
