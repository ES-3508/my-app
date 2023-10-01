import React from 'react'
import { Text } from '@react-three/drei'
export default function Note(props) {
  return (
    <>
      <Text
            props
            position={props.pos} // Adjust position as needed
            color="black" // Text color
            fontSize={1} // Font size
            maxWidth={10} // Maximum width for text wrapping
          >
            {props.text}
      </Text>
    </>
  )
}
