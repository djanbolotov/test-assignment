import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Posts from "./pages/Posts";
import NavBar  from "./components/NavBar";
import New from "./pages/New";
import PostID from "./pages/PostID";
import { useTypedSelector } from "./hooks/useTypedSelector";
import PreLoader from "./components/Loading/PreLoader";

export const App: React.FC = () =>{
  const {loading} = useTypedSelector(set => set.posts)
  
  return (
    <Router basename="/test-assigment">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Posts}/>
        <Route path="/posts/new" component={New}/>
        <Route path="/posts/:postID" component={PostID}/>
      </Switch>
      {loading && <PreLoader/>}
    </Router>
  )
}