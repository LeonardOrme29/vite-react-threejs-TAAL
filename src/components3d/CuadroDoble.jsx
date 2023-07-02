/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.12 public/models/cuadroDoble.glb
*/

import React, { useRef } from 'react'
import { useGLTF, Text} from '@react-three/drei'
import { TextureLoader } from 'three';
import { useSelector } from 'react-redux';
import * as THREE from 'three'



export function CuadroDoble(props) {
  const { nodes, materials } = useGLTF('models/cuadroDoble.glb')
  const sumaX=1.6;
  //TEXTO DE TAMAÑO DEL CUADRO
  const frame=useSelector(state=>state.buildFrame)
  //Color del cuadro
  const colorFrame=useSelector(state => state.colorFrame)
  const material=new THREE.MeshBasicMaterial({color:colorFrame.materials[0]})
  materials.Material.color.r=material.color.r;
  materials.Material.color.g=material.color.g;
  materials.Material.color.b=material.color.b;
  //otro color
  var material2=new THREE.MeshBasicMaterial({color:colorFrame.materials[1]})
  materials.Material2.color.r=material2.color.r;
  materials.Material2.color.g=material2.color.g;
  materials.Material2.color.b=material2.color.b;
  //color del arte
  var materialArte=new THREE.MeshBasicMaterial({color:0x19C37D})
  //Material del vidrio
  const vidrio=new THREE.MeshPhysicalMaterial({
    roughness:0,
    metalness:0,
    transmission:1,
    ior:2.33
  })
  materials.vidrio=vidrio;
  const zoomFactor = 2.25;
  return (
    <group {...props} dispose={null} scale={[zoomFactor, zoomFactor, zoomFactor]}>
      <pointLight intensity={0.1} decay={2} position={[-1.62, 0.05, 3.06]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.liston001.geometry} material={materials.Material}position={[-2.33+sumaX, 0.12, 0.13]} rotation={[1.57, 0, Math.PI]} scale={[0.1, 0.1, 0.8]}></mesh>
      <mesh geometry={nodes.liston004.geometry} material={materials.Material} position={[-1.63+sumaX, 0.82, 0.13]} rotation={[-1.57, -1.57, 0]} scale={[0.1, 0.1, 0.8]}></mesh>
      <mesh geometry={nodes.liston002.geometry} material={materials.Material} position={[-0.93+sumaX, 0.12, 0.13]} rotation={[-1.57, 0, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.liston003.geometry} material={materials.Material} position={[-1.63+sumaX, -0.58, 0.13]} rotation={[-1.57, 1.57, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.vidrio.geometry} material={materials.vidrio} position={[-1.63+sumaX, 0.12, 0.11]} rotation={[-1.57, 0, 0]} scale={[0.7, 0.01, 0.7]}/>
      <mesh geometry={nodes.tapa.geometry} material={materials['tapa.001']} position={[-1.63+sumaX, 0.12, 0.04]} rotation={[-1.57, 0, 0]} scale={[0.7, 0.01, 0.7]} />
      <mesh geometry={nodes.liston006.geometry} material={materials.Material2} position={[-1.54+sumaX, 0.92, 0.22]} rotation={[-1.57, -1.57, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.liston007.geometry} material={materials.Material2} position={[-0.84+sumaX, 0.22, 0.22]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.liston005.geometry} material={materials.Material2} position={[-1.74+sumaX, -0.68, 0.22]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.liston008.geometry} material={materials.Material2} position={[-2.44+sumaX, 0.02, 0.22]} rotation={[1.57, 0, -3.14]} scale={[0.1, 0.1, 0.8]} />
      <mesh geometry={nodes.imagen.geometry} material={materialArte} position={[-1.63+sumaX, 0.12, 0.08]} rotation={[-1.57, 0, 0]} scale={[0.7, 0.01, 0.7]} />
      <group>
        <Text
          fontSize={0.1} // Tamaño de fuente
          font="" // Ruta de la fuente
          color="black" // Color del texto
          position={[1.1, 0.1, 0.13]} // Posición del texto en el espacio 3D
          rotation={[0, 0, 0]} // Rotación del texto
        >
          Alto:
        </Text>
        <Text
          fontSize={0.1} // Tamaño de fuente
          font="" // Ruta de la fuente
          color="black" // Color del texto
          position={[1.2, 0, 0.13]} // Posición del texto en el espacio 3D
          rotation={[0, 0, 0]} // Rotación del texto
        >{frame.frame.alturaC} cm</Text>
      </group>
        <Text
          fontSize={0.1} // Tamaño de fuente
          font="" // Ruta de la fuente
          color="black" // Color del texto
          position={[0, -1, 0.13]} // Posición del texto en el espacio 3D
          rotation={[0, 0, 0]} // Rotación del texto
        >
          Ancho: {frame.frame.anchoC} cm
        </Text>
    </group>
      
  )
}

useGLTF.preload('models/cuadroDoble.glb')
