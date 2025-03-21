import React, { useEffect, useRef } from "react";

const Particles = () => {
  const canvasRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Atualizar tamanho ao redimensionar a tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 5; // 🔧 Tamanho entre 5px e 13px
        this.opacity = Math.random() * 0.4 + 0.3; // 🔧 Opacidade entre 0.3 e 0.7
        this.speed = Math.random() * 0.3 + 0.5; // 🔧 Velocidade entre 0.5px e 0.8px (reduzida)
        this.color = `rgba(60, 60, 60, ${this.opacity})`; // 🔧 Partícula mais escura
      }
 
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = Math.random() * -50;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < 20; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // 🔧 Impede interações com o canvas
        zIndex: -1, // 🔧 Mantém o fundo animado sem sobrepor elementos
      }}
    />
  );
};

export default Particles;
