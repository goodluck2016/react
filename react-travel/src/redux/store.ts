import { createStore } from 'redux';
import languageReducre from './language/languageReducre';

const store = createStore(languageReducre);

export default store;