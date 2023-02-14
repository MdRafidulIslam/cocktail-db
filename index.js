const cocktail = () => {

    const searchText = document.getElementById('search-feild')
    const searchValue = searchText.value;

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayCockTails(data.drinks))
}

const displayCockTails = cocks => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    for (const cock of cocks) {
        const searchDiv = document.createElement('div');
        searchDiv.classList.add('col');
        searchDiv.innerHTML = `
        
        <div onclick="loadFullMeals(${cock.idDrink})" class="card">
        <img src=${cock.strDrinkThumb} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${cock.strDrink}</h5>
            <p class="card-text">${cock.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        `;
        console.log(cock)
        searchResult.appendChild(searchDiv)
    }
}

const loadFullMeals = idDrinks => {
    const url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrinks}`;

    fetch(url2)
        .then(res => res.json())
        .then(data => cockDetails(data.drinks[0]))

}

const cockDetails = details => {
    const cockDiv = document.getElementById('cock-detail')
    cockDiv.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <img src=${details.strDrinkThumb} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${details.strDrink}</h5>
        <p class="card-text">${details.strInstructions.slice(0, 300)}</p>
        
    </div>
    `;

    cockDiv.appendChild(div);
}

