export function loadRandomDrink() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_DRINK' });
    const token = localStorage.getItem('token');
    return fetch(`http://localhost:3001/recipes/${randomNum}`, {
      headers: {
        'Authorization': `bearer ${token}`
      },
      accept: 'application/json',
    }).then(response => response.json())
      .then(drink => dispatch({ type: 'LOAD_DRINK', payload:drink }));
  };
}

export function loadDrink(id) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_DRINK' });
    const token = localStorage.getItem('token');
    return fetch(`http://localhost:3001/recipes/${id}`, {
      headers: {
        'Authorization': `bearer ${token}`
      },
      accept: 'application/json',
    }).then(response => response.json())
      .then(drink => dispatch({ type: 'LOAD_DRINK', payload: drink }));
  };
}


export function toggleLikeDrink(recipe_id) {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(`http://localhost:3001/api/v1/toggle-like/${recipe_id}`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`
      },
      accept: 'application/json',
    }).then(response => response.json())
      .then(()=>{});
  };
}

export function getLikedDrinks() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(`http://localhost:3001/api/v1/likes`, {
      headers: {
        'Authorization': `bearer ${token}`
      },
      accept: 'application/json',
    }).then(response => response.json())
      .then(drinks => dispatch({ type: 'LOAD_LIKED_DRINKS', payload: drinks }));
  };
}

export function loadDrinks(query) {
  return (dispatch, store) => {
    const token = localStorage.getItem('token');
    dispatch({ type: 'START_LOADING_DRINK' });
    let url = 'http://localhost:3001/recipes';
    if (query){
      url = `http://localhost:3001/recipes?query=${query}`;
    }
    return fetch(url, {
      headers: {
        'Authorization': `bearer ${token}`
      },
      accept: 'application/json',
    }).then(response => response.json())
      .then(drinks => dispatch({ type: 'LOAD_ALL_DRINKS', payload: drinks }));
  };
}

export function getItems() {
  return (dispatch, store) => {
    const token = localStorage.getItem('token');
    let url = 'http://localhost:3001/items';
    return fetch(url, {
      headers: {
        'Authorization': `bearer ${token}`
      },
      accept: 'application/json',
    }).then(response => response.json())
      .then(items => dispatch({ type: 'LOAD_ALL_ITEMS', payload: items }));
  };
}

export function searchDrinks(query) {}


export function loadMyBar(barEssentials, missingEssentials){
  return (dispatch) => {
    const token = localStorage.getItem('token');
    dispatch({ type: 'START_LOADING_DRINK' });
    return fetch(`http://localhost:3001/recipes`, {
      headers: {
        'Authorization': `bearer ${token}`
      },
      accept: 'application/json',
    }).then(response => response.json())
      .then(drinks => {
        let myDrinks = [] 
        drinks.forEach(drink =>{
          let checkNoMissingEssentials = true;
          let checkAnyBarEssentials = false;
          for(let i = 0; i < drink.ingredients.length; i++){
            if (missingEssentials.includes(drink.ingredients[i].item.name)) { //Checks if drink ingredient uses a bar essential that user does not have
              checkNoMissingEssentials = false //if so, returns false
            }
            if (barEssentials.includes(drink.ingredients[i].item.name)) { //Checks to see that drink uses any bar essentials at all
              checkAnyBarEssentials = true //if so, returns true
            }
          }
          if (checkNoMissingEssentials && checkAnyBarEssentials) { //if drink uses a bar essential, and the user has all the required essentials
            myDrinks.push(drink) // push drink to drinks array to be returned
          }
        })
        dispatch({ type: 'LOAD_ALL_DRINKS', payload: myDrinks })
      });
  };
}

export function myBarSelector(selector){
  return (dispatch) => {
    dispatch({ type: 'MYBAR_SELECTOR', payload: selector });
  };
}

export function resetMyBar() {
  return (dispatch) => {
    dispatch({ type: 'RESET_MYBAR'});
  };
}

export function unloadDrink() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_DRINK', payload: '' });
  };
}

export function unloadDrinks() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_ALL_DRINKS', payload: [] });
  };
}

export function searchTerm(searchTerm) {
  return {type: 'SEARCH_TERM', payload: searchTerm}
}