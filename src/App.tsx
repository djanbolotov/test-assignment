import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Posts from "./components/Posts";
import NavBar  from "./components/NavBar";
import New from "./components/New";
import PostID from "./components/PostID";
import { useTypedSelector } from "./hooks/useTypedSelector";
import PreLoader from "./components/PreLoader";

export const App: React.FC = () =>{
  const {loading} = useTypedSelector(set => set.posts)
  
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/test-assigment/" component={Posts}/>
        <Route path="/test-assigment/posts/new" exact component={New}/>
        <Route path="/test-assigment/posts/:postID" exact component={PostID}/>
      </Switch>
      {loading && <PreLoader/>}
    </Router>
  )
}