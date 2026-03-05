const BackgroundArt = () => {
  return (
    <>
      {/* Left fridge illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 sm:-left-16 top-32 sm:top-24 h-72 sm:h-96 w-64 sm:w-80 opacity-10 text-primary-dark"
      >
        <svg
          viewBox="0 0 120 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <rect
            x="12"
            y="4"
            width="96"
            height="252"
            rx="14"
            stroke="currentColor"
            strokeWidth="4"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <rect
            x="20"
            y="16"
            width="80"
            height="104"
            rx="8"
            stroke="currentColor"
            strokeWidth="3"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <rect
            x="20"
            y="132"
            width="80"
            height="108"
            rx="8"
            stroke="currentColor"
            strokeWidth="3"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <line
            x1="20"
            y1="128"
            x2="100"
            y2="128"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="30" y="52" width="4" height="20" rx="2" fill="currentColor" />
          <rect x="30" y="168" width="4" height="20" rx="2" fill="currentColor" />
          <circle cx="86" cy="40" r="4" fill="currentColor" />
          <circle cx="74" cy="40" r="4" fill="currentColor" fillOpacity="0.7" />
        </svg>
      </div>

      {/* Right washer illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 sm:-right-20 bottom-10 sm:bottom-16 h-72 sm:h-96 w-64 sm:w-80 opacity-10 text-primary"
      >
        <svg
          viewBox="0 0 220 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <rect
            x="12"
            y="12"
            width="196"
            height="236"
            rx="16"
            stroke="currentColor"
            strokeWidth="4"
            fill="currentColor"
            fillOpacity="0.04"
          />
          <rect
            x="28"
            y="28"
            width="164"
            height="60"
            rx="10"
            stroke="currentColor"
            strokeWidth="3"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <circle cx="70" cy="56" r="6" fill="currentColor" />
          <circle cx="96" cy="56" r="6" fill="currentColor" fillOpacity={0.8} />
          <circle cx="122" cy="56" r="6" fill="currentColor" fillOpacity={0.6} />
          <circle
            cx="110"
            cy="166"
            r="62"
            stroke="currentColor"
            strokeWidth="4"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <circle
            cx="110"
            cy="166"
            r="42"
            stroke="currentColor"
            strokeWidth="3"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <path
            d="M64 164C70 178 83 188 99 188C118 188 129 176 145 176C156 176 164 180 170 186"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};

export default BackgroundArt;

