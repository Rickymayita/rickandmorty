import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET  } from './action_type';
import axios from 'axios'


export function addFavorites(ch){
    return function(dispatch){
      axios.post(`http://localhost:3001/rickandmorty/fav`, ch)
      .then(value=> value.data)
      .then((data)=>{
        dispatch({
          type: ADD_FAVORITES,
          payload: data
        })
      })
    }
}

export function deleteFavorites(id){
  console.log(id)
    // return function(dispatch){
    //   axios
    //   .post(`http://localhost:3001/rickandmorty/fav/${id}`)
    //   .then(value=> value.data)
    //   .then((data)=>{
    //     console.log(data);
    //     dispatch({
    //       type: DELETE_FAVORITES,
    //       payload: id,
    //     })
    //   })
    // }

    
  return async(dispatch) => {
    try {
      const respuesta = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      dispatch({
        type :DELETE_FAVORITES,
        payload : id
      })
    } catch(error) {
      console.log(error)
    }
  }

}

export function filterCards(status) {
    return {
      type: FILTER,
      payload: status,
    };
  }
  export function orderCards(order) {
    return {
      type: ORDER,
      payload: order,
    };
  }

  export function reset() {
    return {
      type: RESET,
    };
  }
