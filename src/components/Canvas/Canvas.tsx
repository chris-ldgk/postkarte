import { FC, useEffect, useRef } from "react";
import { Canvas as ThreeCanvas, useThree } from "@react-three/fiber";
import { softShadows } from "@react-three/drei";
import { Renderer } from "three";

softShadows();

export const Canvas: FC = ({ children }) => {
  useEffect(() => {}, []);

  return <ThreeCanvas shadows>{children}</ThreeCanvas>;
};
