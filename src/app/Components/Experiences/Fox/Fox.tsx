"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Fox(props: any) {
    const { nodes, materials } = useGLTF("/fox.glb") as any
    const foxRef = useRef() as any
    const { viewport } = useThree()

    useFrame((state) => {
        const time = state.clock.elapsedTime
        foxRef.current.position.y = Math.sin(time * 2) * 0.07
    })

    useFrame(({mouse }) => {
        const x = (mouse.x * viewport.width) / 2
        const y = (mouse.y * viewport.height) / 2
        foxRef.current.rotation.y = (Math.PI) +  (x * 0.05)
        foxRef.current.rotation.x = - (y * 0.06)
    })

    console.log(viewport.width * 0.20)

  return (
        <group ref={foxRef} {...props} dispose={null} position-x={(viewport.width * 0.20)} scale={0.65}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FoxHead.geometry}
                material={materials["fox orange"]}
                position={[0.044, 3.012, 0.016]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FoxHead2.geometry}
                material={materials["Material.001"]}
                position={[0.044, 3.012, 0.018]}
                scale={0.926}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FoxHears.geometry}
                material={materials["Material.001"]}
                position={[0.059, 2.942, 0.043]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FoxEyes.geometry}
                material={materials.organic}
                position={[0.06, 0.005, 0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FoxSourcils.geometry}
                material={materials["Material.001"]}
                position={[0.05, 0.339, 0.014]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FoxNose.geometry}
                material={materials.organic}
                position={[0.044, 2.682, -0.987]}
                rotation={[2.176, 0, 0]}
                scale={[0.154, 0.103, 0.103]}
            />
        </group>
  );
}

useGLTF.preload("/Renard.glb");