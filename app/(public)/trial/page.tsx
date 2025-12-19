"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Point {
  x: number;
  y: number;
  z?: number;
}

type MorphState = "sphere" | "text";

const primary = new THREE.Color("#ff0066");
const secondary = new THREE.Color("#ffbb33");

export default function ParticleMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const currentStateRef = useRef<MorphState>("sphere");
  const animationIdRef = useRef<number | null>(null);
  const [inputText, setInputText] = useState<string>("");

  const count: number = 12000;

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // white background
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 25;

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Create particles
    createParticles();

    // Animation loop
    function animate(): void {
      animationIdRef.current = requestAnimationFrame(animate);

      if (currentStateRef.current === "sphere" && particlesRef.current) {
        particlesRef.current.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize(): void {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (
        containerRef.current &&
        renderer.domElement &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  function createParticles(): void {
    if (!sceneRef.current) return;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    function sphericalDistribution(i: number): Point {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      return {
        x: 8 * Math.cos(theta) * Math.sin(phi),
        y: 8 * Math.sin(theta) * Math.sin(phi),
        z: 8 * Math.cos(phi),
      };
    }

    for (let i = 0; i < count; i++) {
      const point = sphericalDistribution(i);

      positions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = point.z! + (Math.random() - 0.5) * 0.5;

      const color = new THREE.Color();
      //
      // const depth =
      //   Math.sqrt(point.x * point.x + point.y * point.y + point.z! * point.z!) /
      //   8;
      // color.copy(primary).lerp(secondary, depth);
      // const dist = Math.sqrt(
      //   point.x * point.x + point.y * point.y + point.z * point.z,
      // );
      //
      // // Choose a max distance based on your point cloud size
      // const maxDist = 40; // adjust this! (20–100)
      // const t = Math.min(dist / maxDist, 1); // clamp to 0–1
      color.copy(primary);
      // color.setHSL(0.5 + depth * 0.2, 0.7, 0.4 + depth * 0.3);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      blending: THREE.NormalBlending,
      transparent: false,
      opacity: 1,
      sizeAttenuation: true,
    });

    if (particlesRef.current) {
      sceneRef.current.remove(particlesRef.current);
    }
    particlesRef.current = new THREE.Points(geometry, material);
    particlesRef.current.rotation.x = 0;
    particlesRef.current.rotation.y = 0;
    particlesRef.current.rotation.z = 0;
    sceneRef.current.add(particlesRef.current);
  }

  function createTextPoints(text: string): Point[] {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return [];

    const fontSize = 100;
    const padding = 20;

    ctx.font = `bold ${fontSize}px Arial`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize;

    canvas.width = textWidth + padding * 2;
    canvas.height = textHeight + padding * 2;

    ctx.fillStyle = "white";
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const points: Point[] = [];
    const threshold = 128;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] > threshold) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);

        if (Math.random() < 0.3) {
          points.push({
            x: (x - canvas.width / 2) / (fontSize / 10),
            y: -(y - canvas.height / 2) / (fontSize / 10),
          });
        }
      }
    }

    return points;
  }

  function morphToText(text: string): void {
    if (!particlesRef.current) return;

    currentStateRef.current = "text";
    const textPoints = createTextPoints(text);
    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const targetPositions = new Float32Array(count * 3);

    // Reset rotation
    animateValue(particlesRef.current.rotation, "x", 0, 0.5);
    animateValue(particlesRef.current.rotation, "y", 0, 0.5);
    animateValue(particlesRef.current.rotation, "z", 0, 0.5);

    for (let i = 0; i < count; i++) {
      if (i < textPoints.length) {
        targetPositions[i * 3] = textPoints[i].x;
        targetPositions[i * 3 + 1] = textPoints[i].y;
        targetPositions[i * 3 + 2] = 0;
      } else {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 20 + 10;
        targetPositions[i * 3] = Math.cos(angle) * radius;
        targetPositions[i * 3 + 1] = Math.sin(angle) * radius;
        targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
    }

    morphPositions(positions, targetPositions, 2000);

    setTimeout(() => {
      morphToCircle();
    }, 4000);
  }

  function morphToCircle(): void {
    if (!particlesRef.current) return;

    currentStateRef.current = "sphere";
    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const targetPositions = new Float32Array(count * 3);
    const colors = particlesRef.current.geometry.attributes.color
      .array as Float32Array;

    function sphericalDistribution(i: number): Point {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      return {
        x: 8 * Math.cos(theta) * Math.sin(phi),
        y: 8 * Math.sin(theta) * Math.sin(phi),
        z: 8 * Math.cos(phi),
      };
    }

    for (let i = 0; i < count; i++) {
      const point = sphericalDistribution(i);

      targetPositions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
      targetPositions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
      targetPositions[i * 3 + 2] = point.z! + (Math.random() - 0.5) * 0.5;

      // Force primary color
      const color = new THREE.Color(primary);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    morphPositions(positions, targetPositions, 2000);
    particlesRef.current.geometry.attributes.color.needsUpdate = true;
  }

  function morphPositions(
    current: Float32Array,
    target: Float32Array,
    duration: number,
  ): void {
    if (!particlesRef.current) return;

    const start = Date.now();
    const startPositions = new Float32Array(current);

    function update(): void {
      if (!particlesRef.current) return;

      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);

      for (let i = 0; i < current.length; i++) {
        current[i] =
          startPositions[i] + (target[i] - startPositions[i]) * eased;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    update();
  }

  function animateValue(
    obj: THREE.Euler,
    prop: "x" | "y" | "z",
    target: number,
    duration: number,
  ): void {
    const start = Date.now();
    const startValue = obj[prop];

    function update(): void {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = easeInOutQuad(progress);

      obj[prop] = startValue + (target - startValue) * eased;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    update();
  }

  function easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function handleSubmit(): void {
    const text = inputText.trim();
    if (text) {
      morphToText(text);
      setInputText("");
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter text to morph..."
          className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-black/40 w-64"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-primary/50 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-colors"
        >
          Morph
        </button>
      </div>
    </div>
  );
}
