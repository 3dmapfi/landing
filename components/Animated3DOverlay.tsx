import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Animated3DOverlayProps {
  overlayTargetId: string;
}

function AnimatedEarth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);

  React.useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      // NASA Blue Marble texture (public domain)
      "https://raw.githubusercontent.com/gsathya/webgl-screenshare/refs/heads/master/earthmap1k.jpg",
      (tex) => setTexture(tex)
    );
  }, []);

  // Animate rotation on scroll
  useFrame(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollY * 0.003;
      meshRef.current.rotation.x = 0.2 + Math.sin(scrollY * 0.001) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.95, 128, 128]} />
      {texture ? (
        <meshStandardMaterial map={texture} />
      ) : (
        <meshStandardMaterial color={0xffffff} />
      )}
    </mesh>
  );
}

const Animated3DOverlay: React.FC<Animated3DOverlayProps> = ({
  overlayTargetId,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Position overlay at the top border of the CTA section, left side
  React.useEffect(() => {
    const updatePosition = () => {
      const target = document.getElementById(overlayTargetId);
      const mount = mountRef.current;
      if (target && mount) {
        const rect = target.getBoundingClientRect();
        mount.style.position = "fixed";
        mount.style.left = `${rect.left + rect.width * 0.08}px`;
        mount.style.top = `${rect.top - 2}px`;
        mount.style.width = `${rect.width * 0.18}px`;
        mount.style.height = `300px`;
        mount.style.pointerEvents = "none";
        mount.style.zIndex = "1000";
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [overlayTargetId]);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100px", pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          color={0xf3f3f3}
          intensity={0.7}
          position={[2, 2, 2]}
        />
        <AnimatedEarth />
      </Canvas>
    </div>
  );
};

export default Animated3DOverlay;
