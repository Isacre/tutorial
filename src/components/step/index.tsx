import React from "react";
import { Step } from "../../types";
import styled from "styled-components";
import CodeBlock from "../codeblock";

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SubStepWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    min-width: fit-content;
  }
`;

interface Props {
  index: number;
  step: Step;
}
export default function StepComponent({ index, step }: Props) {
  const { name, substeps } = step;
  return (
    <StepWrapper>
      <h3>{index + 1 + " - " + name}</h3>
      {substeps.map((substep, i) => {
        if (substep.is_code) {
          return (
            <SubStepWrapper>
              <p>{index + 1 + "." + (i + 1) + " - "}</p>
              <CodeBlock text={substep.text} />
            </SubStepWrapper>
          );
        } else {
          return (
            <SubStepWrapper>
              <p>
                {index + 1 + "." + (i + 1) + " - "}
                {substep.text}
              </p>
            </SubStepWrapper>
          );
        }
      })}
    </StepWrapper>
  );
}
