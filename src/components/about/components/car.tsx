import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function Car(props: any) {
  const ref = useRef<THREE.Mesh>(null!);

  // Load 3D model
  const { scene, animations } = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/models/stylized_plane.glb`
  );

  // Define mixer for animations
  let mixer = new THREE.AnimationMixer(scene);

  animations.forEach((clip) => mixer.clipAction(clip).play());

  useFrame((state, delta) => mixer.update(delta));

  return (
    <mesh ref={ref}>
      <primitive object={scene} scale={6} rotation={[0.2, -1, 0]} />
    </mesh>
  );
}

export default Car;
