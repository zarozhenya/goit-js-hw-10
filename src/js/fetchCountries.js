const BASE_URL = 'https://restcountries.com/v3.1/name';

const parameters = 'fields=name,capital,population,flags,languages';
export function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}?${parameters}`).then(res => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}
