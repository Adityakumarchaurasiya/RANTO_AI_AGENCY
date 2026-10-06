import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse position state for subtle interactive force
    const mouse = { x: width / 2, y: height / 2, active: false };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    // Node graph setup
    const numNodes = Math.min(32, Math.floor(width / 30));
    const nodes = [];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        isAccent: i % 7 === 0
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid dots
      ctx.fillStyle = 'rgba(38, 38, 41, 0.4)';
      const step = 40;
      for (let x = 20; x < width; x += step) {
        for (let y = 20; y < height; y += step) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            node.x += (dx / dist) * 0.2;
            node.y += (dy / dist) * 0.2;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = node.isAccent || other.isAccent
              ? `rgba(201, 168, 106, ${alpha * 1.5})`
              : `rgba(245, 243, 238, ${alpha})`;
            ctx.lineWidth = node.isAccent ? 1.2 : 0.8;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAccent ? '#C9A86A' : '#F5F3EE';
        ctx.shadowColor = node.isAccent ? 'rgba(201, 168, 106, 0.8)' : 'rgba(245, 243, 238, 0.4)';
        ctx.shadowBlur = node.isAccent ? 10 : 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'auto' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%', opacity: 0.85 }}
      />
    </div>
  );
}
