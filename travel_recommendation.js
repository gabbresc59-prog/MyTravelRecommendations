const searchBtn=document.getElementById("btnSearch");
const resultDiv=document.getElementById("results");
const result = [];

function searchKeyword() {
    const queryKeyword=document.getElementById("conditionInput").value.toLowerCase();

    if (queryKeyword) {
        if(queryKeyword.includes('beach')) {
            fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                data.beaches.forEach((element) => {
                    result.push(element);
                })
                if (result) {
                    result.forEach((element) => {
                        resultDiv.innerHTML += `<img src="${element.imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<div class="back"><h2>${element.name}</h2>`;
                        resultDiv.innerHTML += `<p>${element.description}</p>`;
                        resultDiv.innerHTML += `<button class="visit">Visit</button></div>`;
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
                result = data.temples;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
        } else if(queryKeyword.includes('country')) {
            fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                result = data.countries;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
        }
    }
}

searchBtn.addEventListener('click', searchKeyword);