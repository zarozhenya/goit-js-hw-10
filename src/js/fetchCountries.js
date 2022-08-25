const BASE_URL = 'https://restcountries.com/v3.1/name';

const parameters = 'fields=name,capital,population,flags,languages';
export async function fetchCountries(name) {
  const response = await fetch(`${BASE_URL}/${name}?${parameters}`);
  const data = await (function () {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })();
  return data;
}
