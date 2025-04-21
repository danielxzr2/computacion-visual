import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function AnimatedSphere() {
  const meshRef = useRef()
  const clock = useThree((state) => state.clock)

  useFrame(() => {
    const t = clock.getElapsedTime()

    // Movimiento circular (radio = 2)
    const radius = 2
    meshRef.current.position.x = radius * Math.cos(t)
    meshRef.current.position.z = radius * Math.sin(t)

    // Rotación en eje Y
    meshRef.current.rotation.y += 0.01

    // Escalado oscilante
    const scale = 1 + 0.3 * Math.sin(t * 2)
    meshRef.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <AnimatedSphere />
    <OrbitControls />
    </Canvas>

  )
}
