// import React, { useRef } from 'react'
// import { useGLTFLoader } from '@react-three/drei/loaders/useGLTFLoader'

// export default function Model(props) {
//   const group = useRef()
//   const { nodes, materials } = useGLTFLoader('/scene_draco.glb', true)
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
//             <mesh material={materials.EyeFire} geometry={nodes.Circle011_EyeFire_0.geometry} />
//             <mesh material={materials.SerpentBake} geometry={nodes.Circle011_SerpentBake_0.geometry} />
//           </group>
//           <group position={[-1018.2, -380.53, 1332.67]} rotation={[-1.05, 0.72, -0.08]} scale={[100, 100, 100]}>
//             <mesh material={materials.EyeFire} geometry={nodes.Hide003_EyeFire_0.geometry} />
//             <mesh material={materials.Boat2Bake} geometry={nodes.Hide003_Boat2Bake_0.geometry} />
//           </group>
//           <group position={[349.57, 32.32, 176.64]} rotation={[-1.73, -0.23, -2.65]} scale={[100, 100, 100]}>
//             <mesh material={materials.EyeFire} geometry={nodes.Keel002_EyeFire_0.geometry} />
//             <mesh material={materials.Boat1Bake} geometry={nodes.Keel002_Boat1Bake_0.geometry} />
//           </group>
//           <group position={[0, 27.07, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 170.02]}>
//             <mesh material={materials.WaterBake} geometry={nodes.Plane044_WaterBake_0.geometry} />
//           </group>
//           <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
//             <mesh material={materials.RockBake} geometry={nodes.Rock021_RockBake_0.geometry} />
//           </group>
//           <group scale={[100, 100, 100]}>
//             <mesh material={materials.Objects} geometry={nodes.VikingShipObjects001_Objects_0.geometry} />
//             <mesh material={materials.Objects} geometry={nodes.VikingShipObjects001_Objects_0001.geometry} />
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }