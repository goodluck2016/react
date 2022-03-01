import { createStore } from 'redux';
import languageReducre from './language/languageReducre';

const store = createStore(languageReducre);

export type RootState = ReturnType<typeof store.getState>

export default store;