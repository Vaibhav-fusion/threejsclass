import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import './App.css'
import { BackSide } from 'three'
// import SpinningBox from './SpinningBox'

function SpinningBox() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]}  scale={10} />
      <meshStandardMaterial color="indigo" metalness={0.8}  roughness={0.2} />
    </mesh>
  )
}

function App() {
  return (
    <>
    <h1>Hey play with this!</h1>
    <Canvas camera={{
          position: [0,0,-10],   
          fov: 60,              
          near: 0.1,           
          far: 1000,            
        }}
         >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} intensity={1} />
      <SpinningBox  />
      <OrbitControls />
      <Environment preset='sunset' ></Environment>
      
    </Canvas>
  </>
  )
}

export default App
