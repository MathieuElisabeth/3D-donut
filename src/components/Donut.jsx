import { useRef } from "react";
import { useGLTF, useAnimations, useCursor } from "@react-three/drei";
import { useEffect, useState } from 'react'
import { randomColor } from "@/utils/randomColor";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/donut_sprinkles.glb");
  const { actions } = useAnimations(animations, group);
	const [sprinkles, setSprinkles] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [hovered, set] = useState()

  useCursor(hovered)

  function getSprinkles(nodes) {
    let sprinkles = []
    for(const item in nodes){
      if(item.includes('Sprinkle')) {
        sprinkles.push({
          ...nodes[item],
          colorMaterial: randomColor()
        })
      }
    }

    return sprinkles
  }

  useEffect(() => {
    const sprinkles= getSprinkles(nodes)
    setSprinkles(sprinkles)
    actions.DonutAction.play()
  }, [nodes])

  const handleDonutClick = () => {
    if (isPlaying) {
      actions.DonutAction.stop()
      setIsPlaying(false)
    } else {
      actions.DonutAction.play()
      setIsPlaying(true)
    }
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={40}>
        <mesh
          name="Donut"
          castShadow
          receiveShadow
          geometry={nodes.Donut.geometry}
          material={materials["Matériau.001"]}
          rotation={[1.07, -0.17, 0.31]}
          onClick={handleDonutClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        >
					<mesh
            name="Icing"
            castShadow
            receiveShadow
            geometry={nodes.Icing.geometry}
            material={materials.Matériau}
          />
					{
             sprinkles.map(item => (
	              <mesh
                  key={item.name}
	                name={item.name}
	                castShadow
	                receiveShadow
	                geometry={item.geometry}
	              >
	                <meshStandardMaterial color={item.colorMaterial} />
	              </mesh>
	            ))   
	        }
				</mesh>
	    </group>
	  </group>
	);
}

useGLTF.preload("/donut_sprinkles.glb");