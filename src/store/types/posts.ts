export interface PostState {
    posts: Post[];
    loading: boolean;
    error: null | string;
    post: Post | null;
}

export interface NewPost {
    title: string;
    body: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    comments: Comment[];
}

export interface Comment {
    id?: number;
    postID: number;
    body: string;
}

export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
    POST = "NEW_POST",
    POST_SUCCESS = "NEW_POST_SUCCESS",
    POST_ERROR = "NEW_POST_ERROR",
    GET_POST_SUCCESS = "GET_POST_SUCCESS"
}
interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: Post[];
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

interface NewPostAction {
    type: PostsActionTypes.POST;
}

interface NewPostSuccessAction {
    type: PostsActionTypes.POST_SUCCESS;
}

interface NewPostErrorAction {
    type: PostsActionTypes.POST_ERROR;
    payload: string;
}  

interface GetPostSuccess {
    type: PostsActionTypes.GET_POST_SUCCESS;
    payload: Post
}

export type PostAction = FetchPostsAction | FetchPostsErrorAction | FetchPostsSuccessAction 
export type NewPostActions = GetPostSuccess | NewPostAction | NewPostErrorAction | NewPostSuccessAction 