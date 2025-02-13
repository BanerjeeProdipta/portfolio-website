import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';

// Import TextGeometry from the examples folder
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

function Word({
  children,
  position,
}: {
  children: string;
  position: THREE.Vector3;
}) {
  const [hovered, setHovered] = useState(false);
  const [font, setFont] = useState<THREE.Font | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const fontLoader = new THREE.FontLoader();

  useEffect(() => {
    // Load the font when the component mounts
    fontLoader.load('/Inter-Bold.woff', setFont);
  }, []);

  useEffect(() => {
    // Set the cursor style when hovered
    if (hovered) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [hovered]);

  const over = () => setHovered(true);
  const out = () => setHovered(false);

  if (!font) return null; // Wait until the font is loaded before rendering the text

  // Create geometry for the 3D text
  const geometry = new TextGeometry(children, {
    font: font,
    size: 2.5,
    height: 0.5,
    curveSegments: 12,
  });

  const material = new THREE.MeshStandardMaterial({ color: 'white' });

  // Update the color based on hover state
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.material.color.lerp(
        new THREE.Color(hovered ? '#fa2720' : 'white'),
        0.1
      );
    }
  }, [hovered]);

  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={geometry}
      material={material}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log('clicked')}
    />
  );
}

// Cloud Component to generate multiple words in a spherical distribution
function Cloud({
  count = 4,
  radius = 20,
}: {
  count?: number;
  radius?: number;
}) {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          `Word${i * count + j}`,
        ]);
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </>
  );
}

// IconSphere component with basic Three.js scene setup
function IconSphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);

  // Initialize scene, camera, and renderer
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    setScene(scene);
    setCamera(camera);
    setRenderer(renderer);

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 10, 10);
    scene.add(spotLight);

    // Handle window resizing
    const handleResize = () => {
      if (renderer && camera) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, [scene, camera, renderer]);

  return <canvas ref={canvasRef} />;
}

export default IconSphere;
