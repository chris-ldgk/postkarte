import { PropsWithChildren, useEffect } from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
// import { SoftShadows } from "@react-three/drei";

// SoftShadows();

export const Canvas = ({ children }: PropsWithChildren) => {
  useEffect(() => {}, []);

  return <ThreeCanvas shadows>{children}</ThreeCanvas>;
};
