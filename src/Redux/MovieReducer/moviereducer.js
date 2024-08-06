const intialState ={
    isLoading: false,
    isError: false,
    movies: [],
  }

  export const movieReducer =( state = intialState,action)=>{
        switch (action.type) {
            case 'MOVIE_REQUEST':
                 return{...state, isLoading: true};
                 case 'MOVIE_SUCCESS':
                    return{...state,isLoading:false,movies:action.payload};
                    case 'MOVIE_.FAILERE':
                        return{...state,isLoading:false, isError:true}
                
        
            default:
                return state;
        }
  }