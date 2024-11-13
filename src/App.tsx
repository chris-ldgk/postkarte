import { Suspense } from "react";
import styled from "@emotion/styled";
import { Scene } from "./components/Scene";
import { Canvas } from "./components/Canvas";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

function App() {
  return (
    <StyledApp>
      <Suspense fallback={<div>Loading</div>}>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </StyledApp>
  );
}

export default App;
