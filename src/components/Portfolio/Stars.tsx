import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props: any) => {
  const ref: any = useRef();
  const controls: any = useRef();
  const {
    camera,
    gl: { domElement },
  }: any = useThree();

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.5 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    console.log(controls);
    controls.current.enableZoom = false;
    controls.current.rotateSpeed = 0.2;
    camera.position.set(0, 0, 1);
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <OrbitControls ref={controls} args={[camera, domElement]} />
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}>
        <PointMaterial
          transparent
          color="#dddd00"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
