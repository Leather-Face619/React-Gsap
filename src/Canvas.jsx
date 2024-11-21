import images from './images'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const Canvas = () => {
  const [index, setIndex] = useState({value: 0})
  const canvasRef = useRef(null)

  useGSAP(() => {
    gsap.to(index, {
      value: 147,
      duration: 3,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({value: Math.round(index.value)})
      },
    })
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = images[index.value];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [index])

  return (
    <canvas ref={canvasRef} id="canvas" width="300" height="300"></canvas>
  )
}

export default Canvas