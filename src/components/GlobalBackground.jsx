import { motion } from 'framer-motion';
import heroVideo from '../assets/bg.jpg.mp4'; // your video
import gradientFallback from '../assets/bg.jpg.mp4'; // optional poster

export default function GlobalBackground() {
  // Generate particles once
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden">
      {/* Video layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={gradientFallback}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Green gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/50 via-black/40 to-emerald-950/50" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-green-400"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 15px 3px rgba(34, 197, 94, 0.5)',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}