const GradientOverlay = ({
  children,
  direction = "to-t",
  startColor = "white",
  endColor = "transparent",
  startPosition = "bottom-0",
  size = "h-1/2",
  className = "",
  zIndex = 10
}) => {
  const gradientClass = `bg-gradient-${direction}`
  const fromColor = `from-${startColor}`
  const toColor = `to-${endColor}`

  return (
    <div className="relative">
      <div
        className={`
          absolute inset-x-0 pointer-events-none
          ${startPosition} ${size} ${gradientClass} 
          ${fromColor} ${toColor} ${className}
        `}
        style={{ zIndex }}
      />
      {children}
    </div>
  )
}

export default GradientOverlay
