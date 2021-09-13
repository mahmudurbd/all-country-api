// All countries loading function
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

// All countries shown on output
const displayCountries = countries => {
    const countriesWrap = document.getElementById('countries-wrap');
    for (const country of countries) {
        console.log(country);
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('col');
        countriesDiv.innerHTML = `
        <div class="card bg-info h-100">
            <div class="card-header">
                <img src="${country.flag}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${country.name}</h5>
                <button onclick="singleCountryDetails('${country.name}')" class="btn btn-light">More...</button>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-4">
                        <h6 class="card-text">Capital: ${country.capital}</h6>
                    </div>
                    <div class="col-4">
                        <h6 class="card-text">Region: ${country.region}</h6>
                    </div>
                    <div class="col-4">
                        <h6 class="card-text">Population: ${country.population}</h6>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;
        countriesWrap.appendChild(countriesDiv);
    }
}

// single country details redirection page
const singleCountryDetails = name => {
    const url = `https://en.wikipedia.org/wiki/${name}`;
    window.location.href = url;
}
