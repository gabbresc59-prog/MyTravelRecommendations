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
                            resultDiv.innerHTML += `<div class="back"><img src="${city.imageUrl}" alt="hjh">
                                <h2>${city.name}</h2><p  class="desc">${city.description}</p>
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

searchBtn.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        searchKeyword();
    }
});

resetBtn.addEventListener('click', clearKeyword);