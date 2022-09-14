import styled from "styled-components";
import Router from "./Router";

const StandardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StandardWrapper>
      <Router />
    </StandardWrapper>
  );
}

export default App;
