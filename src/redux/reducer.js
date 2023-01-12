import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from './action_type';


const inicialState = {
    myFavorites: [],
    myFavoritesOrigin: [],
}

export default function rootReducer(state = inicialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.filter((ch) => {
                    return ch.id !== payload
                })
            }
        case FILTER:
            const filterCopy = [...state.myFavoritesOrigin];
            const filter = filterCopy.filter((ch) => ch.gender === payload);
            return {
                ...state,
                myFavorites: filter,
            };
        case ORDER:
            const orderCopy = [...state.myFavoritesOrigin];
            // console.log("payload", payload);
            const order = orderCopy.sort((a, b) => {
                if (a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1;
                }
                if (a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1;
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: order,
            };
        case RESET:
            return {
                ...state,
                myFavorites: [...state.myFavoritesOrigin],
            };

        default:
            return { ...state };
    }
}
