import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
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
