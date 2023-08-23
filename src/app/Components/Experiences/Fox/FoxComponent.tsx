"use client"

import { Canvas } from '@react-three/fiber'
import Fox from './Fox'

export default function FoxComponent() {
  return (
    <>
        <Canvas
            camera={{ fov: 45, near: 0.1, far: 1000, position: [2, 0, 5] }}
        >
            <Fox />
            <ambientLight intensity={1.2} /> 
            <directionalLight />
        </Canvas>
    </>
  )
}
