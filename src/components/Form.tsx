import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { createComment, fetchPosts, newPost, updatePost } from '../store/actions/posts'
import { Post, Comment } from '../store/types/posts'
import { Button } from '../styles/Card'
import { Input } from '../styles/Form'
import { Container } from '../styles/PostID'


type Props = {
    text: string,
    withComment: boolean,
    post?: Post | null,
    id: number
}
const Form: React.FC<Props> = ({ text, withComment, post, id: postID = 1 }) => {
    const history = useHistory()
    const [currentPost, setCurrentPost] = useState({
        title: '',
        body: ''
    });
    const [comment, setComment] = useState({
        postID,
        body: '',
    });
    const dispatch = useDispatch()


    const sendPost = () => {
        if(currentPost.body.trim() !== "" && currentPost.title.trim() !== "")
        {
            dispatch(newPost(currentPost))
            dispatch(fetchPosts())
            history.push("/")
        }
    }

    const updateCurrentPost = () => {
        if(currentPost.body.trim() !== "" && currentPost.title.trim() !== "")
        {
            dispatch(updatePost(postID, currentPost))
            dispatch(fetchPosts())
            history.push("/")
        }
    }

    const createNewComment = () => {
        if(comment.body.trim())
        {
            dispatch(createComment(comment))
            history.push("/")
        }
    }
    useEffect(() => {
        if (post) {
            setCurrentPost(post)
        }
    }, [post])

    return (
        <Container>
            <Input value={currentPost.title} onChange={(e: any) => setCurrentPost({
                ...currentPost,
                title: e.target.value
            })} placeholder="Title..." />
            <Input value={currentPost.body} onChange={(e: any) => setCurrentPost({
                ...currentPost,
                body: e.target.value
            })} placeholder="Body..." size="2em" />
            <Button onClick={withComment ? updateCurrentPost : sendPost}>{text}</Button>
            {withComment &&
                <div>
                    <h3>Comment</h3>
                    <Input onChange={(e: any) => setComment({
                        ...comment,
                        body: e.target.value,
                    })} placeholder="Comment body..." size="2em" />
                    <Button onClick={createNewComment}>New comment</Button>
                </div>
            }
        </Container>
    )
}

export default Form;