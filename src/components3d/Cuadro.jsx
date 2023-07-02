/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.12 public/models/cuadro.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { OrthographicCamera } from '@react-three/drei'; 


export function Cuadro(props) {
  const { nodes, materials } = useGLTF('models/cuadroIluminado.glb')
  const sumaX=1.6;
  const sumaY=0;
  const sumaZ=0;
  nodes.liston004.material.color.r=props.color.color.r;
  nodes.liston004.material.color.g=props.color.color.g;
  nodes.liston004.material.color.b=props.color.color.b;

  console.log(nodes.liston004.material.color)
  //console.log(props.color.color)
  return (
      <group {...props} dispose={null}>
      <mesh geometry={nodes.liston001.geometry} material={nodes.liston004.material} position={[-2.33+sumaX, 0.12-sumaY, 0.13+sumaZ]} rotation={[1.57, 0, Math.PI]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.liston004.geometry} material={nodes.liston001.material} position={[-1.63+sumaX, 0.82-sumaY, 0.13+sumaZ]} rotation={[-1.57, -1.57, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.liston002.geometry} material={nodes.liston002.material} position={[-0.93+sumaX, 0.12-sumaY, 0.13+sumaZ]} rotation={[-1.57, 0, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.liston003.geometry} material={nodes.liston003.material} position={[-1.63+sumaX, -0.58-sumaY, 0.13+sumaZ]} rotation={[-1.57, 1.57, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.vidrio.geometry} material={materials.vidrio} position={[-1.63+sumaX, 0.12-sumaY, 0.11+sumaZ]} rotation={[-1.57, 0, 0]} scale={[0.7, 0.01, 0.7]} />
      <mesh geometry={nodes.tapa.geometry} material={materials['tapa.001']} position={[-1.63+sumaX, 0.12-sumaY, 0.04+sumaZ]} rotation={[-1.57, 0, 0]} scale={[0.7, 0.01, 0.7]} />
      </group>
  )
}

useGLTF.preload('models/cuadroIluminado.glb')
