"use client"
import React, { useRef, useEffect } from 'react'
function BackgroundGrid() {
    const canvasRef = useRef(null)
    // start stracking without glitching
    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasCntxt = canvas.getContext("2d");
        let lastMove = Date.now
        let radius = 200;
    let mouseStopTimer;

        if (!canvasCntxt) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const mouse = { x: null, y: null }
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            // clearTimeout(mouseStopTimer);
            // mouseStopTimer=setTimeout(()=>{
            //     radius = 160
            // },1000)
            //             mouseStopTimer=setTimeout(()=>{
            //     radius = 120
            // },1500)
            //     mouseStopTimer=setTimeout(()=>{
            //     radius = 80
            // },2000)

            // radius = 200
        })

        const gridSize = 100;
        const squareSize = 80; // size of each square

        // Draw a loop runs ~60 times a second
        function draw() {
            // clear canvas every frame
            canvasCntxt.clearRect(0, 0, width, height);
            // Loop through a grid of points
            for (let x = 0; x < width; x += gridSize) {
                for (let y = 0; y < height; y += gridSize) {
                    // Measure distance from this grid point to mouse
                    const dist = Math.hypot(mouse.x - x, mouse.y - y);

                    // Compute intensity (1 = at mouse, 0 = beyond radius)
                    const intensity = Math.max(0, 1 - dist / radius);

                    // Optionally offset for smooth "movement" effect (smaller when far)
                    const offset = (radius - dist) /10;

                    const squareX = x + (mouse.x ? (mouse.x - x) * (offset / radius) : 0);
                    const squareY = y + (mouse.y ? (mouse.y - y) * (offset / radius) : 0);

                    // Map intensity to visual properties: alpha, line width, shadow
                    const minAlpha = 0.01; // faint baseline for distant squares
                    const strokeAlpha = minAlpha + intensity * (1 - minAlpha);
                    const lineW = 1 + intensity * 2; // 1..5
                    const blur = intensity > 0 ? intensity * 18 : 0;

                    canvasCntxt.save();
                    canvasCntxt.lineWidth = lineW;
                    canvasCntxt.strokeStyle = `rgba(0, 255, 255, ${strokeAlpha.toFixed(3)})`;
                    canvasCntxt.shadowColor = `rgba(0, 255, 255, ${strokeAlpha.toFixed(3)})`;
                    canvasCntxt.shadowBlur = blur;
                    canvasCntxt.strokeRect(squareX - squareSize / 2, squareY - squareSize / 2, squareSize, squareSize);
                    canvasCntxt.restore();

                }
            }
            requestAnimationFrame(draw)
        }
        draw();
        // When window is resized, update canvas dimensions
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener("mousemove", () => { });
            window.removeEventListener("resize", handleResize)
        }

    }, [])


    return (
        <canvas
            ref={canvasRef} // the reference to the DOM canvas
            className="fixed inset-0 -z-10 w-full h-full"
        // fixed → covers entire screen  
        // inset-0 → top:0 bottom:0 left:0 right:0  
        // -z-10 → behind all other content  
        />
    )
}

export default BackgroundGrid