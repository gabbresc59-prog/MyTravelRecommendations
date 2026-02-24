const searchBtn=document.getElementById("btnSearch");
const resetBtn=document.getElementById("btnReset");
const resultDiv=document.getElementById("results");
let result = [];

function searchKeyword() {
    let queryKeyword=document.getElementById("conditionInput").value.toLowerCase();

    if (queryKeyword) {
        result = [];
        if(queryKeyword.includes('beach')) {
            fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                data.beaches.forEach((element) => {
                    result.push(element);
                })
                if (result) {
                    resultDiv.innerHTML = '<div class="topheader"></div>';
                    result.forEach((element) => {
                        resultDiv.innerHTML += `<div class="back"><img src="${element.imageUrl}" alt="hjh">
                            <h2>${element.name}</h2><p class="desc">${element.description}</p>
                            <button class="visit" id="btnVisit">Visit</button></div>`;
                    })
                } else {
                    resultDiv.innerHTML = 'Condition not found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
        } else if(queryKeyword.includes('temple')) {
            fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                data.temples.forEach((element) => {
                    result.push(element);
                })
                if (result) {
                    resultDiv.innerHTML = '<div class="topheader"></div>';
                    result.forEach((element) => {
                        resultDiv.innerHTML += `<div class="back"><img src="${element.imageUrl}" alt="hjh">
                            <h2>${element.name}</h2><p  class="desc">${element.description}</p>
                            <button class="visit" id="btnVisit">Visit</button></div>`;
                    })
                } else {
                    resultDiv.innerHTML = 'Condition not found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
        } else if(queryKeyword.includes('countr')) {
            fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                data.countries.forEach((element) => {
                    result.push(element);
                })
                if (result) {
                    resultDiv.innerHTML = '<div class="topheader"></div>';
                    result.forEach((element) => {
                        element.cities.forEach((city) => {
                            switch(element.name) {
                                case "Brazil":
                                    tZone = "America";
                                    break;
                                case "Japan":
                                    tZone = "Asia";
                                    break;
                                case "Australia":
                                    tZone = "Australia";
                                    break;
                                default:
                                    tZone = "America";
                            }
                            let cityName = city.name.split(",")[0];
                            cityName = cityName.replaceAll(" ", "_");
                            cityName = cityName.replace("ã", "a");
                            if (cityName == "Kyoto") {
                                ZoneTime = tZone + '/' + "Tokyo";    
                            } else if (cityName == "Rio_de_Janeiro") {
                                ZoneTime = tZone + "/Sao_Paulo";
                            } else {
                                ZoneTime = tZone + '/' + cityName;
                            }
                            const options = { timeZone: ZoneTime, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                            const cityTime = new Date().toLocaleTimeString('en-US', options);
                        
                            resultDiv.innerHTML += `<div class="back"><img src="${city.imageUrl}" alt="hjh">
                                <h2>${city.name}</h2><p  class="desc">${city.description}</p>
                                <p class="desc">Local time: ${cityTime}</p>
                                <button class="visit" id="btnVisit">Visit</button></div>`;
                        })
                        })
                } else {
                    resultDiv.innerHTML = 'Condition not found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
        } else {
            alert("Please enter a valid keyword.")
        }
    }
}

function clearKeyword() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("conditionInput").value = "";
    result = [];
}


searchBtn.addEventListener('click', searchKeyword);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchKeyword();
    }
});

resetBtn.addEventListener('click', clearKeyword);