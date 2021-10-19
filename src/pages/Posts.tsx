import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchPosts } from "../store/actions/posts"
import { Card } from "../components/Card"
import { Parentcard } from "../styles/Card"

const Posts: React.FC = () => {
    const { posts } = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <Parentcard>
            {posts.map(i =>
                <Card key={i.id} post={i} />
            )}
        </Parentcard>
    )
}

export default Posts;