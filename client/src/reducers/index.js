import { combineReducers } from 'redux';
import site from './site.js'
import drinks from './drinks.js'
import login from './login'
import searchTermReducer from './drinks'

export default combineReducers({
  drinks:drinks,
  site: site,
  login: login,
  searchTerm: searchTermReducer
});