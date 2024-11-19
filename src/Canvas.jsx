import React, { useEffect, useRef } from 'react'
import images from './images'
const Canvas = () => {
    const canvasRef = useRef(null)
    useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = images[20];
    
      
    }, [])
    
  return (
    <canvas ref={canvasRef} id="canvas" width="300" height="300"></canvas>
  )
}

export default Canvas