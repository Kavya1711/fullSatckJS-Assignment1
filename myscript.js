
let apikey="ee7f3091c2c3f26b420fb8051c44ca96";
let weatherURL=""

async function myFunction(){
    let cityName = document.getElementById("city").value;
    console.log(cityName);
    weatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`

    let result=await fetch(weatherURL);
    let users=await result.json();
    let {name,main:{temp_min,temp_max}}=users;
    document.getElementById("name").innerHTML=`<h1>Name of the city : ${name}</h1>`;
    document.getElementById("max_temp").innerHTML=`<h2>Maximum temp : ${temp_max}</h2>`;
    document.getElementById("min_temp").innerHTML=`<h2>Minimum temp : ${temp_min}</h2>`;

    // document.getElementById('max_temp').innerHTML=users;
    console.log(users);
}
// myFunction();
