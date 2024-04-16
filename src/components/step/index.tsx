import { Step } from "../../types";
import { StepWrapper, SubStepWrapper, Wrapper } from "./styles";
import { CopyBlock, dracula } from "react-code-blocks";

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
              <Wrapper>
                <CopyBlock text={substep.text} language={"pt-BR"} showLineNumbers={false} theme={dracula} customStyle={{ padding: "10px" }} />
              </Wrapper>
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
