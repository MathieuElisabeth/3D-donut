import React, { useEffect, useRef } from 'react'
import { useProgress } from "@react-three/drei";


function Loader() {
  const { progress } = useProgress()
  const ref = useRef()

  useEffect(() => {
    if (progress === 100) {
      ref.current.classList.add("fade-out");
    }
  }, [progress]);

  return (
    <div ref={ref} className='loader'>
      <img src='/donut-spinner.webp' alt='' />
    </div>
  )
}

export default Loader
