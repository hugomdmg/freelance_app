import React, { useEffect, useRef } from "react";

const Loading = () => {
    const canvasRef = useRef(null);
    const w = 120;
    const h = 120;
    let angle = 0;
    const originalPoints = [];
    for (let i = 0; i < Math.PI * 2; i += 0.05) {
        originalPoints.push({ x: 50 * Math.cos(i), y: 50 * Math.sin(i) });
    }

    const rotate = (point, angle) => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
            x: cos * point.x + sin * point.y,
            y: - sin * point.x + cos * point.y,
        };
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = w;
        canvas.height = h;

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.beginPath();
            ctx.lineWidth = 2;

            for (let i = 0; i < originalPoints.length; i++) {
                ctx.beginPath();
                ctx.lineWidth = 10 - i / 12;

                const rotatedPoint = rotate(originalPoints[i], angle);

                if (originalPoints[i + 1]) {
                    const nextRotatedPoint = rotate(originalPoints[i + 1], angle);

                    ctx.moveTo(rotatedPoint.x + w / 2, rotatedPoint.y + h / 2);
                    ctx.lineTo(nextRotatedPoint.x + w / 2, nextRotatedPoint.y + h / 2);
                }

                ctx.strokeStyle = `rgb(1, 101, 132, ${1 - i / 100})`;
                ctx.stroke();

            }
            angle += Math.PI / 20;
            requestAnimationFrame(draw);
        };
        draw();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <canvas ref={canvasRef} className="" />
            <p className="mb-4 text-gray-700">Loading...</p>
        </div>
    );
};

export default Loading;
