import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

function Car(props: any) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
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
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                >
                    <group
                        name="TheRocketAnimationfbx"
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Camera"
                                    position={[-409.529, 76.674, 740.405]}
                                    rotation={[0, 0.937, 0.108]}
                                    scale={100}
                                >
                                    <group name="Object_5" />
                                </group>
                                <group
                                    name="Armature"
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                >
                                    <group name="Object_7">
                                        <primitive object={nodes._rootJoint} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

export default Car;

useGLTF.preload("/models/hover_bike_-_the_rocket.glb");
