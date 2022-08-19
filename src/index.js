import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import {
  createCountryItemMarkup,
  createCountryInfoMarkup,
} from './js/countriesTemplate';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchField: document.querySelector('input#search-box'),
  countryList: document.querySelector('ul.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const clearContainers = () => {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
};

const showMessage = () => {
  Notify.info('Too many matches found. Please enter a more specific name.');
};

const renderList = countries => {
  const markup = countries.map(createCountryItemMarkup).join('\n');
  refs.countryList.insertAdjacentHTML('beforeend', markup);
};
const renderCountry = country => {
  const markup = createCountryInfoMarkup(country);
  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
};

const onError = err => {
  Notify.failure('Oops, there is no country with that name');
};
const onSuccess = data => {
  const length = data.length;

  if (length > 10) {
    showMessage();
  } else if (length >= 2) {
    renderList(data);
  } else {
    renderCountry(data[0]);
  }
};

const onFieldInput = e => {
  clearContainers();
  const value = e.target.value.trim();
  if (value === '') {
    return;
  }
  fetchCountries(value).then(onSuccess).catch(onError);
};
refs.searchField.addEventListener(
  'input',
  debounce(onFieldInput, DEBOUNCE_DELAY)
);
