import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import Town from '../../assets/models/ChristmasTown.glb';
import { RigidBody } from '@react-three/rapier';

const ChristmasTown = () => {
  const { gl } = useThree();
  const gltf: any = useLoader(GLTFLoader, Town, (loader) => {
    const ktxLoader = new KTX2Loader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      'https://www.gstatic.com/draco/versioned/decoders/1.5.5/',
    );
    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.setWorkerLimit(1);
    loader.setDRACOLoader(dracoLoader);

    ktxLoader
      .setTranscoderPath(
        `https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/basis/`,
      )
      .detectSupport(gl);
    ktxLoader.setWorkerLimit(1);
    loader.setKTX2Loader(ktxLoader);
    ktxLoader.dispose();
    dracoLoader.dispose();
  });

  return (
    <>
      <RigidBody type="fixed" colliders={'trimesh'}>
        <primitive object={gltf.scene} scale={[9, 9, 9]} />
      </RigidBody>
    </>
  );
};

export default ChristmasTown;
