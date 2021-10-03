import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getPost, deletePost, fetchPosts } from "../store/actions/posts";
import { Container, Title, Text } from '../utils/PostID';
import { Body, Button } from '../utils/Card';
import { Parentcard } from './Posts';
import  Form  from './Form';


const PostID: React.FC = () => {
    const text = "Edit";
    const bool = true;
    const {postID} = useParams<{postID: string}>()
    const post = useTypedSelector(state => state.posts.post)
    const dispatch = useDispatch();
    const history = useHistory();

    const deletePostID = (postID: number) => {
        dispatch(deletePost(postID))
        dispatch(fetchPosts())
        history.push("/test-assigment/")
    }
  
    useEffect(() => {
        dispatch(getPost(parseInt(postID)))
    }, [dispatch, postID])
    
    return (
        <Parentcard>
            <Container>
            <Body>
                <Title>{post?.title}</Title>
                <Text>{post?.body}</Text>
                {post?.comments && <h3>Comments</h3>}
                {post?.comments?.map(i => {
                    return <Text key={i.id}>{i?.body}</Text>
                })}
                <Button onClick={() => deletePostID(parseInt(postID))}>Delete</Button>
            </Body>
            </Container>
            <Form id={parseInt(postID)} post={post} withComment={bool} text = {text}/>
        </Parentcard>
    )
}

export default PostID;