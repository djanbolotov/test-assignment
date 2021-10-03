import axios from "axios"
import { Dispatch } from "react"
import { NewPost, NewPostActions, PostAction, PostsActionTypes } from "../types/posts"
const point = "https://simple-blog-api.crew.red/posts/"

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try{
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const responce = await axios.get(point)
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: responce.data})
        }catch (e) {
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR, 
                payload: "An error has occurred!"})
        }
    }
}

export const newPost = (data: NewPost) => {
    return async (dispatch: Dispatch<NewPostActions>) => {
        try{
            dispatch({type: PostsActionTypes.POST})
            await axios.post(point, data)
            dispatch({type: PostsActionTypes.POST_SUCCESS})
        }catch (e){
            dispatch({
                type: PostsActionTypes.POST_ERROR,
                payload: "There was a some error with posting:("
            })
        }
    }
}

export const deletePost = (id: number) => {
    return async (dispatch: Dispatch<NewPostActions>) => {
        try{
            dispatch({type: PostsActionTypes.POST})
            await axios.delete(point + id)
            dispatch({type: PostsActionTypes.POST_SUCCESS})
        }catch (e){
            dispatch({
                type: PostsActionTypes.POST_ERROR,
                payload: "There was a some error with deleting:("
            })
        }
    }
}

export const updatePost = (id: number, data: NewPost) => {
    return async (dispatch: Dispatch<NewPostActions>) => {
        try{
            dispatch({type: PostsActionTypes.POST})
            await axios.put(point + id, data)            
            dispatch({type: PostsActionTypes.POST_SUCCESS})
        }catch (e){
           dispatch({ 
                type: PostsActionTypes.POST_ERROR,
                payload: "There was a some error with updating post :("
            })
        }
    }
}

export const getPost = (id: number) => {
    return async (dispatch: Dispatch<NewPostActions>) => {
        try{
            dispatch({type: PostsActionTypes.POST})
            const responce = await axios.get(point + id + "?_embed=comments")
            dispatch({type: PostsActionTypes.GET_POST_SUCCESS, payload: responce.data})
        }catch (e){
            dispatch({
                type: PostsActionTypes.POST_ERROR,
                payload: "There was an error with server :("
            })
        }
    }
}

export const createComment = (data: Comment) => {
    return async (dispatch: Dispatch<NewPostActions>) => {
        try{
            dispatch({type: PostsActionTypes.POST})
            await axios.post("https://simple-blog-api.crew.red/comments", data)
            dispatch({type: PostsActionTypes.POST_SUCCESS})
        }catch (e){
            dispatch({
                type: PostsActionTypes.POST_ERROR,
                payload: "There was an error with posting comment :("
            })
        }
    }
}