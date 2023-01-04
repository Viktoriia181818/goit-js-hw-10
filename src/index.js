import './css/styles.css';
import { fetchCountries } from './js/fetchcountries';
import { countryСardTeemplate, countryListTemplate } from './js/template';
import { refs } from './js/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

