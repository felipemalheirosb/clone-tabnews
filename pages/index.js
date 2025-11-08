import { useState } from "react";

function Home() {
  const [audio] = useState(new Audio("/som.mp3"));

  const tocarSom = () => {
    audio.play();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mariana, clique aqui!</h1>
      <button onClick={tocarSom}>Clique aqui 🎵</button>
    </div>
  );
}

export default Home;
