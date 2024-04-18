import { Canvas } from "@react-three/fiber";
import React from "react";
import Car from "./car";

function CarModel() {
    return (
        <Canvas className="!h-[400px] mobile:!h-[300px]">
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.25}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
            />
            <pointLight
                position={[-10, -10, -10]}
                decay={0}
                intensity={Math.PI}
            />
            <Car />
        </Canvas>
    );
}

export default CarModel;
