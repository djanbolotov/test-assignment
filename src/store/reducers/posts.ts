import {PostState, PostAction, PostsActionTypes, NewPostActions} from './../types/posts'
const initialState: PostState = {
    posts: [],
    loading: false,
    error: null,
    post: null,
}

export const postsReducer = (state = initialState, action: PostAction | NewPostActions): PostState => {
    switch (action.type){
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true, error: null}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, error: null, posts: action.payload}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.POST:
            return {...state, loading: true, error: null}
        case PostsActionTypes.POST_SUCCESS:
            return {...state, loading: false, error: null}
        case PostsActionTypes.POST_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.GET_POST_SUCCESS:
            return {...state, loading: false, error: null, post: action.payload}
        default:
            return state

    }
}