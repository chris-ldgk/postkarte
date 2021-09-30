import { FC } from "react";
import {Canvas as ThreeCanvas} from '@react-three/fiber';
import { softShadows } from "@react-three/drei";

softShadows();

export const Canvas: FC = ({children}) => {
    return (
        <ThreeCanvas shadows>
            {children}
        </ThreeCanvas>
    )
}