import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeBg() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 220
    camera.position.y = 80
    camera.rotation.x = -0.3

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Particles Grid
    const numParticlesX = 55
    const numParticlesY = 55
    const separation = 12
    const numParticles = numParticlesX * numParticlesY

    const positions = new Float32Array(numParticles * 3)
    const scales = new Float32Array(numParticles)

    let i = 0
    for (let ix = 0; ix < numParticlesX; ix++) {
      for (let iy = 0; iy < numParticlesY; iy++) {
        positions[i] = ix * separation - (numParticlesX * separation) / 2 // x
        positions[i + 1] = 0 // y
        positions[i + 2] = iy * separation - (numParticlesY * separation) / 2 // z
        
        scales[ix * numParticlesY + iy] = 1.2
        i += 3
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

    // Material with custom circular particle rendering
    const material = new THREE.PointsMaterial({
      color: 0xD9E8E2, // Mystic Mint
      size: 2.2,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse movement interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event) => {
      // Normalize mouse positions
      const rect = container.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1
      mouseY = -((event.clientY - rect.top) / height) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let count = 0
    let animationFrameId

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth camera movement based on mouse
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      camera.position.x += (targetX * 80 - camera.position.x) * 0.03
      camera.position.y += (-targetY * 50 + 80 - camera.position.y) * 0.03
      camera.lookAt(new THREE.Vector3(0, -20, 0))

      const positions = geometry.attributes.position.array
      const scales = geometry.attributes.scale.array

      let index = 0
      count += 0.02

      for (let ix = 0; ix < numParticlesX; ix++) {
        for (let iy = 0; iy < numParticlesY; iy++) {
          // Wave equation
          positions[index + 1] =
            Math.sin(ix * 0.15 + count) * 12 +
            Math.sin(iy * 0.15 + count) * 12

          // Size oscillation
          scales[ix * numParticlesY + iy] =
            (Math.sin(ix * 0.15 + count) + 1) * 1.5 +
            (Math.sin(iy * 0.15 + count) + 1) * 1.5

          index += 3
        }
      }

      geometry.attributes.position.needsUpdate = true
      geometry.attributes.scale.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0 select-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
