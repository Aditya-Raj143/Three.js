import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0.5
mesh.position.y = -0.6
mesh.position.set(-0.5, -0.4, 0)
scene.add(mesh)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

console.log(mesh.position.distanceTo(camera.position))

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// let time = Date.now()
// const clock = new THREE.Clock()

gsap.to(mesh.position, { duration: 1, delay: 1, x:2 })

//animation`
const tick = () => {

    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // console.log(deltaTime)
    // const elapsedtime  = clock.getElapsedTime()

    //update
    // mesh.position.y =  Math.sin(elapsedtime)
    // mesh.position.x = Math.cos(elapsedtime)
    // camera.lookAt(mesh.position)   

    //renderer
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()