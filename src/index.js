// export default function, all reducers get two arguments -- state and action
// state argument is not application state, just what this reducer is responsible for
// use es6 syntax to default state to null in case it comes in undefined
  // switch case on action.type
    // if type is SHOW_SELECTED
      // return action payload
  // all else return state

  // testing git config
  
export default function(state = null, action){
  switch(action.type){
    case'SHOW_SELECTED':
      return action.payload;
  }
  return state;
}