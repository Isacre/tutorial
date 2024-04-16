import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
`;

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
