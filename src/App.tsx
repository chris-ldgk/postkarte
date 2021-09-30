import React, { Suspense } from 'react';
import { Canvas } from './components/Canvas';
import styled from 'styled-components';
import { Scene } from './components/Scene';

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
`

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
