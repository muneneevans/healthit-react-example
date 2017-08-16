import * as types from "./actionTypes"
import JsonPlaceHolderService from "../../Services/JsonPlaceHolderService"

export function fetchPosts(){
    return function(dispatch, getState){
        return JsonPlaceHolderService.getPosts()
            .then(posts =>{                
                dispatch({
                    type: types.POSTS_RECEIVED,
                    payload : posts                    
                })
            })
            .catch(error =>{
                throw(error)
            })
    }
}