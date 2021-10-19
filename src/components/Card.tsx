import React from 'react';
import { useHistory } from 'react-router';

import { Container, Body, Title, Text, Button } from '../styles/Card';
import { Post } from './../store/types/posts'

type Props = {
  post: Post
}

export const Card: React.FC<Props> = ({ post }) => {
  const history = useHistory()
  const toPost = (id: number) => {
    history.push("/posts/" + id)
  }
  return (
    <Container>
      <Body>
        <Title>{post.title}</Title>
        <Text>{post.body}</Text>
        <Button onClick={() => toPost(post.id)}>Learn more</Button>
      </Body>
    </Container>
  );
}