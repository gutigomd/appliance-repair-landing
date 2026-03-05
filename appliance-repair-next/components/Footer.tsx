const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="text-center sm:text-left">
          © {year} USA Appliance Repair Service. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <div className="h-3 w-px bg-slate-300 hidden sm:block" />
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Visit us on Facebook"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.5 9.5V7.75c0-.69.56-1.25 1.25-1.25H16V4h-1.75A3.75 3.75 0 0 0 10.5 7.75V9.5H9v2.5h1.5V20h3v-8h2.02L16 9.5h-2.5Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Visit us on Instagram"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="5"
                  ry="5"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
                <circle cx="17" cy="7" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Visit us on Yelp"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3.5 9.8 8.4l-5.1.4 3.9 3.2-1.2 4.9L12 14.8l4.6 2.1-1.2-4.9 3.9-3.2-5.1-.4L12 3.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

