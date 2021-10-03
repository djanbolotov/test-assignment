import { createStore, combineReducers, applyMiddleware } from 'redux';
import { postsReducer } from './reducers/posts';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    posts: postsReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>