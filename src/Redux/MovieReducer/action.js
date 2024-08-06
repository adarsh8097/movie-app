import { MOVIE_FAILURE,MOVIE_REQUEST,MOVIE_SUCCESS } from "./actionType";

export const moviefailer =()=>({
    type: MOVIE_FAILURE,
});
export const movieRequest =()=>({
    type: MOVIE_REQUEST,
});
export const movieSuccess =()=>({
    type: MOVIE_SUCCESS,
});


