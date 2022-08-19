export function createCountryItemMarkup({
  name: { official: officialName },
  flags: { svg: flagSvg },
}) {
  return `      
      <li class="country-list__item">
        <img src="${flagSvg}" alt="${officialName}" width="40px" />
        <p class="country-list__descr">${officialName}</p>
      </li>`;
}

export function createCountryInfoMarkup({
  name: { official: officialName },
  flags: { svg: flagSvg },
  capital,
  population,
  languages,
}) {
  const langArr = Object.values(languages);
  return `      
      <div class="country-info__wrapper">
        <img src="${flagSvg}" alt="${officialName}" width="60px" class="country-info__img"/>
        <h1 class="country-info__title">${officialName}</h1>
      </div>
      <div class="country-info__info">
        <p class="country-info__text"><b>Capital: </b>${capital}</p>
        <p class="country-info__text"><b>Population: </b>${population}</p>
        <p class="country-info__text country-info__text--languages">
          <b>Languages: </b>
          ${langArr.join(', ')}
        </p>
      </div>`;
}
