import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
`;
interface Props {
  text: string;
}
export default function CodeBlock({ text }: Props) {
  return (
    <Wrapper>
      <CopyBlock text={text} language={"pt-BR"} showLineNumbers={false} theme={dracula} customStyle={{ padding: "10px" }} />
    </Wrapper>
  );
}
