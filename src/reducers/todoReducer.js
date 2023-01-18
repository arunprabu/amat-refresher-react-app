/* Reducer? 
--
  * function that takes in two params. one is state, another one is action 
  * must return state
  * based on the action type the state should be returned

// action is an obj. must have type property. it can also have payload property (optional)
*/

const todoReducer = (state = [], action) => {
  console.log("********Inside todoReducer********");

  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.payload];
    
    case 'GET_TODOS':
      return action.payload;
      
    default: 
      return state;
  }
} 

export default todoReducer;