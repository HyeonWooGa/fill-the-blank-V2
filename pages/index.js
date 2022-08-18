import styled from "styled-components";
import { homeTexts } from "../resources/homeTexts";

const Span = styled.div`
  display: block;
  white-space: pre-line;
`;

export default function Home() {
  return (
    <>
      {homeTexts.split("\n").map((span) => {
        return span === "" ? <br /> : <Span>{span}</Span>;
      })}
    </>
  );
}
