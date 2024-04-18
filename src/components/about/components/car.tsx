import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

function Car(props: any) {
  const group = useRef();
  const [isMobile, setMobile] = useState(false);
  const { nodes, animations, cameras } = useGLTF(
    `${process.env.PUBLIC_URL}/models/hover_bike_-_the_rocket.glb`
  );
  let mixer = new THREE.AnimationMixer(nodes._rootJoint);

  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  const handleWindowSize = () => {
    const size = window.innerWidth;

    if (size <= 900) {
      setMobile(true);
      return;
    }

    setMobile(false);
  };

  useEffect(handleWindowSize, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 125.125]}>
        <group
          name="Object_7"
          position={[Math.PI / 2, 0, 0]}
          scale={isMobile ? 1.2 : 1}
        >
          <primitive
            object={nodes._rootJoint}
            position={isMobile ? [-1.5, 3, -0.5] : [0, 1.5, -1]}
            rotation={[0.1, 0.2, 6.0]}
          />
          <primitive object={cameras} makeDefault />
        </group>
      </group>
    </group>
  );
}

export default Car;

useGLTF.preload(`${process.env.PUBLIC_URL}/models/hover_bike_-_the_rocket.glb`);
