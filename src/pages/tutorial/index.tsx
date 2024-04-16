import StepComponent from "../../components/step";
import { Steps } from "../../data";
import { Wrapper } from "./styles";

export default function Tutorial() {
  return (
    <Wrapper>
      <h1>Guia de instalação Dashboard Triágil</h1>
      {Steps.map((step, index) => (
        <StepComponent index={index} step={step} />
      ))}
    </Wrapper>
  );
}
