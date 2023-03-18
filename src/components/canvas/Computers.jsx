import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload,  Sphere, MeshDistortMaterial } from '@react-three/drei'




const ComputersCanvas = () => {
  const [isMobile, setIsMobile ] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])
  return (
    <Canvas>
    <Suspense fallback={null}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#3d1c56"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </Suspense>
  </Canvas>
  )
}
export default ComputersCanvas
