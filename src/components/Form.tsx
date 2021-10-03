import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { createComment, fetchPosts, newPost, updatePost } from '../store/actions/posts'
import { Post } from '../store/types/posts'
import { Button } from '../utils/Card'
import { Input } from '../utils/Form'
import { Container } from '../utils/PostID'

type Props = {
    text: string,
    withComment: boolean,
    post?: Post | null,
    id: number
}
const Form: React.FC<Props> = ({text, withComment, post, id = 1}) => {
    const history = useHistory()
    const [currentPost, setCurrentPost] = useState({
        title: '',
        body: ''
    });
    const [comment, setComment] = useState({});
    const dispatch = useDispatch()

    const Title = (value: string) => {
        setCurrentPost({
            ...currentPost,
            title: value
        })
    }

    const Body = (value: string) => {
        setCurrentPost({
            ...currentPost,
            body: value
        })
    }

    const Comment = (value: string) =>{
        setComment({
            ...comment,
            body: value,
            postId: id
        })
    }

    const sendPost = (data: any) =>{
        dispatch(newPost(data))
        dispatch(fetchPosts())
        history.push("/")
    }
     
    const updateCurrentPost = (id: number, data: any) =>{
        dispatch(updatePost(id, data))
        dispatch(fetchPosts())
        history.push("/")
    }

    const createNewComment = (data: any) => {
        dispatch(createComment(data))
        dispatch(fetchPosts())
        history.push("/")
    }
    useEffect(()=>{
        if(post)
        {
            setCurrentPost(post)
        }
    },[post])    
    
    return (
        <Container>
            <Input value={currentPost.title} onChange={(e: any) => Title(e.target.value)} placeholder="Title..."/>
            <Input value={currentPost.body} onChange={(e: any) => Body(e.target.value)} placeholder="Body..." size="2em"/>
            <Button onClick={withComment? () => updateCurrentPost(id, currentPost) :  () => sendPost(currentPost)}>{text}</Button>
            {withComment && 
            <div>
                <h3>Comment</h3>
                <Input onChange={(e: any) => Comment(e.target.value)} placeholder="Comment body..." size="2em"/>
                <Button onClick={() => createNewComment(comment)}>New comment</Button>
            </div> }
        </Container>
    )
}

export default Form;