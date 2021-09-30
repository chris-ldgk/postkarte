import { Mesh, MeshStandardMaterial, Group } from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import PostkarteModel from "../../assets/postkarte.glb";
import {  useSpring } from "framer-motion";
import { useEffect } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Postkarte: Mesh;
  };
  materials: {
    Material: MeshStandardMaterial;
  };
};

export type PostkarteProps = JSX.IntrinsicElements["group"] & {};

export function Postkarte({ ...props }: PostkarteProps) {
    const [rotated, setRotated] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const cardRotationY = useSpring(0, {
        stiffness: 135,
        damping: 40,
        mass: 1.0
    });
    const nonMountedPosition = 1;
    const cardPosition = useSpring(nonMountedPosition, {
        stiffness: 135,
        damping: 40,
        mass: 1.0
    });
  const group = useRef<Group>();
  const { materials, nodes } = useGLTF(PostkarteModel) as unknown as GLTFResult;

    useEffect(() => {
        if (mounted) cardPosition.set(0)
        else cardPosition.set(nonMountedPosition)
    }, [mounted])

    useEffect(() => {
        if (rotated) cardRotationY.set(Math.PI)
        else cardRotationY.set(0)
    }, [rotated]);

    function updateGroupRotation(rotation: number) {
        if (group.current) group.current.rotation.y = rotation;
    }

    function updateGroupPosition(position: number) {
        if (group.current) group.current.position.x = position;
    }

    useEffect(() => {
        cardRotationY.onChange(updateGroupRotation)
        cardPosition.onChange(updateGroupPosition)

        setTimeout(() => {
            if (!mounted) {
                setMounted(true)
            }
        }, 100)
    }, []);


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        onClick={() => setRotated(!rotated)}
        geometry={nodes.Postkarte.geometry}
        material={materials.Material}
        rotation={[0, -(Math.PI / 2), 0]}
        scale={[1, 1, 1]}
        castShadow={true}
      />
    </group>
  );
}

useGLTF.preload(PostkarteModel);
