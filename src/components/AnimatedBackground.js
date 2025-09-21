
import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: {
            value: "transparent"
          }
        },
        fullScreen: {
          enable: false
        },
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          size: { value: 1 }
        }
      }}
      className="absolute inset-0 z-0"
    />
  );
}
