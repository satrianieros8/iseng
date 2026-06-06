const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  size: `${6 + (index % 5) * 3}px`,
  delay: `${-(index % 8) * 0.7}s`,
  duration: `${7 + (index % 6)}s`,
  drift: `${index % 2 === 0 ? 1 : -1}${18 + (index % 7) * 8}px`,
}))

function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle) => (
        <span
          className="particle"
          key={particle.id}
          style={{
            '--left': particle.left,
            '--size': particle.size,
            '--delay': particle.delay,
            '--duration': particle.duration,
            '--drift': particle.drift,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleField
