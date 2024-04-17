import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

function Car(props: any) {
    const group = useRef();
    const { nodes, animations, cameras } = useGLTF(
        "/models/hover_bike_-_the_rocket.glb"
    );
    let mixer = new THREE.AnimationMixer(nodes._rootJoint);

    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    });

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 125.125]}>
                <group name="Object_7" position={[Math.PI / 2, 0, 0]}>
                    <primitive
                        object={nodes._rootJoint}
                        position={[0, 1.5, -1]}
                        rotation={[0.1, 0.2, 6.0]}
                    />
                    <primitive object={cameras} makeDefault />
                </group>
            </group>
        </group>
    );
}

export default Car;

useGLTF.preload("/models/hover_bike_-_the_rocket.glb");
