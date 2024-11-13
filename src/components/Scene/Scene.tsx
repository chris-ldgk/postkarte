import { OrthographicCamera } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Postkarte } from "../Postkarte";
import { OrthographicCamera as THREEOrthographicCamera } from "three";
import { RootState, useThree } from "@react-three/fiber";

export const Scene = () => {
  const camRef = useRef<THREEOrthographicCamera>(null);
  const [aspectRatioBiggerOne, setAspectRatioBiggerOne] =
    useState<boolean>(false);

  function onResize() {
    const viewSize = 0.6;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;
    setAspectRatioBiggerOne(aspectRatio > 1);

    if (camRef.current) {
      camRef.current.left = (-aspectRatio * viewSize) / 2;
      camRef.current.right = (aspectRatio * viewSize) / 2;
      camRef.current.top = viewSize / 2;
      camRef.current.bottom = -viewSize / 2;
      camRef.current.updateProjectionMatrix();
    }
  }

  useThree(({ gl }: RootState) => {
    gl.setPixelRatio(window.devicePixelRatio);
  });

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize, false);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight
        castShadow
        position={[-0.15, 0.15, 2]}
        intensity={0.5}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <OrthographicCamera
        makeDefault
        ref={camRef}
        near={0}
        far={1000}
        position={[0, 0, 1]}
        zoom={aspectRatioBiggerOne ? 2.0 : 0.75}
      />
      <Postkarte />
      <mesh
        receiveShadow={true}
        position={[0, 0, -0.2]}
        rotation={[0, 0, -Math.PI * 0.5]}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
};
