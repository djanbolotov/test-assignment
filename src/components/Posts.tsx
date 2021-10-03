import React, { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchPosts } from "../store/actions/posts"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Card } from "./Card"

const Posts: React.FC = () => {
    const {posts} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchPosts())
    }, [dispatch])
    
    return (
        <Parentcard>
            {posts.map(i => 
                <Card key={i.id} post={i}/>
            )}
        </Parentcard>
    )
}

export const Parentcard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    top: 8rem;
    width: 90%;
    padding: 0;
    margin: auto;
`
export default Posts;