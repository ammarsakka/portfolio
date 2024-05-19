import { CameraControls, Center, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Car from "./car";

function CarModel() {
  return (
    <Canvas className="!h-[300px] mobile:!h-[400px]">
      <PerspectiveCamera makeDefault fov={4} position={[0, 0, 80]} />
      <ambientLight position={[1, 1, 1]} intensity={1.5} />
      <spotLight intensity={1} decay={0} position={[10, 10, 10]} />
      <pointLight intensity={1} decay={0} />
      <CameraControls />
      <Center>
        <Car />
      </Center>
    </Canvas>
  );
}

export default CarModel;
