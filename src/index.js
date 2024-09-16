import "./style.css"

const apiKey = "K54LM6T7UV8RCTV4D84U6DHTL"

async function getWeatherinfo(city){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`)
    console.log("running")
    const responseJson = await response.json()
    const filteredResult = responseJson.days
    assignResults(filteredResult[0], filteredResult[1], filteredResult[2])
}

getWeatherinfo("london")

function assignResults(resultToday, resultTomorrow, resultNext7){
    handleTodayDisplay(resultToday)
    handleTomorrowDisplay(resultTomorrow)
    handleNext7Display(resultNext7)
}

function handleTodayDisplay(resultToday){
    const today = document.querySelector(".today")
    console.log(today.querySelector("span")) 
    console.log(today.querySelector(".visibility"));
    today.querySelector(".high").textContent = resultToday.tempmax
    today.querySelector(".low").textContent = resultToday.tempmin
    today.querySelector(".prep").textContent = resultToday.precip
    today.querySelector(".humid").textContent = resultToday.humidity
    today.querySelector(".visibility").textContent = resultToday.visibility
}

function handleTomorrowDisplay(resultTomorrow){
    const tomorrow = document.querySelector(".tomorrow")
    console.log(tomorrow.querySelector(".visibility"));
    tomorrow.querySelector(".high").textContent = resultTomorrow.tempmax
    tomorrow.querySelector(".low").textContent = resultTomorrow.tempmin
    tomorrow.querySelector(".prep").textContent = resultTomorrow.precip
    tomorrow.querySelector(".humid").textContent = resultTomorrow.humidity
    tomorrow.querySelector(".visibility").textContent = resultTomorrow.visibility
}

function handleNext7Display(resultNext7){
    const next7 = document.querySelector(".next7")
    next7.querySelector(".high").textContent = resultNext7.tempmax
    next7.querySelector(".low").textContent = resultNext7.tempmin
    next7.querySelector(".prep").textContent = resultNext7.precip
    next7.querySelector(".humid").textContent = resultNext7.humidity
    next7.querySelector(".visibility").textContent = resultNext7.visibility
}