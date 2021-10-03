import React from "react";
import Form from "./Form";
import { Parentcard } from "./Posts";


const New: React.FC = () =>{
  const title = "New Post"
  const bool = false
  return (
    <>
    <Parentcard>
      <Form id={1} withComment={bool} text={title}/>
    </Parentcard>
    </>
  )
}

export default New;