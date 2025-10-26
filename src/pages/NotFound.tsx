import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const handleMouseMove = (event: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = event;
        spotlightRef.current.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, transparent 10%, rgba(0, 0, 0, 0.95) 20%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">
      <div
        ref={spotlightRef}
        className="spotlight absolute top-0 left-0 w-full h-full z-20"
      ></div>
      <div className="stars absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="stars-2 absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="stars-3 absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="text-center z-10">
        <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
        <p className="mb-4 text-xl text-gray-300">Oops! Page not found</p>
        <Link to="/">
          <Button variant="hero" size="lg" className="text-base bg-slate-900 hover:bg-slate-800 transition-transform hover:-translate-y-1">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
