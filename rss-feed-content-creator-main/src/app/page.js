"use client";
import Link from "next/link";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroSection from "./components/HeroSection";

export default function LandingPage() {
  const particlesInit = useCallback(
    async (engine) => {
      await loadFull(engine);
    },
    []
  );

  return (
    <>
      {/* Particle Background Layer */}
      <div className="fixed inset-0 -z-20">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: { value: "#000000" }, // dark background
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: { quantity: 4 },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: { value: "#6366f1" },
              links: {
                color: "#4f46e5",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen text-white">
        <div className="container mx-auto px-4">
          <HeroSection />

          {/* Section 1 */}
          <div className="py-16">
            <h2 className="text-2xl font-semibold mb-4">
              Section 1
            </h2>
            <p className="text-gray-300">
              Your content here...
            </p>
          </div>

          {/* Section 2 */}
          <div className="py-16">
            <h2 className="text-2xl font-semibold mb-4">
              Section 2
            </h2>
            <p className="text-gray-300">
              Your content here...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
