import { useEffect, useRef } from 'react';
import { useThree, useFrame, useLoader } from '@react-three/fiber';
import character from '../../assets/models/character.glb';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
import * as THREE from 'three';
import {
  useKeyboardControls,
  useAnimations,
  OrbitControls,
} from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module';

const Player = () => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const ref: any = useRef();
  const controls: any = useRef();
  const group: any = useRef();

  const {
    camera,
    gl: { domElement },
  }: any = useThree();

  const [, get] = useKeyboardControls();

  const { nodes, animations, materials }: any = useLoader(
    GLTFLoader,
    character,
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    },
  );

  const { actions }: any = useAnimations(animations, group);

  useEffect(() => {
    controls.current.enableRotate = true;
    controls.current.rotateSpeed = 0.3;
    controls.current.minAzimuthAngle = 0;
    controls.current.maxAzimuthAngle = Infinity;
    nodes.Scene.name = 'player';
    nodes.Scene.scale.setZ(-0.6);
    nodes.Scene.scale.setX(-0.6);
  }, []);

  useFrame((state, delta) => {
    let SPEED = 4;
    const { forward, backward, left, right, dash, dance }: any = get();
    nodes.Scene.rotation.copy(camera.rotation);
    const velocity = ref.current.linvel();
    const [x, y, z] = [...ref.current.translation()];

    if (forward || backward || left || right) {
      actions.Idle.stop();
      if (dash) {
        SPEED = 6;
        actions.Run.play().setEffectiveTimeScale(2.6);
      } else {
        SPEED = 4;
        actions.Run.play().setEffectiveTimeScale(1.3);
      }
      if (controls.current.maxPolarAngle > Math.PI * 0.42) {
        controls.current.maxPolarAngle -= Math.PI * 0.02;
      } else {
        controls.current.maxPolarAngle = Math.PI * 0.42;
      }
    } else if (dance) {
      actions.Idle.stop();
      actions['Song Jump'].play().setEffectiveTimeScale(1.3);
    } else {
      actions.Run.stop();
      actions['Song Jump'].stop();
      actions.Idle.play().setEffectiveTimeScale(2);
      controls.current.maxPolarAngle = Math.PI * 0.65;
    }

    if (forward && left) {
      nodes.Scene.rotateY(Math.PI * 0.25);
    } else if (backward && left) {
      nodes.Scene.rotateY(Math.PI * 0.75);
    } else if (left) {
      nodes.Scene.rotateY(Math.PI * 0.5);
    } else if (forward && right) {
      nodes.Scene.rotateY(-Math.PI * 0.25);
    } else if (backward && right) {
      nodes.Scene.rotateY(-Math.PI * 0.75);
    } else if (right) {
      nodes.Scene.rotateY(-Math.PI * 0.5);
    } else if (backward) {
      nodes.Scene.rotateY(Math.PI);
    }

    // movement
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
    group.current.position.set(x, y - 0.3, z);
    controls.current.target.set(x, y + 0.6, z);
    controls.current.update();
  });

  return (
    <>
      <OrbitControls
        ref={controls}
        args={[camera, domElement]}
        minDistance={1.7}
        maxDistance={1.7}
        minAzimuthAngle={-Math.PI * 0.25}
        maxAzimuthAngle={-Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.42}
        minPolarAngle={Math.PI * 0.42}
        enableRotate={false}
        enablePan={false}
      />
      <primitive ref={group} object={nodes.Scene} scale={0.6} />
      <RigidBody
        ref={ref}
        mass={1}
        type="dynamic"
        colliders={false}
        position={[-15.7, 3, 21.4]}>
        <CuboidCollider args={[0.3, 0.3, 0.3]} />
      </RigidBody>
    </>
  );
};

export default Player;
