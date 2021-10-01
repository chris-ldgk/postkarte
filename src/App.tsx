import React, { Suspense } from "react";
import { Canvas } from "./components/Canvas";
import styled from "styled-components";
import { Scene } from "./components/Scene";

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
