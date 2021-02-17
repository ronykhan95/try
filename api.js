fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => {
        displayCountries(data);
    })
const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const div = document.createElement("div");
        div.className = "country-div";
        const countriesInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        div.innerHTML = countriesInfo;
        countriesDiv.appendChild(div);
    });
}
const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch (url)
    .then(response => response.json())
    .then(data => {
        renderCountryInfo(data[0])
    })
}
const renderCountryInfo = country =>{
    const countryDiv = document.getElementById("country-detail");
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>population:${country.population}</p>
    <p>Area:${country.area}</p>
    <img src="${country.flag}"></img>
    `;
}