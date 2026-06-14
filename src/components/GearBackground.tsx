import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GearBackgroundProps {
  intensity?: 'high' | 'medium' | 'low';
}

function createGearShape(
  outerRadius: number,
  innerRadius: number,
  holeRadius: number,
  teeth: number,
  toothDepth: number
): THREE.Shape {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;

  for (let i = 0; i < teeth; i++) {
    const angle = i * step;
    const nextAngle = (i + 1) * step;
    const toothWidth = step * 0.35;

    const outerR = outerRadius;
    const innerR = innerRadius;
    const midR = innerRadius + toothDepth;

    if (i === 0) {
      shape.moveTo(
        Math.cos(angle - toothWidth / 2) * innerR,
        Math.sin(angle - toothWidth / 2) * innerR
      );
    }

    shape.lineTo(
      Math.cos(angle - toothWidth / 2) * midR,
      Math.sin(angle - toothWidth / 2) * midR
    );
    shape.lineTo(
      Math.cos(angle - toothWidth / 4) * outerR,
      Math.sin(angle - toothWidth / 4) * outerR
    );
    shape.lineTo(
      Math.cos(angle + toothWidth / 4) * outerR,
      Math.sin(angle + toothWidth / 4) * outerR
    );
    shape.lineTo(
      Math.cos(angle + toothWidth / 2) * midR,
      Math.sin(angle + toothWidth / 2) * midR
    );
    shape.lineTo(
      Math.cos(nextAngle - toothWidth / 2) * innerR,
      Math.sin(nextAngle - toothWidth / 2) * innerR
    );
  }

  const holePath = new THREE.Path();
  holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
  shape.holes.push(holePath);

  return shape;
}

interface GearData {
  mesh: THREE.Mesh;
  speed: number;
  radius: number;
}

export default function GearBackground({ intensity = 'high' }: GearBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    gears: GearData[];
    mouse: { x: number; y: number };
    raf: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    // No background - transparent

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    dirLight2.position.set(-3, -3, 4);
    scene.add(dirLight2);

    // Gear configurations based on intensity
    const gearConfigs = intensity === 'high'
      ? [
          { x: -3.5, y: 1.5, outerR: 2.2, innerR: 1.8, holeR: 0.5, teeth: 16, speed: 0.3 },
          { x: 1.2, y: 2.5, outerR: 1.6, innerR: 1.3, holeR: 0.4, teeth: 12, speed: -0.5 },
          { x: 3.8, y: 0.5, outerR: 1.3, innerR: 1.0, holeR: 0.3, teeth: 10, speed: 0.6 },
          { x: -1.0, y: -1.5, outerR: 1.9, innerR: 1.5, holeR: 0.45, teeth: 14, speed: -0.35 },
          { x: 2.5, y: -2.0, outerR: 1.1, innerR: 0.85, holeR: 0.25, teeth: 8, speed: 0.7 },
          { x: -4.0, y: -2.5, outerR: 0.9, innerR: 0.7, holeR: 0.2, teeth: 8, speed: -0.8 },
          { x: 0.5, y: 0.0, outerR: 0.7, innerR: 0.5, holeR: 0.15, teeth: 6, speed: 1.0 },
          { x: 4.5, y: -1.5, outerR: 0.8, innerR: 0.6, holeR: 0.18, teeth: 7, speed: -0.9 },
        ]
      : intensity === 'medium'
      ? [
          { x: -2, y: 1, outerR: 2.0, innerR: 1.6, holeR: 0.45, teeth: 14, speed: 0.2 },
          { x: 2, y: 1.5, outerR: 1.5, innerR: 1.2, holeR: 0.35, teeth: 11, speed: -0.35 },
          { x: 0, y: -1.5, outerR: 1.7, innerR: 1.4, holeR: 0.4, teeth: 13, speed: 0.25 },
          { x: 3.5, y: -1, outerR: 1.0, innerR: 0.75, holeR: 0.22, teeth: 8, speed: 0.5 },
          { x: -3.5, y: -1.5, outerR: 0.85, innerR: 0.65, holeR: 0.18, teeth: 7, speed: -0.55 },
        ]
      : [
          { x: 0, y: 0.5, outerR: 2.0, innerR: 1.6, holeR: 0.45, teeth: 14, speed: 0.15 },
          { x: 2.8, y: -0.5, outerR: 1.3, innerR: 1.0, holeR: 0.3, teeth: 10, speed: -0.3 },
          { x: -2.5, y: -1, outerR: 1.1, innerR: 0.85, holeR: 0.25, teeth: 9, speed: 0.35 },
        ];

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 2,
    };

    const gears: GearData[] = [];

    gearConfigs.forEach((config, i) => {
      const shape = createGearShape(
        config.outerR,
        config.innerR,
        config.holeR,
        config.teeth,
        (config.outerR - config.innerR) * 0.8
      );

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const isHighlight = i % 3 === 0;
      const material = new THREE.MeshStandardMaterial({
        color: isHighlight ? 0x444444 : 0x2a2a2a,
        metalness: 0.75,
        roughness: 0.25,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(config.x, config.y, 0);
      scene.add(mesh);

      gears.push({
        mesh,
        speed: config.speed,
        radius: config.outerR,
      });
    });

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Rotate gears
      gears.forEach((gear) => {
        gear.mesh.rotation.z += gear.speed * delta;
      });

      // Mouse parallax
      camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 0.5 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    sceneRef.current = { renderer, scene, camera, gears, mouse, raf };

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}
