
const intialState = {
         isLoading: false,
        isError: false,
        isAuth: false,
        token: "",
      };

    export const authReducer =( state = intialState, action)=>{
       switch (action.type) {
        case 'AUTH_REQUEST':
            return{...state,isLoading:true};
        case 'AUTH_SUCCESS':
            return{...state,isLoading:false,isAuth:true,token:action.payload};
        case 'AUTH_FAILURE':
            return {...state,isLoading:false, isError:true};
         
        default:
            return state;
       }
    };

