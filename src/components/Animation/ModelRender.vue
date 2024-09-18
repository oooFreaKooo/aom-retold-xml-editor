<template>
    <div id="canvas-container" />
</template>

<script lang="ts" setup>
import * as THREE from 'three'
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js'

let loadedMesh: THREE.Mesh | null = null

onMounted(() => {
    let container: HTMLElement | null
    let camera: THREE.PerspectiveCamera
    let scene: THREE.Scene
    let renderer: THREE.WebGLRenderer
    let lightHelper: THREE.SpotLightHelper
    let spotLight: THREE.SpotLight
    const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `

    const fragmentShader = `
    varying vec2 vUv;
    // Function to add a vignette effect
    float vignette(vec2 uv) {
        float dist = distance(uv, vec2(0.5, 0.5));
        return smoothstep(0.8, 0.4, dist); // Adjust vignette intensity
    }

    // Function to generate noise
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }


    void main() {
        vec3 color1 = vec3(0.17, 0.3, 0.32);
        vec3 color2 = vec3(0.0, 0.2, 0.4);
        
        float diagonalGradient = vUv.x + vUv.y * 0.5;
        vec3 baseColor = mix(color1, color2, diagonalGradient);

        // Add some random noise for a subtle distortion effect
        float noise = random(vUv * 20.0);
        baseColor += noise * 0.07; 

        // Apply vignette effect
        float vig = vignette(vUv);
        baseColor *= vig;

        gl_FragColor = vec4(baseColor, 1.0);
    }
`
    init()

    function init () {
        container = document.getElementById('canvas-container')

        if (!container) {
            console.error('Canvas container not found')
            return
        }

        renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setAnimationLoop(animate)
        container.appendChild(renderer.domElement)

        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap

        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1

        scene = new THREE.Scene()

        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100)
        camera.position.set(5, 1.1, 9)

        const ambient = new THREE.HemisphereLight(0xF3FFFF, 0x8D8D8D, 0.25)
        scene.add(ambient)

        const loader = new THREE.TextureLoader().setPath('/')
        const filenames = [
            'disturb.jpg', 'colors.png', 'uv_grid_opengl.jpg',
        ]

        const textures: { [key: string]: THREE.Texture | null } = { none: null }

        for (let i = 0; i < filenames.length; i++) {
            const filename = filenames[i]

            const texture = loader.load(filename)
            texture.minFilter = THREE.LinearFilter
            texture.magFilter = THREE.LinearFilter
            texture.colorSpace = THREE.SRGBColorSpace

            textures[filename] = texture
        }

        spotLight = new THREE.SpotLight(0xFFFFFF, 100)
        spotLight.position.set(2.5, 5, 2.5)
        spotLight.angle = Math.PI / 6
        spotLight.penumbra = 1
        spotLight.decay = 2
        spotLight.distance = 0
        spotLight.map = textures['disturb.jpg']

        spotLight.castShadow = true
        spotLight.shadow.mapSize.width = 1024
        spotLight.shadow.mapSize.height = 1024
        spotLight.shadow.camera.near = 1
        spotLight.shadow.camera.far = 10
        spotLight.shadow.focus = 1
        scene.add(spotLight)

        // light helper
        lightHelper = new THREE.SpotLightHelper(spotLight)
        lightHelper.visible = false
        scene.add(lightHelper)
        const geometry = new THREE.PlaneGeometry(30, 30)
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            side: THREE.DoubleSide,
        })

        const gradientMesh = new THREE.Mesh(geometry, material)
        gradientMesh.position.z = -1 // Push it back behind the scene
        scene.add(gradientMesh)

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(0, 10, 0)
        mesh.rotation.x = -Math.PI / 2
        mesh.receiveShadow = true
        scene.add(mesh)

        new PLYLoader().load('Lucy100k.ply', function (geometry) {
            geometry.scale(0.0034, 0.0034, 0.0034)
            geometry.computeVertexNormals()

            const material = new THREE.MeshLambertMaterial()
            const mesh = new THREE.Mesh(geometry, material)
            mesh.rotation.y = -Math.PI / 2 - 0.8
            mesh.position.y = 1
            mesh.castShadow = true
            mesh.receiveShadow = true
            scene.add(mesh)

            loadedMesh = mesh // Save reference to the loaded mesh
        })

        // events
        window.addEventListener('resize', onWindowResize)
    }

    function onWindowResize () {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)

        if (loadedMesh) {
            if (window.innerWidth < 1168) {
                loadedMesh.position.set(5, 1, 0)
            } else {
                loadedMesh.position.set(0, 1, 0)
            }

            spotLight.position.set(loadedMesh.position.x - 5, loadedMesh.position.y + 5, loadedMesh.position.z + 5)
        }
    }

    function animate () {
        const time = performance.now() / 2000

        if (scene && camera && loadedMesh) {
            // Oscillate around the mesh's x and z position
            spotLight.position.x = 3 + loadedMesh.position.x + Math.cos(time)
            spotLight.position.z = loadedMesh.position.z + Math.sin(time)

            lightHelper.update()
            renderer.render(scene, camera)
        } else if (scene && camera) {
            // Default oscillation when no mesh is loaded
            spotLight.position.x = Math.cos(time) * 2
            spotLight.position.z = Math.sin(time)
            renderer.render(scene, camera)
        }
    }
})
</script>

<style scoped>
#canvas-container {
  perspective: 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
