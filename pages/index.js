import { useState, useEffect } from "react";

export default function Home() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Evita erro "window is not defined" no build
    if (typeof window !== "undefined") {
      setAudio(new Audio("/som.mp3"));
    }
  }, []);

  const tocarSom = () => {
    audio?.play();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mariana, clique aqui!</h1>
      <button onClick={tocarSom}>Clique aqui 🎵</button>
    </div>
  );
}
