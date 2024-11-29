export default function Particles() {
  const particlesArray = Array.from({ length: 60 }); // Número de partículas

  return (
    <div className="particles">
      {particlesArray.map((_, index) => {
        const size = 3 + Math.random() * 5; // Tamanho aleatório entre 3px e 8px

        return (
          <div
            key={index}
            style={{
              top: `${Math.random() * 100}vh`, // Começa em uma posição aleatória vertical
              left: `${Math.random() * 100}vw`, // Começa em uma posição aleatória horizontal
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: '0s', // Sem atraso, começa imediatamente
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
