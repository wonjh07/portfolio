import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Plain = () => {
  return (
    <>
      <RigidBody type="fixed" colliders={'trimesh'}>
        <mesh>
          <boxGeometry args={[100, 1, 100]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Plain;
