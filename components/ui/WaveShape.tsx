interface WaveShapeProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

const WaveShape = ({ position, className = '' }: WaveShapeProps) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-x-[-1] scale-y-[-1]'
  };

  return (
    <div className={`absolute w-[400px] h-[400px] pointer-events-none ${positionClasses[position]} ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {[...Array(4)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${120 + i * 40}C80 ${120 + i * 40} 120 ${160 + i * 40} 120 ${240 + i * 40}C120 ${320 + i * 40} 160 ${360 + i * 40} 240 ${360 + i * 40}`}
            stroke="#94A3B8"
            strokeWidth="1"
            className="opacity-20"
          />
        ))}
      </svg>
    </div>
  );
};

export default WaveShape; 