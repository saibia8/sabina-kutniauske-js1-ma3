const apiKey = "100d2d0c86dc4e65a995a1043e45461f";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".results");


async function getGames() {

    try {
        const response = await fetch(url);

        const apiData = await response.json();
    
        const games = apiData.results;
        
        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < games.length; i++) {
           console.log(games[i]);
            
            if (i === 8) {
                break;
        }
    
           resultsContainer.innerHTML += `<div class="result">
                                          <div class="title">${games[i].name}</div>
                                          <div class="rating">${games[i].rating}</div>
                                          <div>${games[i].tags.length}</div>
                                          </div>`;
        }
    }
    catch(error) {
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getGames();