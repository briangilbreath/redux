/**
 * Posts Reducer
 */

// a reducer takes in two things
// 1. the action(information about what happened) - action
// 2. copy of current store - state


function posts(state = [], action){
  console.log(state,action);
  return state;
}

export default posts;
