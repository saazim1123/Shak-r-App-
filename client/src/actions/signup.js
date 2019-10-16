export const userPostFetch = (user, history) => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
            if(data.jwt){
             localStorage.setItem("token", data.jwt)
             dispatch(loginUser(data.user))
             history.push('/mybar')
          }
            
        })
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })