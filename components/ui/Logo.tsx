import React from "react";

const Logo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main black 3/4 circle */}
      <path
        d="M20 35c-8.284 0-15-6.716-15-15S11.716 5 20 5v15h15c0 8.284-6.716 15-15 15z"
        fill="currentColor"
      />
      {/* Blue quarter circle - flipped and shifted to the right */}
      <path
        d="M20 5c8.284 0 15 6.716 15 15H20V5z"
        fill="#2563EB"
        transform="scale(-1, 1) translate(-60, 0)"
      />
    </svg>
  );
};

export default Logo;
