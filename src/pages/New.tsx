import React from "react";

import Form from "../components/Form";
import { Parentcard } from "../styles/Card";

const New: React.FC = () => {
  return (
    <Parentcard>
      <Form id={1} withComment={false} text={"New Post"} />
    </Parentcard>
  )
}

export default New;