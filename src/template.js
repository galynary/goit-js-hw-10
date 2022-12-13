export function showCountryList ({ flags, name }){
    return `
    <li class = country__item>
    <img class = 'country-list__flags' src="${flags.svg}" alt="${name.official}" width=50/>
    <h2 class = country-list__name>${name.official}</h2>
    </li>
    `
}

export function showCountryCard({ flags, name, capital, population, languages }) {
    return `
    <div class="country">
    <div class="country-info__wrapper">
      <img class = "country-info__flags" src="${flags.svg}" alt="${name.official}" width = 100/>
      <h2 class = "country-info__title">Country: ${name.official}</h2>
      <p class = "country-info__text">Capital: ${capital}</p>
      <p class="country-info__text">Population: ${population}</p>
      <p class="country-info__text">Languages: ${Object.values(languages)}</p>
      </div>
    </div>
    `
}