const userTab = document.querySelector("[data-userWeather]");
const searchTab= document.querySelector("[data-searchWeather]");
const userweather = document.querySelector(".weather-container");
const grantAccessContainer =document.querySelector(".grant-location-container");
const searchForm = document.querySelector(".form-container");
const loadingscreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-weather");

// initially variables need ???
let oldTab = userTab;
const API_KEY = "08fdf708f609d2947eca0c06db6c3015";
oldTab.classList.add("current-tab"); 


// ek kaam or pending hain ??
getfromSessionStorage(); 
function switchTab (newTab){
    if(newTab != oldTab){
        oldTab.classList.remove("current-tab");
        oldTab=newTab;
        oldTab.classList.add("current-tab");
        
        if(!searchForm.classList.contains("active")){
            // kya search form wala container is invisible , if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            //man pehle search wale tab pr tha ab your weather tab visible karna hai
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // ab main your weather tab me aagaya hoon , to weather bhi display  karna hoga , so let's check local storage first for cordinates , if we haved saved them there.
            getfromSessionStorage();
            
        }
    }
}

userTab.addEventListener("click" , () =>{
    // pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click" , () =>{
    // pass clicked tab as input parameter
    switchTab(searchTab);
});

function getfromSessionStorage(){
    const localCoordinates =sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active"); 
    }
    else{
        const coordinates=JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);     
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat ,lon} = coordinates;

    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingscreen.classList.add("active");

    // api call

    try{
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingscreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingscreen.classList.remove("active");
        // HW
            
    }
}
 
function renderWeatherInfo(weatherInfo){
    // firstl , we have to fetch the elements

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed =  document.querySelector("[data-windspeed]");
    const humidity =  document.querySelector("[data-humidity]");
    const cloundiness =  document.querySelector("[data-cloundiness]");

    // fetch the values from weatherInfo object and put it UI Elements
     
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText =  weatherInfo?.weather?.[0]?.description;
    weatherIcon.src =`http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s `;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloundiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        // HW - show an alert for no geolocation support availabel
    }
}

function showPosition(position){
    const userCoordinates ={
        lat:position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessbutton = document.querySelector("[data-grantAccess]");
grantAccessbutton.addEventListener("click",getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
   
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else
        fetchSearchWeatherInfo(cityName);

})

async function fetchSearchWeatherInfo(city){
    loadingscreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

        const data =await response.json();
        loadingscreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(errr){
        //HW
    }

}