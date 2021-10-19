import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getPost, deletePost, fetchPosts } from "../store/actions/posts";
import { Container, Title, Text } from '../styles/PostID';
import { Body, Button } from '../styles/Card';
import { Parentcard } from '../styles/Card';
import Form from '../components/Form';


const PostID: React.FC = () => {
    const { postID } = useParams<{ postID: string }>()
    const post = useTypedSelector(state => state.posts.post)
    const dispatch = useDispatch();
    const history = useHistory();

    const deletePostID = () => {
        dispatch(deletePost(+postID))
        history.push("/")
    }

    useEffect(() => {
        dispatch(getPost(+(postID)))
    }, [dispatch, postID])
    
    if (!post) {
        return <div>Something went wrong...</div>
    }
    return (
        <Parentcard>
            <Container>
                <Body>
                    <Title>{post.title}</Title>
                    <Text>{post.body}</Text>
                    {post.comments && <h3>Comments</h3>}
                    {post.comments.map(comment => {
                        return <Text key={comment.id}>{comment.body}</Text>
                    })}
                    <Button onClick={deletePostID}>Delete</Button>
                </Body>
            </Container>
            <Form id={+(postID)} post={post} withComment={true} text="Edit" />
        </Parentcard>
    )
}

export default PostID;